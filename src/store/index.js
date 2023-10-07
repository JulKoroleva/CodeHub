import { createStore } from "vuex";

import { commentStore } from "./commentStore";
import { folder } from "jszip";

const generateUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);
function prettySortFolderElements(folderArray) {
  const sortedFolders = [];
  const sortedFiles = [];

  if (folderArray.children && Array.isArray(folderArray.children)) {
    folderArray.children.forEach((currentElement) => {
      if (currentElement.type === "folder") {
        sortedFolders.push(currentElement);
      } else if (currentElement.type === "text/plain") {
        sortedFiles.push(currentElement);
      } else {
        console.log(`ERROR: unknown type ${currentElement.type}`);
      }
    });
  }

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  sortedFolders.sort(compare);
  sortedFiles.sort(compare);
  const sortedAllElements = [...sortedFolders, ...sortedFiles];
  return sortedAllElements;
}


const store = createStore({
  modules: {
    comment: commentStore,
  },
  state: {
    repositories: [],
    newRepository: "",
    newRepositoryName: "",
    newFile: "",
    selectedRepository: null,
    expandedFolder: null,
    selectedFile: null,
    selectedFileContent: "",
    textarea: "",
    comments: [],
  },
  mutations: {
    createRepository(state, name) {
      const newRepository = {
        id: generateUniqueId(),
        name: name || "Новый репозиторий", // если name не передан, используй дефолтное значение
        files: [],

          children: [],
        type: "folder",
      };
      state.repositories.push(newRepository);
    },
    createFolderInRepository(state, folderName) {
      if (state.selectedRepository) {
        const newFolder = {
          id: generateUniqueId(),
          name: folderName || "Новая папка",
          type: "folder",
          files: [], 
          children: []
        };
        state.selectedRepository.files.push(newFolder);
        state.selectedRepository.files.sort((a, b) => {
          if (a.type === "folder" && b.type !== "folder") {
            return -1; // Папки всегда выше файлов
          } else if (a.type !== "folder" && b.type === "folder") {
            return 1; // Файлы всегда ниже папок
          } else {
            return 0; // Не менять порядок для элементов одного типа
          }
        });
      }
    },

    createFileInRepository(state, fileName) {
      if (state.selectedRepository) {
        const name = fileName.trim() !== "" ? fileName : "Новый файл.txt";
        const lastModified = new Date().getTime();
        const newFile = {
          id: generateUniqueId(),
          name: name,
          type: "text/plain",
          content: "",
          lastModified,
        };

        state.newFile = newFile;
        state.selectedRepository.files.push(newFile);
        state.selectedFile = newFile;
      }
    },

    setSelectedFolder(state, folder) {
      state.expandedFolder = folder;
      console.log("folder store:", folder);

      if (folder && folder.type === "folder" && folder.children !== null) {
        // Check if folder.files is an array before sorting
        if (Array.isArray(folder.children)) {
          folder.children = prettySortFolderElements(folder);
        } else {
          console.log(`ERROR: folder.files is not an array`);
        }
      }
    },
    selectRepository(state, repository) {
      state.selectedRepository = repository;
    },
    setSelectedFile(state, file) {
      state.selectedFile = file;
    },
    updateFileContent(state, content) {
      if (state.selectedRepository && state.selectedFile) {
        const repository = state.selectedRepository;
        const fileIndex = repository.files.findIndex(
          (file) => file.lastModified === state.selectedFile.lastModified
        );

        if (fileIndex !== -1) {
          repository.files[fileIndex].content = content;
          state.textarea = content;
        }
      }
    },
    renameItem(state, file) {
      if (state.selectedFile === file) {
        const repository = state.selectedRepository;
        const fileIndex = repository.files.findIndex(
          (file) => file.lastModified === state.selectedFile.lastModified
        );

        if (fileIndex !== -1) {
          repository.files[fileIndex].name = file.name;
        }
      }
    },

    setRepositoryContent(state, { repository, content }) {
      repository.files = content;
    },

    addComment(state, { file, lineNumber, author, text }) {
      const comment = {
        file,
        lineNumber,
        author,
        text,
      };
      state.comments.push(comment);
    },

    // deleteFileFromRepositories(state, fileId) {
    //   const deleteFileRecursively = (array) => {
    //     if (!array || !Array.isArray(array)) {
    //       console.log('это не массив')
    //       return;
    //     }

    //     for (let i = 0; i < array.length; i++) {
    //       const item = array[i];

    //       if (item && item.id === fileId) {
    //         // Удалить выбранный файл из родительского массива
    //         array.splice(i, 1);
    //         return;
    //       }

    //       if (item && item.children && item.children.length > 0) {
    //         deleteFileRecursively(item.children);
    //       }
    //     }
    //   };

    //   const traverseRepositories = (repositories) => {
    //     if (!repositories || !Array.isArray(repositories)) {
    //       return;
    //     }

    //     repositories.forEach((repository) => {
    //       deleteFileRecursively(repository.files);

    //       if (repository.children && repository.children.length > 0) {
    //         traverseRepositories(repository.children);
    //       }
    //     });
    //   };

    //   traverseRepositories(state.repositories);
    // },

    deleteFile(state) {
      if (state.selectedRepository && state.selectedFile) {
        const repository = state.selectedRepository;
    
        const removeFile = (entity) => {
          if (Array.isArray(entity)) {
            entity.forEach((child, index) => {
              if (child.type === 'folder') {
                console.log('child === state.expandedFolder',child,state.expandedFolder)
                if (child === state.expandedFolder) {
                  entity.splice(index, 1);
                } else {
                  removeFile(child.children);
                }
              } else if (child.type === 'text/plain' && child === state.selectedFile) {
                entity.splice(index, 1);
              } else {
                console.log(`ERROR: Unknown type ${child.type}`);
              }
            });
          } else {
            console.log(`ERROR: entity is not an array`);
          }
        };
    
        removeFile(repository.children);
      }
    },
  },
  actions: {
    createRepository({ commit, state }, name) {
      commit("createRepository", name);
    },
    createFolderInRepository({ commit, state }, folderName) {
      commit("createFolderInRepository", folderName);
    },

    // Действие для создания файла в выбранном репозитории
    createFileInRepository({ commit, state }, fileName) {
      commit("createFileInRepository", fileName);
    },
    selectRepository({ commit }, repository) {
      commit("selectRepository", repository);
    },
    setSelectedFile({ commit }, file) {
      commit("setSelectedFile", file);
    },
    setSelectedFolder({ commit }, folder) {
      commit("setSelectedFolder", folder);
    },
    updateFileContent({ commit }, content) {
      commit("updateFileContent", content);
    },

    renameItem({ commit }, { originalItem, updatedItem }) {
      commit("renameItem", { originalItem, updatedItem });
    },
  },
  getters: {
    selectedFile: (state) => state.selectedFile,
  },
});

export default store;

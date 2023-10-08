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
        name: name || "New Repository",
        files: [],
        level: 0,
        children: [],
        type: "folder",
      };
      state.repositories.push(newRepository);
    },
    createFolderInRepository(state, folderName) {
      if (state.selectedRepository) {
        const newFolder = {
          id: generateUniqueId(),
          name: folderName || "New Folder",
          type: "folder",
          files: [],
          children: [],
        };
      }
    },

    createFileInRepository(state, fileName) {
      if (state.selectedRepository) {
        const name = fileName.trim() !== "" ? fileName : "NewFile.txt";
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

    deleteFile(state) {
      console.log("start:");
      console.log("selectedRepository:", state.selectedRepository);
      if (
        (state.selectedRepository && state.selectedFile) ||
        state.expandedFolder
      ) {
        console.log("state.selectedFile:", state.selectedFile);
        const repository = state.selectedRepository;
        console.log("repository:", repository);
        const removeFile = (entity) => {
          console.log("enter to remove file:", entity);
          if (Array.isArray(entity)) {
            console.log("entity is array:", entity);
            entity.forEach((child, index) => {
              if (child.type === "folder") {
                if (child === state.expandedFolder) {
                  console.log("child === state.expandedFolder", entity);
                  entity.splice(index, 1);
                } else {
                  removeFile(child.children);
                }
              } else if (
                child.type === "text/plain" &&
                child === state.selectedFile
              ) {
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

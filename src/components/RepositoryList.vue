<template>
  <div class="repositories-container">
    <h2 @click="createRepository">Список репозиториев</h2>
    <div class="create-repository__container" :class="{ expanded: shifted }">
      <input
        v-model="newRepositoryName"
        placeholder="Новый репозиторий"
        class="create-repository__container_input"
        @keydown.enter="createRepository"
        maxlength="30"
      />
      <button
        @click="toggleAddBtn"
        class="create-repository__container_btn"
        :class="{ 'button-shifted': shifted }"
      >
        +
      </button>
    </div>
    <div class="repositories-list">
      <ul style="padding: 0 15px">
        <li v-for="repository in repositories" :key="repository.id">
          <div class="repository__name" @click="toggleRepository(repository)">
            <div class="repository-line"></div>
            {{ repository.name }}
          </div>

          <FileItem
            v-if="repository === expandedRepository"
            :item="repository"
            @createFolder="createFolderInRepository"
            @createFile="createFileInRepository"
            @selectFile="selectFileHandler"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FileItem from "@/components/FileItem.vue";

export default {
  data() {
    return {
      repositories: this.$store.state.repositories,
      newRepositoryName: "",
      expandedRepository: null,
      shifted: false,
      isInputAnimationComplete: false,
    };
  },
  methods: {
    toggleAddBtn() {
      console.log("toggleAddBtn");
      if (this.expandedRepository) {
      } else {
        this.expandedRepository = true;
      }

      this.shifted = !this.shifted;
      const addButton = document.querySelector(
        ".create-repository__container_btn"
      );

      const repositoryСontainer = document.querySelector(
        ".create-repository__container"
      );

      repositoryСontainer.classList.toggle("expanded", this.shifted);
      addButton.classList.toggle("button-shifted", this.shifted);
      this.isInputAnimationComplete = false;

      addButton.addEventListener("transitionend", () => {
        this.isInputAnimationComplete = true;
      });
      setTimeout(() => {
        addButton.classList.toggle(
          "hidden",
          !this.shifted && this.isInputAnimationComplete
        );
      }, 1000); // Измените это значение в зависимости от вашего предпочтения
    },
    handleKeyUp(event) {
      if (event.key === "Enter") {
        this.createRepository();
      }
    },

    createRepository() {
      if (this.newRepositoryName.trim() === "") {
        // Проверка на пустой ввод
        this.newRepositoryName = "Новый репозиторий";
      }
      this.$store.dispatch("createRepository", this.newRepositoryName);
      this.newRepositoryName = "";
      console.log(
        "this.$store.state.repositories",
        this.$store.state.repositories
      );
    },
    createFolderInRepository() {
      const folderName = prompt("Введите имя папки:") || "Новая папка";
      this.$store.dispatch("createFolderInRepository", folderName);
    },

    createFileInRepository() {
      const fileName = prompt("Введите имя файла:") || "Новый файл";
      this.$store.dispatch("createFileInRepository", fileName);
    },
    selectFileHandler(selectedFile) {
      this.$store.dispatch("selectFile", selectedFile);
      console.log("selectedFile!:", selectedFile);
    },
    downloadRepository() {
      // Ваша логика для скачивания репозитория
    },
    toggleRepository(repository) {
      if (this.expandedRepository === repository) {
        this.expandedRepository = null;
      } else {
        this.expandedRepository = repository;
      }
      this.$store.dispatch("selectRepository", repository);
    },
  },
  components: {
    FileItem,
  },
};
</script>


<style scoped>
.repositories-list {
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 300px;
  padding: 0 0 77px 0;
  scrollbar-width: thin; /* Для Firefox */
  scrollbar-color: #4e5253 transparent; /* Цвет полосы прокрутки и фона */
}

/* Для WebKit (Chrome, Safari) */
.repositories-list::-webkit-scrollbar {
  width: 3px; /* Ширина полосы прокрутки */
}

.repositories-list::-webkit-scrollbar-thumb {
  background-color: #4e5253; /* Цвет полосы прокрутки */
  border-radius: 30px;
}

.repositories-list::-webkit-scrollbar-track {
  background-color: transparent; /* Фон полосы прокрутки */
  border-radius: 30px;
}

.create-repository__container {
  display: flex;
  flex-direction: row;
  height: 150px;
}
.repository-line {
  position: absolute;
  height: 0.5px;
  left: -500px;
  width: 500vh;
  background-color: rgb(82, 81, 81);
}
.repository__name {
  position: relative;
  font-size: 20px;
  text-align: end;
  margin-top: 30px;
  color: #c1c1c1;
}

.repository__name:hover {
  cursor: pointer;
}

.create-repository__container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 40px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.create-repository__container_btn.button-shifted.hidden {
  width: 30px; /* Добавлено свойство width */
  right: -30px; /* Добавлено свойство right */
}
.create-repository__container_btn.button-shifted {
  right: 0;
  margin-right: auto;
  transition: all 0.2s ease;
  width: 40px;
  height: 40px;
}
.create-repository__container_btn {
  width: 40px;
  height: 40px;
  background-color: #4e5253;
  border-radius: 5px;
  margin-left: 5px;
  border: none;
  background: #bfbfbf;
}

.create-repository__container_input {
  height: 20px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 4px;
  background-color: #4e5253;
  color: aliceblue;

  padding: 0 0 0 5px;
}
.create-repository__container input {
  position: absolute;
  top: 0;
  left: 30px; /* Изменено свойство left */
  width: calc(100% - 60px); /* Изменено свойство width */
  height: 100%;
  margin: 0;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
}

.create-repository__container.expanded {
  height: auto;
}

.create-repository__container.expanded input {
  opacity: 1;
  left: 50px;
  pointer-events: auto;
}
</style>
<template>
  <div class="repository-container">
    <div class="underline"></div>
    <div
      class="control"
      @dblclick="renameItem"
      @click="toggleFolder(item)"
      @mouseover="showDownloadButton = true"
      @mouseleave="showDownloadButton = false"
    >
      <span
        v-if="item.type === 'folder' || item.type === 'array'"
        class="folder"
      >
        <span
          v-if="item.children && item.children.length > 0"
          class="folder-indicator"
          v-show="expandedFolder === item"
        >
          <div class="arrow_down"></div>
        </span>
        <span
          v-if="item.children && item.children.length > 0"
          class="folder-indicator"
          v-show="expandedFolder !== item"
        >
          <div class="arrow_right"></div>
        </span>
        <span v-if="!item.renaming" @dblclick="startRename" class="name">
          {{ item.name }}
        </span>
        <input
          v-else
          type="text"
          v-model="item.newName"
          @blur="finishRename"
          @keyup.enter="finishRename"
          class="rename-input"
          ref="renameInput"
          maxlength="15"
        />
      </span>

      <span v-else @click="selectFile" class="file">
        <span v-if="!item.renaming" @dblclick="startRename" class="name">
          {{ item.name }}
        </span>
        <input
          v-else
          type="text"
          v-model="item.newName"
          @blur="finishRename"
          @keyup.enter="finishRename"
          class="rename-input"
          ref="renameInput"
          maxlength="15"
        />
      </span>
      <div
        class="download-btn"
        @click.prevent="toggleFolder(item)"
        @mouseleave="closeCreateButtons"
        v-show="showDownloadButton"
      >
        <button
          class="add_btn"
          @click="toggleCreateButtons(item)"
          v-if="item.type === 'folder'"
        ></button>
        <button
          class="add_btn"
          @click="toggleCreateButtons(item)"
          v-else-if="item.type === 'array'"
        ></button>
        <button
          class="download_btn"
          @click="downloadFile"
          v-if="item.type === 'text/plain'"
          v-show="showDownloadButton"
        ></button>
        <button class="delete_btn" @click="deleteFile(this.item)"></button>

        <div v-if="createMenuVisible" class="create-buttons">
          <button
            class="new-folder_btn"
            @click="createFolder"
            style="
              border: none;
              border-bottom: 1px solid black;
              color: #27282d;
              opacity: 0.3;
            "
            v-if="this.item.level >= 6"
            :disabled="this.item.level >= 6"
          >
            folder
          </button>
          <button
            class="new-folder_btn"
            @click="createFolder"
            style="
              border: none;
              border-bottom: 1px solid black;
              color: #27282d;
              opacity: this.item.level >= 6 ? 0.9 : 1;
            "
            v-else
          >
            folder
          </button>
          <button
            class="new-file_btn"
            @click="createFile"
            style="
              background-color: rgba(197, 197, 197);
              border: none;
              color: #27282d;
            "
          >
            file
          </button>
        </div>
      </div>
    </div>

    <CreateFileModal
      v-if="showModal"
      :visible="showModal"
      :prompt="modalPrompt"
      @confirm="handleConfirmCreation"
      @cancel="handleCancel"
      :itemType="modalType"
      @create="handleCreate"
      :level="level + 1"
    />

    <div
      v-if="!collapsed && item.children && item.children.length > 0"
      :class="{ expand: expandedFolder === item }"
      class=""
    >
      <ul>
        <li
          v-for="childItem in item.children"
          :key="childItem.name"
          v-if="expandedFolder === item"
          style="align-items: flex-start"
        >
          <FileItem
            :item="childItem"
            :level="level + 1"
            :newItemName="childItem.newItemName"
            @updateNewItemName="updateChildNewItemName"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CreateFileModal from "./CreateFileModal.vue";

export default {
  components: {
    CreateFileModal,
  },
  props: {
    item: Object,
    level: {
      type: Number,
      default: 0,
    },
    newItemName: String,
  },
  data() {
    return {
      showModal: false,
      modalPrompt: "",
      modalType: "",
      createMenuVisible: false,
      expandedFolder: null,
      showDownloadButton: true,
      showDeleteButton: false,
    };
  },
  methods: {
    showDownloadButton() {
      this.showDownloadButton = false;
    },
    showDeleteButton() {
      this.showDeleteButton = true;
    },

    hideDeleteButton() {
      this.showDeleteButton = false;
    },
    hideDownloadButton() {
      this.showDownloadButton = true;
    },
    toggleFolder(folder) {
      if (folder.type === "folder") {
        if (this.expandedFolder === folder) {
          this.expandedFolder = null;
          this.$store.dispatch("setSelectedFolder", folder);
        } else {
          this.expandedFolder = folder;
          this.$store.dispatch("setSelectedFolder", folder);
        }
        console.log(
          "this.$store.state.expandedFolder",
          this.$store.state.expandedFolder
        );
      }
    },
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    },
    handleCancel() {
      this.showModal = false;
      this.toggleCreateButtons();
    },
    toggleCreateButtons(folder) {
      this.createMenuVisible = !this.createMenuVisible;
      this.$store.dispatch("setSelectedFolder", folder);
      console.log("Current level:", this.item.level);
    },
    closeCreateButtons() {
      this.createMenuVisible = false;
    },
    handleConfirmCreation(itemName, itemType) {
      if (itemType === "folder") {
        this.createFolder(itemName);
      } else if (itemType === "file") {
        this.createFile(itemName);
        console.log("create file");
      }
      this.showModal = false;
      this.$store.dispatch("setSelectedFolder", this.expandedFolder);
      this.toggleCreateButtons();
    },
    createFolder() {
      this.showModal = true;
      this.modalPrompt = "New Folder Name";
      this.modalType = "folder";
    },
    createFile() {
      this.showModal = true;
      this.modalPrompt = "New File Name";
      this.modalType = "file";
    },
    handleCreate(newItem) {
      this.item.children = this.item.children || [];
      this.item.children.push(newItem);
      this.expandedFolder = this.item;
      this.showModal = false;
    },
    selectFile() {
      console.log("BEFORE state.selectedFile", this.$store.state.selectedFile);
      this.$store.dispatch("setSelectedFile", this.item);
      console.log("after state.selectedFile", this.$store.state.selectedFile);
      console.log("this.item: ", this.item);
    },
    updateNewItemName(value) {
      this.localNewItemName = value;
      this.$emit("updateNewItemName", value);
    },
    updateChildNewItemName(value) {
      this.$emit("updateNewItemName", value);
    },
    createFileInItem(item) {},
    downloadFile() {
      const content = this.item.content || "";
      const blob = new Blob([content], { type: "text/plain" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);

      link.href = url;
      link.download = this.item.name;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    },
    renameItem() {
      if (this.item) {
        this.startRename();
      }
    },
    startRename() {
      this.item.renaming = true;
      this.item.newName = this.item.name;
      this.$nextTick(() => {
        const input = this.$refs.renameInput;
        if (input) {
          input.focus();
        }
      });
    },

    finishRename() {
      if (this.item.newName.trim() !== "") {
        this.item.name = this.item.newName;
        this.item.renaming = false;
        this.$store.dispatch("renameItem", this.item);
      } else {
        this.item.renaming = false;
      }
    },
    deleteFile(item) {
      if (item.type === "file") {
        this.$store.commit("setSelectedFile", this.item);
      }
      if (item.type === "folder") {
        this.$store.commit("setSelectedFolder", item);
        this.$store.commit("deleteFile");
      }
      if (this.$store.state.selectedFile) {
        const selectedFileId = this.$store.state.selectedFile.id;
        this.$store.commit("deleteFile");
        this.$store.commit("setSelectedFile", null);
      }
    },
  },
};
</script>

<style>
.folder .rename-input {
  width: auto;
}

.file .rename-input {
  text-align: left;
  width: 125px;
}

.rename-input {
  border: none;
  padding: 0;
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  outline: none;
  background-color: transparent;
  color: inherit;
}
.control {
  position: relative;
  display: flex;
  justify-content: start;
  user-select: none;
}
.control:hover .create-btn {
  display: block;
}

.control .create-btn {
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  display: none;
}
.create-buttons {
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;

  height: fit-content;
  border-radius: 4px;
  right: -6px;
  bottom: -30px;
  z-index: 99;
  opacity: 1;
}

.new-folder_btn {
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid black;
  background-color: rgba(197, 197, 197);
  font-size: 12px;
}
.create-btn {
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
}

.download-btn {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  display: none;
}
.folder {
  color: rgb(119 121 138);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.file {
  text-align: left;
  width: 125px;

  color: rgb(158 158 158);
}

.folder:hover,
.file:hover {
  opacity: 0.7;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
.underline {
  position: absolute;
  height: 0.3px;
  left: -500px;
  width: 500vh;
  background-color: rgb(137, 137, 137, 0.1);
}
.repository-container {
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.crossing.expand ul li:nth-child(n + 5) {
  display: none;
}

.crossing ul li.control {
  display: list-item;
  margin-top: 15px;
  cursor: pointer;
}

.download-btn {
  display: none;
}

.control:hover .download-btn {
  display: block;
}
.add_btn {
  background-image: url("C:\Users\PC\Desktop\vue\vue-code-collaborator\src\images\add_btn.png");
  background-size: cover;
  width: 13px;
  height: 13px;
  background-color: transparent;
  border: none;
  margin: 5px;
}
.download_btn {
  background-image: url("C:\Users\PC\Desktop\vue\vue-code-collaborator\src\images\downloading_btn.png");
  background-size: cover;
  width: 21px;
  height: 18px;

  background-color: transparent;
  border: none;
}

.delete_btn {
  background-image: url("C:\Users\PC\Desktop\vue\vue-code-collaborator\src\images\delete_btn.png");
  background-size: cover;
  width: 12px;
  height: 13px;
  opacity: 0.3;
  background-color: transparent;
  border: none;
}
.delete_btn:hover {
  opacity: 0.6;
}

.arrow_down {
  background-image: url("C:\Users\PC\Desktop\vue\vue-code-collaborator\src\images\arrow.png");
  background-size: cover;
  width: 14px;
  height: 13px;
  opacity: 0.3;
  background-color: transparent;
  border: none;
  margin-right: 5px;
}
.arrow_right {
  background-image: url("C:\Users\PC\Desktop\vue\vue-code-collaborator\src\images\arrow.png");
  background-size: cover;
  width: 14px;
  height: 13px;
  opacity: 0.3;
  background-color: transparent;
  border: none;
  margin-right: 5px;
  transform: rotate(-90deg);
}
</style>

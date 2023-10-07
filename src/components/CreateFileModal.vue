<template>
  <div v-if="visible" class="modal">
    <div class="modal-content">
      <p>{{ prompt }}</p>
      <input
        s
        v-if="itemType !== 'file'"
        v-model="itemName"
        placeholder="Новая папка"
        @keyup.enter="confirmCreation"
      />
      <input
        v-else
        v-model="itemName"
        placeholder="Новый файл.txt"
        @keyup.enter="confirmCreation"
      />
      <button @click="confirmCreation">Создать</button>
      <button @click="cancelCreation">Отмена</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    prompt: String,
    itemType: String,
  },
  data() {
    return {
      itemName: "",
    };
  },
  methods: {
    confirmCreation() {
      if (this.itemType === "folder") {
        this.createFolder();
      } else if (this.itemType === "file") {
        this.createFile();
      }
      this.$emit("confirm", this.itemName, this.itemType);
      this.itemName = "";
    },
    createFolder() {
      // Создание новой папки
      const newFolder = {
        type: "folder",
        name: this.itemName,
        lastModified: new Date().getTime(),
        content: [],
        newItemName: "",
      };

      if (newFolder.name.trim() === "") {
        // Проверка на пустой ввод
        newFolder.name = "Новая папка";
      }

      this.$emit("create", newFolder);
    },
    createFile() {
      this.$store.dispatch("createFileInRepository", this.itemName);

      this.$emit("create", this.$store.state.newFile);
    },
    cancelCreation() {
      this.$emit("cancel");
      this.itemName = "";
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 4px;
  z-index: 999;
}
</style>

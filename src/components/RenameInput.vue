<template>
  <div>
    <input v-model="newName" @keydown.enter="confirmRename" @keydown.esc="cancelRename" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: "",
    };
  },
  methods: {
    confirmRename() {
      if (this.newName.trim() !== "") {
        this.$emit("confirm", this.newName);
      }
    },
    cancelRename() {
      this.$emit("cancel");
    },
  },
  mounted() {
    this.$refs.input.focus();
  },
};
</script>

<style scoped>
/* Add your styling here if needed */
</style>

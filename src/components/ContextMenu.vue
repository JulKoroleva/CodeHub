<template>
  <div ref="contextMenu" class="context-menu">
    <button @click="deleteItem">Удалить</button>
  </div>
</template>

<script>
export default {
  methods: {
    show(event) {
      this.$el.style.top = `${event.clientY}px`;
      this.$el.style.left = `${event.clientX}px`;
      this.$el.style.display = "block";
      window.addEventListener("click", this.hide);
    },

    hide() {
      this.$el.style.display = "none";
      window.removeEventListener("click", this.hide);
    },
  },
};
</script>

<style scoped>
.context-menu {
  position: fixed;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: none;
}

.context-menu button {
  background: none;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  width: 100%;
  text-align: left;
}
</style>

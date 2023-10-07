<template>
  <div>
    <h1>Главная страница</h1>
    <RepositoryList />
  </div>
</template>

<script>
import RepositoryList from "@/components/RepositoryList.vue";

export default {
  components: {
    RepositoryList,
  },
};
</script>

<style scoped>
/* Твои стили для этого представления */
</style>

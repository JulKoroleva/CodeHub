<template>
  <div>
    <div class="header">
      <router-link to="/" class="back_btn"></router-link>
    </div>
    <div class="flex-container">
      <div>
        <RepositoryList @selectRepository="setSelectedRepository" />
      </div>
      <div class="column">
        <CodeEditor />
        <CommentSection />
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryList from "@/components/RepositoryList.vue";
import CodeEditor from "@/components/CodeEditor.vue";
import CommentSection from "@/components/CommentSection.vue";

export default {
  components: {
    RepositoryList,
    CodeEditor,
    CommentSection,
  },
  data() {
    return {
      selectedRepository: {},
    };
  },
  methods: {
    setSelectedRepository(repository) {
      this.selectedRepository = repository;
    },
  },
};
</script>

<style  scoped>
.header {
  display: flex;
  width: 100%;
  height: 30px;
  align-content: start;
  margin: 10px auto -11px 11px;
}
.flex-container {
  display: flex;
  justify-content: space-between;
}

.repositories-container {
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #27282d;
  border-radius: 3px;
  width: 400px;
  height: 600px;
  overflow: hidden;
}

h1 {
  color: #2c3e50;
}

.column {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
}

.back_btn {
  width: 30px;
  height: 30px;
  background-image: url("C:\Users\PC\Desktop\vue\vue-code-collaborator\src\images\back.png");
  background-size: cover;
}
</style>

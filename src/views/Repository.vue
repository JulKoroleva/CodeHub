<template>
  <div>
    <h1>{{ selectedRepository.name }}</h1>
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

<style>
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
  background-color: #27282d;;
  border-radius: 3px;
  width: 26vw;
  height: 600px;
  overflow: hidden;
}

h1 {
  color: #2c3e50;
}

.column{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
}

</style>

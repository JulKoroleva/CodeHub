<template>
  <div>
    <div v-if="$store.state.selectedFile" class="code-editor__container">
      <h3 style="margin: 0">
        {{ $store.state.selectedFile ? $store.state.selectedFile.name : ""
        }}{{ isFileChanged ? "*" : "" }}
      </h3>
      <Codemirror
        v-model:value="textarea"
        :options="cmOptions"
        placeholder="test placeholder"
        :height="600"
        @input="change"
      />
      <div
        class="code-editor__save-btn"
        :style="{ opacity: isFileChanged ? 1 : 0.5 }"
      >
        <button
          v-show="this.$store.state.selectedFile"
          @click="saveFileContent"
          :disabled="!$store.state.selectedFile"
          style="width: 100%; background-color: transparent; border: none"
        >
          SAVE
        </button>
      </div>
    </div>
    <div v-else>
      <p>No file selected</p>
    </div>
  </div>
</template>

<script>
import Codemirror from "codemirror-editor-vue3";
// placeholder
import "codemirror/addon/display/placeholder.js";
// language
import "codemirror/mode/javascript/javascript.js";
// placeholder
import "codemirror/addon/display/placeholder.js";
// theme
import "codemirror/theme/dracula.css";


import { ref } from "vue";
export default {
  components: { Codemirror },
  setup() {
    const code = ref(`
var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}`);

    return {
      code,
      cmOptions: {
        mode: "text/javascript", // Language mode
        theme: "dracula", // Theme
      },
    };
  },
  props: {
    selectedRepository: Array,
  },

  data() {
    return {
      textarea: "",
      isFileChanged: false,
    };
  },
  watch: {
    "$store.state.selectedFile": function (newFile) {
      if (newFile && newFile.type === "text/plain") {
        this.textarea = newFile.content || ""; 
      }
    },
  },
  methods: {
    loadFileContent(file) {
      if (file && file.type === "text/plain") {
        const codeMirrorInstance = CodeMirror(this.$refs.codeMirror, {
          value: file.content || "",
          mode: "text/plain", 
          lineNumbers: true, 
        });

        codeMirrorInstance.on("change", (editor) => {
          this.$store.commit("updateFileContent", editor.getValue());
        });
      }
    },
    saveFileContent() {
      this.$store.commit("updateFileContent", this.textarea);
      this.isFileChanged = false;
    },

    change(newValue) {
      this.$store.commit("updateFileContent", newValue);
      this.isFileChanged = true;
    },
  },
  computed: {
    selectedFile() {
      if (this.selectedRepository && this.selectedRepository.files) {
        return this.selectedRepository.files.find(
          (file) => file === this.$store.state.selectedFile
        );
      }
      return null;
    },
  },
};
</script>

<style scoped>
.code-editor__container {
  width: 71vw;
  min-height: 70vh;
  text-align: left;
  margin-right: 10px;
}
.CodeMirror-code {
  text-align: left;
}

.codemirror-container {
  border-radius: 4px;
}

.code-editor__save-btn {
  width: 100%;
  background-color: #bfbfbf;
  border-radius: 4px;
}
</style>
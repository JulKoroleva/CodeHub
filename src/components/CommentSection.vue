<template>
  <div v-show="this.$store.state.selectedFile">
    <div :class="{ 'comments': true, 'hidden': isCommentsVisible }">
      <button @click="toggleComments" class="toggle-btn__comments"></button>
      <div class="comments__container">
        <h2>Область комментариев</h2>
        <ul class="comment-list">
          <li v-for="comment in filteredComments" :key="comment.id">
            <strong>{{ comment.author }}</strong>: {{ comment.text }}
          </li>
        </ul>
      </div>
      <div class="add-comment">
        <textarea class="add-comment__textarea" style="border-radius:2px" v-model="newComment" placeholder="Добавить комментарий"></textarea>
        <button style="border-radius:4px" @click="addComment">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newComment: '',
      isCommentsVisible: false,
    };
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    },
    filteredComments() {
      const selectedFile = this.$store.state.selectedFile;

      if (selectedFile && selectedFile.lastModified) {
        const selectedFileLastModified = selectedFile.lastModified;
        return this.comments.filter(comment => comment.file === selectedFileLastModified);
      } else {
        return [];
      }
    },
  },
  methods: {
    addComment() {
      if (this.newComment.trim() !== '') {
        const newComment = {
          id: Date.now(),
          author: 'User',
          text: this.newComment.trim(),
          file: this.$store.state.selectedFile.lastModified,
        };

        this.$store.commit('addComment', newComment);
        this.newComment = '';
      }
    },
    toggleComments() {
      this.isCommentsVisible = !this.isCommentsVisible;
    },
  },
};
</script>

<style scoped>
/* Твои стили для этого компонента */
h2 {
  color: #9fa0a1;
}

.toggle-btn__comments{  position: absolute;
  left: -32px;
  top: 45%;
  background-color: transparent;
  background-image: url('C:\Users\PC\Desktop\vue\vue-code-collaborator\src\images\btn_comments.png');
  background-size: cover; /* или использовать contain, в зависимости от вашего предпочтения */
  width: 33px; /* ширина кнопки будет равна ширине родительского контейнера */
  height: 100px; /* высота кнопки будет равна высоте родительского контейнера */
  
}
.comments {
  /* Добавлены стили для скрытия за границей */
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.hidden {
  transform: translateX(0);
}

.comments {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0%;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: rgb(59, 59, 69);
}
.comments__container {
  /* Твои текущие стили */
padding-left: 10px;
  /* Добавь следующие стили для полосы прокрутки */
  overflow-y: scroll;
  scrollbar-width: thin; /* Для Firefox */
  scrollbar-color: #6c6c6c  transparent; /* Цвет полосы прокрутки и фона */
  
}

/* Для WebKit (Chrome, Safari) */
.comments__container::-webkit-scrollbar {
  width: 5px; /* Ширина полосы прокрутки */
}

.comments__container::-webkit-scrollbar-thumb {
  background-color: #6c6c6c ; /* Цвет полосы прокрутки */
  border-radius: 30px;
}

.comments__container::-webkit-scrollbar-track {
  background-color: transparent; /* Фон полосы прокрутки */
  border-radius: 30px;
}
.comment-list {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #ecf0f1;
  margin: 5px;
  padding: 10px;
}

.add-comment {
 padding: 20px;
 border-top: 2px solid rgba(0, 0, 0, 0.181);
}

.add-comment__textarea{
  width: 100%;
  height: 80px;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 14px;
  resize: none;
  background: #e0e0e0;
  border: 4px;
}


.comment-list li{
  margin-left: auto;
  width: fit-content;
  max-width: 230px;
  word-wrap: break-word; /* для поддержки браузеров, которые используют word-wrap */
    overflow-wrap: break-word;
    border-radius: 6px 6px 0 6px;
    
}
button {
  
background: -moz-linear-gradient(0deg, rgb(179, 179, 179) 0%, rgba(181,181,181,1) 50%,  rgb(179, 179, 179) 100%);
background: -webkit-linear-gradient(0deg,  rgb(179, 179, 179) 0%, rgba(181,181,181,1) 50%,  rgb(179, 179, 179)100%);
background: linear-gradient(0deg,  rgb(179, 179, 179) 0%, rgba(181,181,181,1) 50%,  rgb(179, 179, 179)100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#525252",endColorstr="#363636",GradientType=1);
  background-color: #999999;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
}
</style>

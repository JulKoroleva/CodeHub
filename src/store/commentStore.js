// CommentStore.js
export const commentStore = {
    state: {
      comments: [],
    },
    mutations: {
      addComment(state, { file, lineNumber, author, text }) {
        const comment = {
          file,
          lineNumber,
          author,
          text,
        };
        state.comments.push(comment);
      },
    },
  };
  
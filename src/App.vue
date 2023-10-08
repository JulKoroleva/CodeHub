<template>
  
  <div id="app">
   
  <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: #41434d;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #777f86;
}

router-link {
  margin-right: 10px;
  text-decoration: none;
  color: #777f86;
}

ul {
  list-style-type: none;
  align-content: flex-start;
}

li {
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

button:hover {
  cursor: pointer;
}
</style>

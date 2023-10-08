<template>
  <div>
    <h1 ref="titles" class="home__title">{{ currentTitle }}</h1>
    <div class="btns__container">
      <button class="singup_btn">SingUp</button>
      <button class="login_btn">LogIn</button>
    </div>

    <div ref="block" class="home-block">
      <div class="header">
        <router-link to="/">Home</router-link>
        <router-link to="/repository">Repositories</router-link>
      </div>

      <div ref="logo" class="logo-name">
        <h1>Code</h1>
        <h1>Hub</h1>
      </div>

      <div class="home__description">
        <p ref="description" class="description">
          Welcome to CodeHub - your personal space for creativity with code!
          There are no complex functions or frills here, just a cozy place where
          you can translate your ideas into code. Write, test, experiment -
          whatever you want. Simple interface no extra stuff. Welcome to the
          world of endless lines of code!
        </p>
      </div>
    </div>
    <Particles />
  </div>
</template>

<script>
import gsap from "gsap";
import RepositoryList from "@/components/RepositoryList.vue";
import Particles from "@/components/Particles.vue";

export default {
  components: {
    RepositoryList,
    Particles,
  },
  data() {
    return {
      titles: ["Create", "Experiment", "Generate", "Explore", "Coding"],
      currentTitle: "",
    };
  },
  mounted() {
    this.animateTitle();
  },
  methods: {
    updateTitle(newTitle) {
      this.currentTitle = newTitle;
    },
    animateTitle() {
      const block = this.$refs.block;
      const logo = this.$refs.logo;
      const titles = this.$refs.titles;
      const description = this.$refs.description;

      const timeline = gsap.timeline();

      this.titles.forEach((title, index) => {
        timeline
          .to(titles, {
            opacity: 1,
            duration: 0.5,
            onComplete: () => this.updateTitle(title),
          })
          .to(titles, { opacity: 1, y: 0, duration: 0.5 });
      });

      timeline
        .to(titles, { x: 660, duration: 3 })
        .to(block, { opacity: 1, x: 0, duration: 3 }, "-=3")
        .to(titles, { opacity: 0, duration: 1 });

      timeline
        .to(description, { opacity: 0, scale: 0.6, duration: 0 }, "-=2")
        .to(description, { opacity: 1, scale: 1, duration: 2 }, "-=2");

      timeline
        .to(logo, { opacity: 0, x: -150, duration: 0 })
        .to(logo, { opacity: 1, x: 0, duration: 2 }, "-=1.3");
    },
  },
};
</script>

<style scoped>
h1 {
  color: rgb(227, 227, 227);
  font-size:  13vw;
  letter-spacing: 2px;
  word-spacing: 2px;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
  margin: 0;
}

.btns__container{
display: flex;
justify-content: space-between;
width: 150px;
position: absolute;
top: 20px;
right: 40px;
}

.login_btn, .singup_btn{
width: 45%;
border: 1px solid black;
border-radius: 15px;
padding: 5px;
-webkit-box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.64); 
box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.64);
}
.login_btn{
background-color: #f3f3f3;
}
.singup_btn{
  background-color: #b3b3b3;
}
.login_btn:hover{
background-color: #dddddd;
}
.singup_btn:hover{
  background-color: #898989;
}
.home-block {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width:600px;
  max-width: 600px;
  min-width: 600px;
  height: 100vh;
  background-color: #2a2a32;
  -webkit-box-shadow: 12px 2px 32px 1px rgba(0, 0, 0, 0.85);
  box-shadow: 12px 2px 32px 1px rgba(0, 0, 0, 0.595);
  transform: translateX(-600px);
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  text-decoration: none;
  color: #2a2a32;
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  text-decoration: none;
  color: #2a2a32;
  width: 100%;
  height: 100%;
  text-align: center;
  border: #2a2a32;
  background-color: #bfbfbf;
}
a:hover {
  cursor: pointer;
  background-color: #908f8f;
}
a:last-of-type {
  border-left: 1px solid #908f8f;
}
.logo-name {
  position: absolute;
  top: 10%;
  margin: 0;
  opacity: 0;
  transform: translateX(-150px);
  text-align: start;
  width: 82%;
}
.logo-name h1 {
  font-size: 160px;
}

.home__title {
  position: absolute;
  top: 40vh;
}
.home__description {
  width: 80%;
  margin-bottom: 5vh;
}
.description {
  opacity: 0;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  word-spacing: 2px;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-align: start;
}
</style>

import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { InstallCodemirro } from "codemirror-editor-vue3";
import router from './router'
import Particles from "vue3-particles";


const app = createApp(App)
app.use(store);
app.use(InstallCodemirro, { componentName: "customName" });
app.use(Particles);
app.use(router)
app.mount('#app');

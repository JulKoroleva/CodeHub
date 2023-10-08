import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { InstallCodemirro } from "codemirror-editor-vue3";
import router from './router';
import Particles from "vue3-particles";

new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        this.$nextTick(() => {
            this.$use(InstallCodemirro, { componentName: "customName" });
            this.$use(Particles);
            this.$mount('#app');
        });
    }
});
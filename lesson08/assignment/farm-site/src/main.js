import { createApp } from 'vue'
import App from './App.vue'
import Foot from './components/Foot.vue'
import Image from './components/Image.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

const app = createApp(App);

app.use(router);


app.component(Foot);

app.component(Image);

app.mount('#app');
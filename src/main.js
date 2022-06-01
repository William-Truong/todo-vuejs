import { createApp } from 'vue'
import App from './App.vue'
import createStore from './store/TodosStore';

createApp(App).use(createStore).mount('#app')

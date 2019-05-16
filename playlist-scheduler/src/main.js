import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

// I'm concerned about this line because of what I'm importing
import TaskAPIServices from './services/TaskServices'
import SongChoseAPIService from './services/SongChosenService'
import SpotifySongService from './services/SpotifySongService'

// Why are we implementing bootstrap from here?
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// What are these two lines of code doing?
Vue.prototype.$task_api = TaskAPIServices;
Vue.prototype.$song_chose_api = SongChoseAPIService;
Vue.prototype.$spotify_song_api = SpotifySongService;
Vue.config.productionTip = false;

// is this code initializing the javascript for the app?
new Vue({
  render: h => h(App),
}).$mount('#app');

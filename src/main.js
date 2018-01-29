import Vue from 'vue'
import App from './components/App.vue'
import { store } from './store/store';


if (document.getElementById("main")) {
  new Vue({
    el: '#main',
    store,
    render: h => h(App)
  })
}



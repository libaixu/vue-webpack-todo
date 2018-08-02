import Vue from 'vue';
import App from './app.vue';
import createRouter from './router/router.js';
import VueRouter from 'vue-router';

import './assets/styles/global.styl';
Vue.use(VueRouter);

const router = createRouter();

// const root = document.createElement('div')

// document.body.appendChild(root)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})

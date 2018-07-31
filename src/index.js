import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.styl'

// const root = document.createElement('div')

// document.body.appendChild(root)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App)
})

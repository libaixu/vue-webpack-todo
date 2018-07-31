<template>
  <div id="app">
    <div class="cover"></div>
    <m-header></m-header>
    <todo></todo>
    <m-footer></m-footer>
  </div>
</template>
<script>
  import MHeader from './layout/m-header.vue'
  import MFooter from './layout/m-footer.jsx'
  import Todo from './views/todo/todo.vue'

  export default {
    components: {
      MHeader,
      MFooter,
      Todo
    }
  }
</script>
<style lang="stylus" scoped>
  #app
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .cover
      position: absolute
      width: 100%
      height: 100%
      background-color: #999999
      opacity: 0.7
      z-index: -1
</style>
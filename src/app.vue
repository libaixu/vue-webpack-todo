<template>
  <div id="app">
    <div class="cover"></div>
    <m-header></m-header>
    <!-- <todo></todo> -->
    <router-link to="/login">login</router-link>
    <router-link to="/todo">todo</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <m-footer></m-footer>
  </div>
</template>
<script>
  import MHeader from './layout/m-header.vue'
  import MFooter from './layout/m-footer.jsx'
  import Todo from './views/todo/todo.vue'

  export default {
    mounted() {
      // console.log(this.$route)
    },
    components: {
      MHeader,
      MFooter,
      Todo
    }
  }
</script>
<style lang="stylus" scoped>
#app
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  .cover
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1
  .fade-enter-active, .fade-leave-active
    transition: opacity 0.5s;
  .fade-enter, .fade-leave-to
    opacity: 0;
</style>

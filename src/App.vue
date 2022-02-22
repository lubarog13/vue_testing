<template>
  <div id="app">
    <Menu class="app__menu"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Menu
  }
}
</script>

<style lang="less">
@import (css) url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
@import (less) url("./assets/_variables.less");
  #app {
    font-family: "Open Sans";
    height: 100vh;
    padding-left: 264px;
    .app__menu {
      position: fixed;
      left: 0;
      top: 0;
    }
  }

  body {
    margin: 0;
  }
</style>

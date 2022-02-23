<template>
  <div id="app">
    <Menu class="app__menu"/>
    <div class="app__close-button">
      <img src="@/assets/icons/Arrow.svg?data" class="icon">
    </div>
    <navigation></navigation>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Menu,
    Navigation
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

    .app__close-button {
      border-radius: 50%;
      width: 33px;
      height: 33px;
      position: fixed;
      left: 247px;
      top: 47px;
      background: white;
      transform: rotate(0.25turn);
      border: 1px solid @black5-color;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  body {
    margin: 0;
  }

  .icon {
        width: 24px;
        height: 24px;
    }
</style>

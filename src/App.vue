<template>
  <div id="app">
    <Menu class="app__menu"/>
    <div class="app__close-button">
      <img src="@/assets/icons/Arrow.svg?data" class="icon">
    </div>
    <navigation class="app__navigation"></navigation>
    <personality-page class="app__content"></personality-page>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Navigation from './components/Navigation.vue'
import PersonalityPage from './components/PersonalityPage.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Navigation,
    PersonalityPage
  }
}
</script>

<style lang="less">
@import (css) url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
@import (less) url("./assets/_variables.less");
  #app {
    font-family: "Open Sans";
    height: 100vh;
    .app__menu {
      position: fixed;
      left: 0;
      top: 0;
    }

    .app__navigation {
      position: fixed;
      top: 0;
      width: calc(~"100% - 264px");
      left: 264px;
    }

    .app__content {
      margin-left: 264px;
      margin-top: 64px;
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
      z-index: 99;
    }
  }

  body {
    margin: 0;
  }

  .icon {
        width: 24px;
        height: 24px;
        &-close {
          transform: rotate(0.5turn);
        }
    }

    .custom-badge {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 4px 12px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 12px;
    }
    
</style>

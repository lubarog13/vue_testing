<template>
  <v-app>

    <v-main>
      <side-panel app></side-panel>
      <app-nav-bar></app-nav-bar>
      <v-btn fab id="close" elevation="0"><v-icon style="font-size: 14px" color="#333333"> fa fa-chevron-left </v-icon></v-btn>
      <router-view style="margin-left: 264px"/>
    </v-main>
  </v-app>
</template>

<script>
import AppNavBar from './components/AppNavBar.vue';
import SidePanel from './components/SidePanel.vue'

export default {
  components: { SidePanel, AppNavBar,  },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
  @import 'app.css';
  #close {
    width: 33px;
    height: 33px;
    border: 1px solid #F2F2F2;
    position: absolute;
    top: 64px;
    left: 248px;
    background: white;
  }
</style>

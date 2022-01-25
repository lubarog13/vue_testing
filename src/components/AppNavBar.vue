<template>
<div id="bar">
    <b-navbar>
        <b-navbar-brand class="bold-text">
            Персоналии
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-nav-item>
                <b-icon icon="search" font-scale="1.5" style="color: #333333"></b-icon>
            </b-nav-item>
            <b-nav-item>
            <v-divider vertical></v-divider>
            </b-nav-item>
            <b-col class="nav-block">
                <p class="main-text" style="margin-bottom: 0">
                    Чт, 10 сентября
                </p>
                <p class="sub-text">
                    чётная неделя
                </p>
            </b-col>
            <b-nav-item>
            <v-divider vertical></v-divider>
            </b-nav-item>
            <b-nav-item >
                <v-badge dot overlap color="red">
                <b-icon icon="bell" font-scale="1.5" ></b-icon>
                </v-badge>
            </b-nav-item>
            <b-nav-item>
            <v-divider vertical></v-divider>
            </b-nav-item>
            <b-nav-item>
                <div id="avatar-border">
                <img src="../assets/images/Аватар.png" id="avatar">
                </div>
                <div class="nav-block" style="text-align: start; width: 135px">
                    <p class="big-text" style="margin-bottom: 0">
                        Киселева П.С.
                    </p>
                    <p class="sub-text">
                        284258
                </p>
                </div>
                <v-icon style="font-size: 14px" color="#333333"> fa fa-chevron-down </v-icon>
            </b-nav-item>
            <b-nav-item>
            <v-divider vertical></v-divider>
            </b-nav-item>
            <b-nav-item>
                <img src="../assets/images/russia.png">
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
    <v-divider></v-divider>
</div>

    
</template>
<script>
export default {
    name: "AppNavBar",

}
</script>

<style scoped>
    #bar {
    margin-left: 264px;
  }

  .navbar {
      height: 64px;
      padding: 28px 10px;
  }
  .v-divider {
      background: #E6E6E6;
  }
  .navbar-brand {
      font-size: 30px;
  }

  .v-divider--vertical {
      height: 35px;
  }
  .nav-item, .nav-link {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .nav-block {
      vertical-align: middle;
      padding: 10px;
      text-align: end;
      padding-top: 20px;
      width: 126px;
  }
  .navbar-expand .navbar-nav {
    flex-direction: row;
    align-items: center;
    justify-content: end;
    display: flex;
    margin-top: 10px;
}
.nav-link {
    color: #333333;
}
    #avatar-border {
        border: 2px solid #035DD8;
        border-radius: 22px;
        width: 24px;
        height: 24px;
        display: flex;
    }
    #avatar {
        border: 2px solid white;
        border-radius: 22px;
        width: 20px;
        height: 20px;
    }

</style>
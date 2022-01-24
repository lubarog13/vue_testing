<template>
    <div id="main-panel">
            <b-row id="head-logo">
                <b-col style="align-self: center"><img src="../assets/images/logo_myisu.png"></b-col>
                <b-col cols="8" style="align-self: center"><h3 class="logo-text">my.itmo</h3></b-col>
            </b-row>
            <b-list-group>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <b-icon icon="house-door" height="24px"></b-icon>
    <span class="menu-text">Главная</span>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
      <img src="../assets/icons/documents-file-checkmark.1document_checked.png" height="24px">
    <span class="menu-text">Запись по выбору</span>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Morbi leo risus
    <b-badge variant="secondary" pill>1</b-badge>
  </b-list-group-item>
</b-list-group>
    </div>
</template>
<script>
export default {
    name: 'SidePanel'
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
#main-panel {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 264px;
    border-right: 1px solid #F2F2F2;
}

#head-logo {
    height: 100px;
}
.logo-text {
    color: #035DD8;
    font-size: 30px;
    font-family: "Open Sans", 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 700;
    text-align: start;
}

.list-group-item {
    border: 0;
    color: #666666;
    font-size: 20px;
    justify-content: start !important;
}

.badge-secondary {
    background: #EB5757;
}
.menu-text {
    margin-left: 30px;
    font-family: "Open Sans", 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400;
}
</style>


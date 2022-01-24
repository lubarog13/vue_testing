<template>
    <div id="main-panel">
            <b-row id="head-logo">
                <b-col style="align-self: center"><img src="../assets/images/logo_myisu.png"></b-col>
                <b-col cols="8" style="align-self: center"><h3 class="logo-text">my.itmo</h3></b-col>
            </b-row>
            <b-list-group>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <img src="../assets/icons/Home, House.png" height="24px">
    <span class="menu-text">Главная</span>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
      <img src="../assets/icons/documents-file-checkmark.1document_checked.png" height="24px">
    <span class="menu-text">Запись по выбору</span>
  </b-list-group-item>
  
  <b-list-group-item class="d-flex justify-content-between align-items-center">
      <img src="../assets/icons/Calendar,Schedule.png" height="24px">
    <span class="menu-text">Расписание</span>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
      <img src="../assets/icons/Book.png" height="24px">
    <span class="menu-text">Учебный план</span>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
      <img src="../assets/icons/Notebook, Notepad.png" height="24px">
    <span class="menu-text">ЭЗК</span>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <img src="../assets/icons/Messages, Chat.png" height="24px">
    <span class="menu-text">Сообщения</span>
    <b-badge variant="secondary" pill>152+</b-badge>
  </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <img src="../assets/icons/Grid, Layout.png" height="24px">
    <span class="menu-text">Сервисы</span>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
      <img src="../assets/icons/Basketball.png" height="24px">
    <span class="menu-text">Физическая культура</span>
  </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <img src="../assets/icons/users-profile-group.png" height="24px">
    <span class="menu-text">Группы</span>
  </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <img src="../assets/icons/hierarchy-3.png" height="24px">
    <span class="menu-text">Подразделения</span>
    <v-icon @click="open=!open" style="font-size: 10px"> fa fa-chevron-down </v-icon>
  </b-list-group-item>
    <b-list-group-item v-if="open" style="height: 60px">
        <b-row>
            <b-col id="col-end">
        <div class="divider1">
        </div>
            </b-col>
            <b-col cols="10">
        <div id="personal">
            Персоналии
        </div>
            </b-col>
        </b-row>
    </b-list-group-item>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <img src="../assets/icons/Notepad.png" height="24px">
    <span class="menu-text">Заявки</span>
  </b-list-group-item>
</b-list-group>
    </div>
</template>
<script>
export default {
    name: 'SidePanel',
    data: () => ({
        open: true
    })
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
    height: 130px;
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
    font-size: 16px;
    justify-content: start !important;
    height: 40px;
}

.badge-secondary {
    background: #EB5757;
}
.menu-text {
    margin-left: 20px;
    font-family: "Open Sans", 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
}

.badge-pill {
        margin-left: 40px;
    border-radius: 24px;
    width: 40px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: "Open Sans", 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
}

.b-icon {
    color: #666666;
}

.fa {
    height: 4px;
    width: 8px;
    margin-left: 40px;
    font-size: 10px;
}

#personal {
    background: #F2F2F2;
    font-family: "Open Sans", 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400;
    color: #333333;
    font-size: 16px;
    height: 40px;
    align-items: center;
    justify-content: start;
    display: flex;
    padding: 10px;
}
.divider1 {
    background: #F2F2F2;
    width: 2px;
    height: 40px;
}
#col-end {
    align-items: end;
    justify-content: end;
    display: flex;
}
</style>


<template>
  <div class="menu">
    <div class="menu__container">
      <div class="menu__logo logo">
        <img src="../assets/images/logo.png" class="logo__image" />
        <h3 class="logo__text">my.itmo</h3>
      </div>
      <div class="menu__content">
        <menu-item
          class="menu__content__item item"
          v-for="(item, index) in menuItems"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "./UI/MenuItem.vue";
export default {
  name: "Menu",
  components: {
    MenuItem,
  },
  data() {
    return {
      menuItems: [
        {
          name: "Главная",
          icon: "Home, House",
        },
        {
          name: "Запись по выбору",
          icon: "documents-file-checkmark.1",
        },
        {
          name: "Расписание",
          icon: "Calendar,Schedule",
        },
        {
          name: "Учебный план",
          icon: "Book",
        },
        {
          name: "ЭЗК",
          icon: "Notebook, Notepad",
        },
        {
          name: "Сообщения",
          icon: "Messages, Chat",
          messages: "152+",
        },
        {
          name: "Сервисы",
          icon: "Grid, Layout",
        },
        {
          name: "Финансы",
          icon: "Wallet",
        },
        {
          name: "Физическая культура",
          icon: "Basketball",
        },
        {
          name: "Группы",
          icon: "users-profile-group",
        },
        {
          name: "Подразделения",
          icon: "hierarchy-3",
          children: [
            {
              name: "Персоналии",
            },
          ],
        },
        {
          name: "Заявки",
          icon: "Notepad",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import (less) url("../assets/_variables.less");
.menu {
  height: 100%;
  width: 264px;
  border-right: @st_border;
  background: @white100-color;
  &__container {
    padding: 24px 16px;
  }
  .logo {
    display: flex;
    align-items: center;

    &__image {
      width: 48px;
      height: 48px;
    }

    &__text {
      padding-left: 12px;
      color: @primary-blue-color;
      font-size: 30px;
      margin: 0;
      font-weight: 700;
    }
  }

  &__content {
    padding-top: 13px;

    &__item {
      margin-top: 8px;
    }
  }
}
</style>
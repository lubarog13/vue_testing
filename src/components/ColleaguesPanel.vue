<template>
  <div class="colleagues">
    <my-panel :title="'Коллеги'">
      <div
        class="colleagues__content__colleague colleague"
        v-for="colleague in colleagues"
        :key="colleague.id"
      >
        <b-avatar
          badge
          badge-variant="success"
          badge-left
          class="colleague__avatar"
          :src="require(`/src/assets/images/${colleague.image}`)"
        ></b-avatar>
        <div class="colleague__content">
          <div class="colleague__content__name">
            {{ colleague.last_name }} {{ colleague.first_name }}
            {{ colleague.second_name }}
          </div>
          <div class="colleague__content__role">{{ colleague.role }}</div>
          <a href="#" class="colleague__content__action">Написать сообщение</a>
        </div>
      </div>
    </my-panel>
  </div>
</template>

<script>
import MyPanel from "./UI/MyPanel.vue";
export default {
  components: { MyPanel },
  name: "ColleaguesPanel",
  computed: {
    colleagues() {
      return this.$store.state.user.colleagues;
    },
  },
};
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");
.colleague {
  &__content {
    &__action {
      color: @primary-blue-color;
      margin-top: 8px;
      text-decoration: none;
    }
  }

  &__avatar {
    width: 34px;
    height: 34px;
  }
}
</style>

<style lang="less">
@import (less) url("/src/assets/_variables.less");
.badge-success {
  background: @secondary6-color;
  width: 10px;
  height: 10px;
  border: 2px solid @white100-color;
  min-width: 0 !important;
  min-height: 0 !important;
}
</style>
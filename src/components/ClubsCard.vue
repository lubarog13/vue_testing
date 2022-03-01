<template>
  <div class="clubs">
    <my-panel :title="'Клубы'">
      <div
        class="clubs__content__club club"
        v-for="club in clubs"
        :key="club.name"
      >
        <b-avatar
          class="club__avatar"
          variant="info"
          :src="require(`/src/assets/images/${club.image}`)"
        ></b-avatar>
        <div class="club__content">
          <div class="club__content__title">{{ club.name }}</div>
          <div class="club__content__role">{{ club.role }}</div>
        </div>
      </div>
    </my-panel>
  </div>
</template>

<script>
import MyPanel from "./UI/MyPanel.vue";
export default {
  components: { MyPanel },
  name: "ClubsCard",

  computed: {
    clubs() {
      return this.$store.state.user.clubs;
    },
  },
};
</script>

<style lang="less">
@import (less) url("/src/assets/_variables.less");

.club,
.colleague {
  display: flex;
  padding: 8px 12px;

  &__avatar {
    width: 34px;
    height: 34px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-left: 8px;
    flex: 1;

    &__title,
    &__name {
      font-weight: 700;
    }

    &__role {
      font-weight: 400;
      color: @black40-color;
    }
  }
}
</style>
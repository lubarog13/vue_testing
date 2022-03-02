<template>
  <div class="panel">
    <div class="panel__header" @click="setActive">
      <div class="panel__header__title">
        {{ title }}
      </div>
      <img
        class="icon"
        :class="{ 'icon-close': active }"
        :src="require('/src/assets/icons/Arrow.svg?data')"
      />
    </div>
    <div class="panel__body" v-if="active">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import activeStateMixin from '/src/mixins/activeStateMixin'
export default {
  name: "MyPanel",
  mixins: [activeStateMixin],
  props: {
    title: null,
  },
};
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");
.panel {
  .bordered_box();
  padding: 8px 0;
  .icon {
    width: 16px;
    height: 16px;
    align-self: center;
  }

  &__header {
    display: flex;
    cursor: pointer;
    padding: 0 12px;
    &__title {
      flex: 1;
      font-weight: 700;
      font-size: 16px;
    }
  }

  &__body {
    margin-top: 8px;
  }
}
</style>
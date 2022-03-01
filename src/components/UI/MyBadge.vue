<template>
  <div class="badge">
    <div class="badge__content" :class="{ 'badge-active': active }">
      <div
        class="badge__title custom-badge"
        :id="id"
        @mouseover="active = true"
        @mouseleave="active = false"
        :class="{
          'orange-badge': variant === 'orange',
          'blue-badge': variant === 'blue',
        }"
      >
        {{ title }}
      </div>
      <div class="arrow_up" v-show="active"></div>
      <b-tooltip
        :target="id"
        triggers="hover"
        placement="bottom"
        variant="success"
      >
        {{ text }}
      </b-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyBadge",
  props: {
    title: null,
    text: null,
    variant: null,
    id: null,
  },
  data() {
    return {
      active: false,
    };
  },
  created() {
    console.log(this.variant);
  },
};
</script>

<style lang="less" scoped>
@import (less) url("/src//assets/_variables.less");
@padding-exchange: 4px;

.badge {
  height: 28px;
  padding-top: @padding-exchange;
  &__content {
    padding: 5px 0 9.5px 0;
    display: flex;
    flex-direction: column;
    @padding-exchange: 4px;
    &-active {
      padding: 5px 0 0 0;
      @padding-exchange: 0;
    }
    .orange-badge {
      color: @secondary7-color;
      background: @secondary710-color;

      &:hover {
        background: @secondary7-color;
        color: @secondary710-color;
      }
    }

    .blue-badge {
      background: @primary5-blue-color;
      color: @primary-blue-color;

      &:hover {
        background: @primary-blue-color;
        color: @primary5-blue-color;
      }
    }
  }
}
</style>

<style lang="less">
@import (less) url("/src/assets/_variables.less");
.tooltip.b-tooltip-success .tooltip-inner {
  background: @black100-color !important;
  opacity: 1 !important;
  font-size: 12px;
  margin-top: 2px !important;
  top: -2px;
}

.arrow_up {
  width: 0;
  height: 0;
  padding-top: 4px;
  align-self: center;
  border-style: solid;
  border-width: 0 5.25px 5.5px 5.25px;
  border-color: transparent transparent @black100-color transparent;
}
</style>
<template>
  <div class="contacts">
    <h2>Контакты</h2>
    <div
      v-for="contact in contacts"
      :key="contact.contact"
      class="contacts__contact contact"
    >
      <img
        class="contact__icon"
        :src="require(`/src/assets/icons/${contact.icon}`)"
      />
      <div class="contact__value">
        {{ contact.contact }}
        <div class="contact__value-comment" v-if="contact.comment">
          {{ contact.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsCard",
  computed: {
    contacts() {
      return this.$store.state.user.contacts;
    },
  },
};
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");

.contacts {
  .bordered_box();
  .pad1();

  h2 {
    font-weight: 700;
    font-size: 16px;
  }

  .contact {
    margin-top: 12px;
    display: flex;
    flex-direction: row;

    &:first-child {
      margin-top: 16px;
    }

    &__icon {
      width: 20px;
      height: 20px;
    }

    &__value {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      font-weight: 400;
      font-size: 14px;
      &-comment {
        margin-top: 4px;
        color: @black40-color;
      }
    }
  }
}
</style>
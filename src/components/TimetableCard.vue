<template>
  <div class="timetable">
    <my-panel :title="'Расписание'">
      <div
        class="timetable__content__lesson lesson"
        v-for="lesson in timetable"
        :key="lesson.id"
      >
        <div class="lesson__time">
          <div class="lesson__time-start">
            {{ lesson.start_time }}
          </div>
          <div class="lesson__time-end">
            {{ lesson.end_time }}
          </div>
        </div>
        <div class="lesson__info">
          <b-badge
            class="lesson__info__type"
            :class="{
              type1: lesson.type === 'Лекция',
              type2: lesson.type === 'Практика',
            }"
          >
            {{ lesson.type }}
          </b-badge>
          <div class="lesson__info__name">
            {{ lesson.name }}
          </div>
          <div class="lesson__info__place">
            <img
              class="icon"
              :src="require('/src/assets/icons/Place.svg?data')"
            />
            <div class="lesson__info__place-address">
              Ауд. {{ lesson.aud }}, {{ lesson.addr }}
            </div>
          </div>
        </div>
      </div>
      <div class="timetable__content__action" @click="show = true">
        Подробнее
      </div>
    </my-panel>
    <my-modal v-model="show">
      <template v-slot:title>
        <div>Расписание</div>
      </template>
      <schedule-card />
    </my-modal>
  </div>
</template>

<script>
import ScheduleCard from "./ScheduleCard.vue";
import MyModal from "./UI/MyModal.vue";
import MyPanel from "./UI/MyPanel.vue";

export default {
  components: { MyModal, ScheduleCard, MyPanel },
  name: "TimetableCard",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    timetable() {
      return this.$store.state.user.timetable.filter(
        (lesson) => lesson.date.toDateString() === new Date().toDateString()
      );
    },
  },
};
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");
.lesson {
  display: flex;
  padding: 0 12px;
  margin-top: 16px;

  & > * {
    display: flex;
    flex-direction: column;
  }

  &__time {
    align-items: flex-end;
    min-width: 42px;
    line-height: 20px;

    &-start {
      font-weight: 700;
      font-size: 16px;
      color: @maintext-color;
    }

    &-end {
      font-size: 14px;
      color: @black20-color;
    }
  }

  &__info {
    margin-left: 9px;
    &__type {
      font-size: 10px;
      color: @white100-color;
      padding: 2px 6px 3px;
      font-weight: 400;
      height: 16px;
    }

    .type1 {
      background: @secondary4-color;
      width: 49px;
    }

    .type2 {
      background: @secondary1-color;
      width: 58px;
    }

    &__name {
      font-size: 14px;
      margin-top: 4px;
    }

    &__place {
      margin-top: 4px;
      display: flex;
      align-items: center;

      &-address {
        font-size: 14px;
        color: @black20-color;
        margin-left: 8px;
      }
    }
  }
}

.timetable__content__action {
  color: @primary-blue-color;
  cursor: pointer;
  padding: 4px 8px;
  margin-top: 16px;
  font-size: 12px;
  text-align: center;
}
</style>
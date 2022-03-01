<template>
  <div class="info">
    <div class="info__main">
      <div class="info__main-name">
        {{ last_name }} {{ first_name }} {{ second_name }}
      </div>
      <div class="info__main-isu">
        {{ isu }}
      </div>
      <div class="info__main-exchange" v-if="exchange">
        <my-badge
          :text="`направлен на обучение в вуз-партнер с ${exchange.start_date.toLocaleDateString()} по ${exchange.end_date.toLocaleDateString()}`"
          :title="'семестровый обмен'"
          :variant="'orange'"
          :id="'exchange'"
        />
      </div>
    </div>
    <div
      class="info__about about"
      v-if="role === 'student' || role === 'student_employee'"
    >
      <div class="about__row">
        <div class="about__label">Курс:</div>
        <div class="about__value">{{ course }} курс</div>
      </div>
      <div class="about__row">
        <div class="about__label">Факультет:</div>
        <a class="about__value">
          {{ faculty }}
        </a>
      </div>
      <div class="about__row">
        <div class="about__label">Обр. программа:</div>
        <a class="about__value">
          {{ op }}
        </a>
      </div>
      <div class="about__row">
        <div class="about__label">Специализация:</div>
        <div class="about__value">
          {{ specialization }}
        </div>
      </div>
      <div class="about__row">
        <div class="about__label">Группа:</div>
        <a class="about__value">
          {{ group }}
        </a>
      </div>
    </div>
    <div
      class="info__about about"
      v-if="
        role === 'employee' || role === 'student_employee' || role === 'teacher'
      "
    >
      <div class="about__row">
        <div class="about__label">Должности:</div>
        <div class="about__value-column">
          <a class="about__value">
            {{ positions[0].position }}
            <my-badge
              v-if="positions[0].vacation"
              :text="`в отпуске с ${positions[0].vacation.start_date.toLocaleDateString()} по ${positions[0].vacation.end_date.toLocaleDateString()}`"
              :title="'отпуск'"
              :variant="'blue'"
              :id="positions[0].position + positions[0].id"
              class="about__value-vacation"
            />
          </a>
          <div class="about__value">
            {{ positions[0].role }}
          </div>
        </div>
        <b-button
          class="about__actions"
          v-if="user_positions && user_powers"
          @click="openInfo"
        >
          {{ opened ? "Скрыть" : "Подробнее" }}
          <img
            :src="require('/src/assets/icons/Arrow.svg?data')"
            class="icon"
            :class="{ 'icon-close': opened }"
          />
        </b-button>
      </div>
      <div class="about__value-hidden" v-if="opened">
        <div
          class="about__value-column"
          v-for="position in user_positions"
          :key="position.id"
        >
          <a class="about__value">
            {{ position.position }}
            <my-badge
              v-if="position.vacation"
              :text="`в отпуске с ${position.vacation.start_date.toLocaleDateString()} по ${position.vacation.end_date.toLocaleDateString()}`"
              :title="'отпуск'"
              :variant="'blue'"
              :id="position.position + position.id"
              class="about__value-vacation"
            />
          </a>
          <div class="about__value">
            {{ position.role }}
          </div>
        </div>
      </div>
      <div
        class="about__row"
        :class="{ 'about__row-employee': employeeClosedRow }"
      >
        <div class="about__label">Полномочия:</div>
        <div class="about__value-column">
          <a class="about__value">
            {{ powers[0].power }}
          </a>
          <div class="about__value">
            {{ powers[0].role }}
          </div>
        </div>
      </div>
      <div class="about__value-hidden" v-if="opened">
        <div
          class="about__value-column"
          v-for="power in user_powers"
          :key="power.id"
        >
          <a class="about__value">
            {{ power.power }}
          </a>
          <div class="about__value">
            {{ power.role }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MyBadge from "./UI/MyBadge.vue";
export default {
  components: { MyBadge },
  name: "InfoCard",
  data() {
    return {
      opened: false,
      active: false,
    };
  },
  methods: {
    openInfo() {
      this.opened = !this.opened;
    },
  },
  computed: {
    ...mapState({
      first_name: (state) => state.user.first_name,
      last_name: (state) => state.user.last_name,
      second_name: (state) => state.user.second_name,
      isu: (state) => state.user.isu,
      role: (state) => state.user.role,
      course: (state) => state.user.course,
      faculty: (state) => state.user.faculty,
      op: (state) => state.user.op,
      specialization: (state) => state.user.specialization,
      group: (state) => state.user.group,
      positions: (state) => state.user.positions,
      powers: (state) => state.user.powers,
      exchange: (state) => state.user.exchange,
    }),
    user_positions() {
      if (this.positions.length > 1) {
        return this.positions.slice(1);
      }
      return null;
    },
    user_powers() {
      if (this.powers.length > 1) {
        return this.powers.slice(1);
      }
      return null;
    },
    employeeClosedRow() {
      return this.role === "employee" || this.role === "teacher";
    },
  },
};
</script>

<style lang="less" scoped>
@import (less) url("../assets/_variables.less");
@padding-exchange: 4px;
.info {
  .bordered_box();
  .pad2();
  &__main {
    display: flex;
    &-name {
      font-size: 24px;
      font-weight: 700;
      padding-right: 16px;
      border-right: @st_border;
      width: fit-content;
    }

    &-isu {
      text-align: left;
      margin-left: 16px;
      font-size: 16px;
      color: @black40-color;
      align-self: center;
    }
    &-exchange {
      margin-left: 16px;
      padding: 0 16px;
      border-left: @st_border;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-bottom: 4px;
    }
  }

  .about {
    margin-top: 24px;
    font-size: 14px;

    &:nth-child(3) {
      margin-top: 12px;
    }

    &__row {
      display: flex;
      flex-direction: row;
      &:last-child {
        margin-bottom: 0;
      }

      &-employee {
        margin-top: 24px;
      }
    }

    & > * {
      margin-bottom: 12px;
    }

    &__label {
      min-width: 120px;
      color: @black40-color;
    }

    &__value {
      flex: 1;
      margin-left: 24px;

      &-vacation {
        margin-left: 24px;
        padding: 0;
      }
    }

    &__value-column {
      display: flex;
      flex-direction: column;
    }

    &__value-hidden {
      display: flex;
      flex-direction: column;
      margin-left: 120px;

      & > * {
        margin-bottom: 12px;
      }
    }

    a.about__value {
      text-decoration: none;
      color: @primary-blue-color;
      cursor: pointer;
    }

    &__actions {
      margin-left: auto;
      width: 106px;
      height: 28px;
      background: @black5-color;
      color: @black100-color;
      font-weight: 600;
      display: flex;
      font-size: 12px;
      .rad();
      border: none;

      .icon {
        width: 16px;
        height: 16px;
        margin-left: auto;
        align-self: center;
      }
    }
  }
}
</style>
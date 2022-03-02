<template>
  <div class="page__container person">
    <div class="left__content">
      <div class="person__photo">
        <photo-card />
      </div>
      <div class="person__contacts">
        <contacts-card />
      </div>
      <div class="person__variable-block">
        <timetable-card v-if="role === 'teacher'" />
        <ColleaguesCard v-else-if="role === 'employee'" />
        <clubs-card v-else />
      </div>
    </div>
    <div class="right__content">
      <div class="person__info">
        <info-card />
      </div>
      <div class="right__content-search search">
        <my-select :options="activity_options" @selected="setOption" />
        <b-form-input
          placeholder="Поиск"
          class="search__input"
          @input="setSearchString"
        ></b-form-input>
        <b-button class="search__button" @click="searchQuery = search">Найти</b-button
        >
      </div>
      <activity-card
        class="person__activity"
        v-for="activity in searchedAndFilteredActivities"
        :key="activity.id"
        :activity="activity"
      />
    </div>
  </div>
</template>

<script>
import InfoCard from "../components/InfoCard.vue";
import ActivityCard from "../components/ActivityCard.vue";
import ClubsCard from "../components/ClubsCard.vue";
import ContactsCard from "../components/ContactsCard.vue";
import ColleaguesCard from "../components/ColleaguesCard.vue";
import TimetableCard from "../components/TimetableCard.vue";
import PhotoCard from "../components/PhotoCard.vue";
import MySelect from "../components/UI/MySelect.vue";
import { mapGetters } from 'vuex';
import roleMixin from '../mixins/roleMixin'
export default {
  components: {
    PhotoCard,
    InfoCard,
    ActivityCard,
    ContactsCard,
    ClubsCard,
    ColleaguesCard,
    TimetableCard,
    MySelect,
  },
  name: "PersonalityPage",
  mixins: [roleMixin],
  data() {
    return {
      selectedOption: { name: "Вся деятельность" },
      searchQuery: "",
      search: "",
    };
  },
  computed: {
    ...mapGetters ({
        searchedActivities: 'user/getSearchedAndFilteredActivities',
        activity_options: 'user/getActivityOptions'
    }),
    activities() {
      return this.$store.state.user.activities;
    },
    searchedAndFilteredActivities() {
      return this.searchedActivities({searchQuery: this.searchQuery, filter: this.selectedOption})
    },
  },
  methods: {
    setSearchString(val) {
      this.search = val;
    },
    setOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style lang="less" scoped>
@import (less) url("../assets/_variables.less");
.page__container {
  padding: 24px;
  display: flex;
  flex-direction: row;

  .left__content {
    flex: 0 0 264px;
    display: flex;
    flex-direction: column;

    .person__contacts {
      margin-top: 24px;
    }

    .person__variable-block {
      margin-top: 24px;
    }
  }

  .right__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 23px;

    .search {
      margin-top: 24px;
      display: flex;

      &__input {
        flex: 1;
        margin: 0 16px;
      }

      &__button {
        background: @primary-blue-color;
        color: @white100-color;
        border: none;
        font-weight: 600;
        font-size: 14px;
        padding: 8px 27px;
        .rad();
      }
    }

    .person__activity {
      margin-top: 16px;
    }
  }
}
</style>
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
                <clubs-card />
                <ColleaguesCard />
                <timetable-card />
            </div>
        </div>
        <div class="right__content">
            <div class="person__info">
                <info-card/>
            </div>
            <div class="right__content-search search">
                <my-select :options="activity_options" @selected="filterActivities" />
                <b-form-input placeholder="Поиск" class="search__input"></b-form-input>
                <b-button class="search__button">Найти</b-button>
            </div>
            <activity-card class="person__activity" v-for="activity in filteredActivities" :key="activity.name" :activity="activity"/>
        </div> 
    </div>
</template>

<script>
import InfoCard from './InfoCard.vue'
import ActivityCard from './UI/ActivityCard.vue'
import ClubsCard from './UI/ClubsCard.vue'
import ContactsCard from './UI/ContactsCard.vue'
import ColleaguesCard from './UI/ColleaguesCard.vue'
import TimetableCard from './UI/TimetableCard.vue'
import PhotoCard from './UI/PhotoCard.vue'
import MySelect from './UI/MySelect.vue'
    export default {
        components: { PhotoCard, InfoCard, ActivityCard, ContactsCard, ClubsCard, ColleaguesCard, TimetableCard, MySelect },
        name: "PersonalityPage",
        data() {
            return {
                filteredActivities: null
            }
        },
        computed: {
            activities() {
                return this.$store.state.user.activities
            },
            activity_options () {
                const options = [
                    {name: "Вся деятельность", value: this.activities.length},
                    {name: "Проекты", value: this.activities.filter(a => a.option === "Проекты").length},
                    {name: "РИД", value: this.activities.filter(a => a.option === "РИД").length},
                    {name: "Публикации", value: this.activities.filter(a => a.option === "Публикации").length},
                    {name: "Мероприятия", value: this.activities.filter(a => a.option === "Мероприятия").length},
                ]
                return options
            }
        },
        methods: {
            filterActivities(option) {
                if(option.name!=="Вся деятельность"){
                    this.filteredActivities = this.activities.filter(a => a.option===option.name)
                }
                else {
                    this.filteredActivities = this.activities
                }
            }
        },
        created() {
            this.filteredActivities = this.activities
        }
    }
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


            .person__photo {
                .bordered_box();
                .pad1()
            }

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

            .person__info {
                .bordered_box();
                .pad2()
            }

            .search {
                margin-top: 24px;
                display: flex;

                &__input {
                    flex: 1;
                    margin: 0 16px;
                }

                &__button {
                    background: @primary-blue-color;
                    color: white;
                    border: none;
                    font-weight: 600;
                    font-size: 14px;
                    padding: 8px 27px;
                    .rad()
                }
            }

            .person__activity {
                margin-top: 16px;
            }
        }

    }

</style>
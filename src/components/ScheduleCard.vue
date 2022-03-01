<template>
    <div class="schedule">
        <div class="schedule__date">
            <b-button class="schedule__date__back" @click="addDay(-1)"><img src="../assets/icons/Arrow.svg"></b-button>
            <b-button class="schedule__date__info" variant="light"  @click="showCalendar">{{formattedDate}}</b-button>
            <my-calendar v-model="selectedDate" v-if="calendar" class="schedule__date__picker"/>
            <b-button class="schedule__date__forward" @click="addDay(1)"><img src="../assets/icons/Arrow.svg"></b-button>
        </div>
        <div class="schedule__timetable" v-if="timetable.length>0">
            <div class="schedule__timetable__lesson lesson" v-for="lesson in timetable" :key="lesson.id">
                <div class="lesson__time">
                    <div class="lesson__time-start">{{lesson.start_time}}</div>
                    <div class="lesson__time-end">{{lesson.end_time}}</div>
                </div>
                <div class="lesson__type" :class="{'type1': lesson.type==='Лекция', 'type2': lesson.type==='Практика'}"></div>
                <div class="lesson__name">{{lesson.name}}</div>
                <div class="lesson__place">
                    <div class="lesson__place__aud">{{lesson.aud}}</div>
                    <div class="lesson__place__addr">{{lesson.addr}}</div>
                </div>
                <a class="lesson__page">СТР 1</a>
            </div>
        </div>
        <div class="schedule__not_found" v-else>
            <img src="../assets/icons/undraw_not_found_60pq 1.svg">
            <div class="schedule__not_found__title">Пары не найдены</div>
            <div class="schedule__not_found__text">В этот день у преподавателя нет занятий</div>
        </div>
    </div>
</template>

<script>
import MyCalendar from './UI/MyCalendar.vue'
import dayjs from 'dayjs'
    export default {
  components: { MyCalendar },
        name: "ScheduleCard",
        data() {
            return {
                selectedDate: dayjs(),
                calendar: false
            }
        },
        computed: {
            timetable() {
                return this.$store.state.user.timetable.filter(lesson => lesson.date.toDateString()===this.selectedDate.toDate().toDateString())
            },
            formattedDate() {
                return this.selectedDate.locale("ru").format("DD MMMM YYYY")
            }
        },
        methods: {
            addDay(c) {
              this.selectedDate = this.selectedDate.set("date", this.selectedDate.get("date") + c)
            },
            showCalendar() {
                this.calendar = !this.calendar
            }
        },
        created() {
            require('dayjs/locale/ru')
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");

.schedule {
    display: flex;
    flex-direction: column;

    &__date {
        display: flex;
        align-items: center;
        position: relative;

        .btn {
            background: white;
            &:hover {
                background: @black5-color;
                border: none;
                color: @black100-color;
            }

        }

        &__back,
        &__forward {
            border: @st_border;
            border-radius: 4px;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 16px;
                height: 16px;
            }

            &:hover {
                border: @st_border !important;
            }
        }

        &__info {
            border: none;
            margin: 0 8px;
            padding: 4px 8px;
            font-weight: 600;
            font-size: 12px;
            color: @black100-color;
        }

        &__back img {
            transform: rotate(0.25turn);
        }

        &__forward img {
            transform: rotate(0.75turn);
        }

        &__picker {
            position: absolute;
            top: 32px;
        }
    }

    &__timetable {
        margin-top: 24px;
        display: flex;
        max-width: 504px;
        max-height: 360px;
        flex-direction: column;
        width: 100%;

        .lesson {
            display: flex;
            margin-top: 24px;

            &:first-child {
                margin-top: 0;
            }

            &__time {
                width: 42px;
                &-start {
                    font-weight: 700;
                    font-size: 16px;
                    color: @black100-color;
                }

                &-end {
                    font-size: 14px;
                    color: @black20-color;
                }
            }

            &__type {
                margin-left: 16px;
                width: 4px;

            }

            .type1 {
                background: @secondary4-color;
            }
            
            .type2 {
                background: @secondary1-color;
            }

            &__name {
                margin-left: 8px;
                padding-right: 16px;
                border-right: @st_border;
                font-size: 14px;
                color: @black100-color;
                flex: 1;
            }

            &__place {
                padding: 0 16px;
                color: @black100-color;
                border-right: @st_border;
                flex: 1;


                &__aud {
                    font-weight: 700;
                    font-size: 16px;
                }

                &__addr {
                    font-size: 14px;
                }

            }

            &__page {
                text-decoration: none;
                color: @primary-blue-color;
                padding-left: 16px;
                font-size: 12px;
                font-weight: 600;
            }


        }
    }

    &__not_found {
        margin-top: 24px;
        color: @black100-color;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 504px;
        flex-direction: column;
        font-size: 16px;

        img {
            width: 200px;
            height: 139px;
        }

        &__title {
            font-weight: 700;
            margin-top: 24px;
        }

        &__text {
            margin-top: 8px;
        }
    }
}
</style>
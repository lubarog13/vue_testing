<template>
    <div class="calendar">
        <div class="calendar__header">
            <div class="calendar__header__month">
                {{currentMonth}}
            </div>
            <div class="calendar__header__actions actions">
                <b-button class="back" @click="addMonth(-1)"><img class="icon" :src="require('/src/assets/icons/Arrow.svg?data')"></b-button>
                <b-button class="forward" @click="addMonth(1)"><img class="icon" :src="require('/src/assets/icons/Arrow.svg?data')"></b-button>
            </div>
        </div>
        <div class="calendar__weekdays">
            <div class="calendar__weekdays__weekday" v-for="( day, index) in weekdays" :key="index">{{day}}</div>
        </div>
        <div class="calendar__body">
            <div class="calendar__body__day calendar__day"
                v-for="day in days"
                :key="day.date"
                :class="{
                'calendar__day__not_current': !day.isCurrentMonth,
                'calendar__day__today': day.date === today,
                'calendar__day__event': day.event,
                'calendar__day__selected': value.format('YYYY-MM-DD') === day.date,
                }"
                @click="selectDay(day)"
            >
            {{getLabel(day)}}
            <span 
                v-if="day.event"
                :class="{
                    'calendar__day__lecture_event': day.event==='Лекция',
                    'calendar__day__practice_event': day.event==='Практика',
                    'calendar__day__double_event': day.event==='Лекция+Практика',
                }"
            />
            <span v-if="day.event==='Лекция+Практика'" class="calendar__day__double_event"/>
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

    export default {
        name: "MyCalendar",
        props: {
            value: dayjs(),
        },
        data() {
            return {
                weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
            }
        },
        computed: {
            eventDays() {
                return this.$store.state.user.timetable
            },
            today() {
                return dayjs().format("YYYY-MM-DD");
            },
            currentMonth() {
                return this.value.locale("ru").format("MMMM, YYYY")
            },
            days() {
                return [
                    ...this.previousMonthDays,
                    ...this.currentMonthDays,
                    ...this.nextMonthDays
                ];
            },

            month() {
            return Number(this.value.format("M"));
            },

            year() {
            return Number(this.value.format("YYYY"));
            },

            numberOfDaysInMonth() {
                return dayjs(this.value).daysInMonth();
            },

            currentMonthDays() {
                return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
                    return {
                    date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
                        "YYYY-MM-DD"
                    ),
                    isCurrentMonth: true,
                    event: this.dayEvent(dayjs(`${this.year}-${this.month}-${index + 1}`).format(
                        "YYYY-MM-DD"))
                    };
                });
            },

            previousMonthDays() {
                const firstDayOfTheMonthWeekday = this.getWeekday(
                    this.currentMonthDays[0].date
                );
                const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
                    1,
                    "month"
                );

                // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
                const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
                    ? firstDayOfTheMonthWeekday - 1
                    : 6;

                const previousMonthLastMondayDayOfMonth = dayjs(
                    this.currentMonthDays[0].date
                )
                    .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
                    .date();
                return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
                    (day, index) => {
                    return {
                        date: dayjs(
                        `${previousMonth.year()}-${previousMonth.month() +
                            1}-${previousMonthLastMondayDayOfMonth + index}`
                        ).format("YYYY-MM-DD"),
                        isCurrentMonth: false
                    };
                    }
                );
            },

            nextMonthDays() {
                const lastDayOfTheMonthWeekday = this.getWeekday(
                    `${this.year}-${this.month}-${this.currentMonthDays.length}`
                );

                const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month");

                const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
                    ? 7 - lastDayOfTheMonthWeekday
                    : lastDayOfTheMonthWeekday;

                return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
                    return {
                    date: dayjs(
                        `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
                    ).format("YYYY-MM-DD"),
                    isCurrentMonth: false
                    };
                });
            }
        },
        methods: {
            addMonth(c) {
                let value = this.value.set('month', this.value.get('month')+c)
                this.$emit('input', value)
            },
            getWeekday(date) {
                return dayjs(date).weekday();
            },
            getLabel(day) {
                return dayjs(day.date).format("D");
            },
            selectDay(day) {
                let value = dayjs(day.date)
                this.$emit('input', value)
            },
            dayEvent(date) {
                const day = this.eventDays.filter(d => dayjs(d.date).format("YYYY-MM-DD")===date)
                if(day.length>1) {
                    const l_count = day.filter(d => d.type === "Лекция").length
                    const p_count = day.filter(d => d.type === "Практика").length
                    return l_count>0? p_count>0? "Лекция+Практика": "Лекция" : "Практика"
                } else if (day.length === 1) {
                    return day[0].type
                }
                return null
            }
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");
.calendar {
    width: 296px;
    .pad1();
    background: @white100-color;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__month {
            color: @black100-color;
            font-weight: 700;
            font-size: 17px;
            margin: 4.5px 0;
            &::first-letter {
                text-transform: capitalize;
            }
        }

        .actions {
            display: flex;
            .back img {
                transform: rotate(0.25turn);
            }

            .btn {
            border: @st_border;
            border-radius: 4px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
            background: @white100-color;

            &:hover {
                border: @st_border !important;
            }
        }

            .forward img {
                transform: rotate(0.75turn);
            }
        }
    }

    &__weekdays {
        display: flex;
        margin-top: 16px;
         color: @black100-color;
         font-weight: 700;

        &__weekday {
            width: 24px;
            height: 24px;
            padding: 2px 3px;
            margin-left: 16px;
            font-size: 14px;

            &:first-child {
                margin-left: 0;
            }
        }


    }

    &__body {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        width: 100%;
        margin-top: 6px;

        .calendar__day {
            width: 24px;
            height: 24px;
            border-radius: 4px;
            cursor: pointer;
            background: @white100-color;
            color: @black20-color;
            font-size: 14px;
            padding: 2px 3.5px;
            margin: 6px 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            &__not_current {
                color: @black10-color;
                cursor: none;
            }

            &__today {
                background: @black5-color;
            }

            &__event {
                color: @black100-color;
            }

            &:first-child {
                margin: 6px 8px 6px 0;
            }

            &:nth-child(7n) {
                margin: 6px 0 6px 8px;
            }

            &:nth-child(7n+1) {
                margin: 6px 8px 6px 0;
            }

            .event() {
                width: 2px;
                height: 2px;
                border-radius: 50%;
                position: absolute;
                bottom: 2px;
            }

            &__lecture_event {
                background: @primary-blue-color;
                .event()
            }

            &__practice_event {
                background: @secondary1-color;
                .event()
            }

            &__double_event {
                .event();

                &:first-child {
                    background: @primary-blue-color;
                    left: 9px
                }

                &:last-child {
                    background: @secondary1-color;
                    right: 9px;
                }
            }

            &__selected {
                background: @primary-blue-color;
                color: @white100-color;
            }
        }
    }
}
</style>
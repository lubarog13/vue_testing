<template>
    <div  id="schedule-card-content">
                        <div style="margin-bottom: 30px">
                            <v-btn outlined class="nav-button" @click="clickBack()">
                                <b-icon icon="chevron-left"></b-icon>
                            </v-btn>
                            <div id="calendar-btn" v-click-outside="onClickOutside">
                            <v-btn color="white" style="margin: 0; color: #333333" elevation="0" class="more" @click="open_calendar=!open_calendar">
                                {{selected_date.getDate()}} {{monthNames[selected_date.getMonth()]}} {{selected_date.getFullYear()}}
                            </v-btn>
                            <v-card id="calendar-card" v-if="open_calendar">
                                <b-row>
                                    <b-col cols="8" class="centered-col" style="justify-content: start">
                                        <div class="text" style="font-size: 17px">{{monthNames1[selected_date.getMonth()] + ", " + selected_date.getFullYear()}}</div>
                                    </b-col>
                                    <b-col cols="3">
                                        <div style="display: flex">
                                            <v-btn outlined class="nav-button" @click="clickPrevMonth()">
                                                <b-icon icon="chevron-left"></b-icon>
                                            </v-btn>
                                            <v-btn outlined class="nav-button" @click="clickNextMonth()">
                                                <b-icon icon="chevron-right"></b-icon>
                                        </v-btn>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <div v-for="week_day in week_days" :key="week_day" class="date-col text text text__main">
                                        {{week_day}}
                                    </div>
                                    <div v-for="( month_day, index) in month_days" :key="month_day.toDateString()" class="date-col">
                                        <v-btn elevation="0" class="date-button text text__main" 
                                        v-bind:class="{'selected_button': month_day.toDateString()==selected_date.toDateString(), 
                                        'today-button ': month_day.toDateString()==new Date().toDateString() && month_day.toDateString()!=selected_date.toDateString(), 
                                        'date-button': month_day.toDateString()!=selected_date.toDateString(),
                                        'no_in_month_btn': month_day.getMonth()!=selected_date.getMonth()
                                        }"
                                        :disabled="events[index]==0 && month_day.getMonth()==selected_date.getMonth()"
                                        @click="selected_date = new Date(month_day); open_calendar=false"
                                        >
                                        {{month_day.getDate()}}
                                        <div class="events-box">
                                            <div class="lection-event" v-if="events[index]==1 || events[index]==3" :style="{'margin-right': events[index]==3? '2px': '0px'}"></div>
                                        <div class="practic-event" v-if="events[index]==2 || events[index]==3"></div>
                                        </div>
                                        </v-btn>
                                    </div>
                                </b-row>
                            </v-card>
                            </div>
                            <v-btn outlined class="nav-button" @click="clickForward()">
                                <b-icon icon="chevron-right"></b-icon>
                            </v-btn>
                        </div>
                        <div v-if="person.timetable.filter(lesson => lesson.date.toDateString()===selected_date.toDateString()).length>0">
                        <div v-for="lesson in person.timetable.filter(lesson => lesson.date.toDateString()===selected_date.toDateString())" :key="lesson.start_time + lesson.date" style="margin-bottom: 40px">
                            <b-row>
                                <b-col cols="2" style="padding-left: 20px">
                                    <div class="text">{{lesson.start_time}}</div>
                                    <p class="text__sub_text">{{lesson.end_time}}</p>
                                </b-col>
                                <b-col cols="5" class="divider-col" v-bind:class="{lection: lesson.type==='Лекция', practic: lesson.type==='Практика'}">
                                    <p class="text text__main">{{lesson.name}}</p>
                                </b-col>
                                <b-col cols="3" class="divider-col">
                                    <div class="text__big text">{{lesson.aud}}</div>
                                    <div class="text text__main">{{lesson.addr}}</div>
                                </b-col>
                                <b-col cols="2">
                                    <p class="text__sub_text text text__main"><a href="#">СТР 1</a></p>
                                </b-col>
                            </b-row>
                        </div>
                        </div>
                        <div v-else style="text-align: center;">
                            <div class="centered-col" style="width: 100%; margin-bottom: 20px;">
                            <img src="../assets/icons/undraw_not_found_60pq 1.png">
                            </div>
                            <span class="text__big text" >Пары не найдены</span>
                            <p class="text__big text">В этот день у преподавателя нет занятий</p>
                        </div>
                        </div>
</template>
 
<script>
    import clickOutside from '../directives/clickOutside.vue'
    export default {
        name: "ModalWindow",
        directives: {clickOutside},
        data: function () {
            return {
                monthNames: ["января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
            ],
                selected_date: new Date(),
                open_calendar: false,
                month_days: [],
                week_days : ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
                monthNames1 : ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                events: []
            }
        },
        props: ['person'],
        methods: {
        clickForward() {
            var result = this.selected_date.setDate(this.selected_date.getDate() + 1)
            this.selected_date  = new Date(result)
        },
        clickBack() {
            var result =this.selected_date.setDate(this.selected_date.getDate() - 1)
            this.selected_date = new Date(result)
        },
        clickNextMonth() {
            var result = this.selected_date.setMonth(this.selected_date.getMonth() + 1)
            this.selected_date  = new Date(result)
            this.setMonthDays()
        },
        clickPrevMonth() {
            var result = this.selected_date.setMonth(this.selected_date.getMonth() - 1)
            this.selected_date  = new Date(result)
            this.setMonthDays()
        },
        setMonthDays() {
            this.month_days = []
           let start_date = new Date(this.selected_date)
            start_date = new Date(start_date.setDate(1))
            let week_day = start_date.getDay() - 1
            if(week_day==-1) {
                week_day=6
            }
            let day = 0
            while(day!=week_day) {
                var date = new Date(start_date)
                this.month_days.push(new Date(date.setDate(date.getDate() - (week_day-day))))
                day+=1
                console.log()
            }
            this.month_days.push(new Date(start_date))
            this.month_days.push(new Date(start_date.setDate(start_date.getDate() + 1)))
            while(start_date.getDate()!=1) {
                this.month_days.push(new Date(start_date.setDate(start_date.getDate() + 1)))
            }
            this.month_days.pop()
            week_day = start_date.getDay() - 1
            if(week_day==-1) {
                week_day=6
            }
            if(week_day==0) week_day = 7
            if(week_day!=7) {
                this.month_days.push(new Date(start_date))
            }
            while (week_day<6) {
                this.month_days.push(new Date(start_date.setDate(start_date.getDate() + 1)))
                week_day+=1
            }
            this.events = []
            for (let day of this.month_days) {
                this.events.push(this.person.getScheduleEvents(day))
            }
         },
         onClickOutside (event) {
             console.log(event)
            this.open_calendar = false
        }
        },
        created () {
            this.setMonthDays()
        }
    }
</script>
 
<style scoped>
.nav-button {
    color: #333333;
    background: white;
    border: 1px solid #E6E6E6;
    width: 24px;
    min-width: 24px !important;

}
.lection {
    border-left: 4px solid #0091FF;
}
.practic {
    border-left: 4px solid #F7B500;
}

#schedule-card-content {
    padding: 0px 20px; 
    min-height: 400px; 
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
}
#calendar-card {
    width: 296px;
    min-height: 284px;
    position: absolute;
    will-change: transform;
    top: 0px;
    left: 0px;
    transform: translate3d(0px, 36px, 0px);
    z-index: 1000;
    margin-top: 90px;
    margin-left: 20px;
    padding: 20px
}
#calendar-btn {
    width: fit-content;
    display: inline-block;
}

.date-col {
    width: calc(100% / 7);
    padding-right: 0 !important;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
}
.date-button {
    background: white !important;
    color: #333333;
    width: 24px  !important;
    min-width: 24px !important;
    font-size: 14px !important;
    height: 24px !important;
    padding: 0px;
}
.selected_button {
    background: #035DD8 !important;
    color: white;
    width: 24px  !important;
    min-width: 24px !important;
    max-width: 24px;
    font-size: 14px !important;
    height: 24px !important;
    padding: 0px !important;
}
.today-button {
    background: #F2F2F2 !important;
    color: #333333;
    width: 24px  !important;
    min-width: 24px !important;
    max-width: 24px;
    font-size: 14px !important;
    height: 24px !important;
    padding: 0px !important;
}
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
    background: white !important;
    color: #B3B3B3;
}
.no_in_month_btn {
    background: white !important;
    color: #E6E6E6 !important;
    pointer-events:none;
}
.practic-event {
    background: #F7B500;
    width: 2px;
    height: 2px;
    border-radius: 2px;
}
.lection-event {
    background: #035DD8;
    width: 2px;
    height: 2px;
    border-radius: 2px;
}
.events-box {
    position: absolute;
    bottom: 0;
    display: flex;
}
</style>
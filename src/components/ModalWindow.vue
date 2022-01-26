<template>
    <div  id="schedule-card-content">
                        <div style="margin-bottom: 30px">
                            <v-btn outlined class="nav-button" @click="clickBack()">
                                <b-icon icon="chevron-left"></b-icon>
                            </v-btn>
                            <v-btn color="white" style="margin: 0; color: #333333" elevation="0" class="more">
                                {{selected_date.getDate()}} {{monthNames[selected_date.getMonth()]}} {{selected_date.getFullYear()}}
                            </v-btn>
                            <v-btn outlined class="nav-button" @click="clickForward()">
                                <b-icon icon="chevron-right"></b-icon>
                            </v-btn>
                        </div>
                        <div v-if="person.timetable.filter(lesson => lesson.date.toDateString()===selected_date.toDateString()).length>0">
                        <div v-for="lesson in person.timetable.filter(lesson => lesson.date.toDateString()===selected_date.toDateString())" :key="lesson.start_time + lesson.date" style="margin-bottom: 40px">
                            <b-row>
                                <b-col cols="2" style="padding-left: 20px">
                                    <div class="bold-text">{{lesson.start_time}}</div>
                                    <p class="sub-text">{{lesson.end_time}}</p>
                                </b-col>
                                <b-col cols="5" class="divider-col" v-bind:class="{lection: lesson.type==='Лекция', practic: lesson.type==='Практика'}">
                                    <p class="main-text">{{lesson.name}}</p>
                                </b-col>
                                <b-col cols="3" class="divider-col">
                                    <div class="big-text bold-text">{{lesson.aud}}</div>
                                    <div class="main-text">{{lesson.addr}}</div>
                                </b-col>
                                <b-col cols="2">
                                    <p class="sub-text main-text"><a href="#">СТР 1</a></p>
                                </b-col>
                            </b-row>
                        </div>
                        </div>
                        <div v-else style="text-align: center;">
                            <div class="centered-col" style="width: 100%">
                            <img src="../assets/icons/undraw_not_found_60pq 1.png">
                            </div>
                            <span class="big-text bold-text" >Пары не найдены</span>
                            <p class="big-text">В этот день у преподавателя нет занятий</p>
                        </div>
                        </div>
</template>
 
<script>
    export default {
        name: "ModalWindow",
        
        data: function () {
            return {
                monthNames: ["января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
            ],
                selected_date: new Date(),
                message: "hi",
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
        }
        },
        created () {
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
.centered-col {
    margin-bottom: 20px;
}
</style>
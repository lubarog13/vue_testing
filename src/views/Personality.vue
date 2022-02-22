<template>
    <b-container fluid class="container__main_container">
        <b-row>
        <b-col cols="3"  class="div__column__main">
            <div class="div__bordered">
            <v-img  v-bind:src="require('../assets/images/'+person.photo)"></v-img>
            <div v-if="person.is_teacher">
                <p class="text text__sub_text text__centured">{{person.main_role}}</p>
                <b-row>
                    <b-col class="div__column__divider text__centured">
                        <h3 class="text__header__colored">{{person.scopus_index}}</h3>
                        <span class="text text__sub_text">h-индекс Scopus</span>
                    </b-col>
                    <b-col class="text__centured">
                        <h3 class="text__header__colored">{{person.rinc_index}}</h3>
                        <span class="text text__sub_text">h-индекс РИНЦ</span>
                    </b-col>
                </b-row>
            </div>
            </div>
            <div class="div__bordered">
                <h3 class="text text__bold">
                    Контакты
                </h3>
                <v-list-item v-for="contact in person.contacts" :key="contact.contact">
                    <v-list-item-icon>
                        <v-img  v-bind:src="require('../assets/icons/'+contact.icon)" width="20px" height="20px"></v-img>
                    </v-list-item-icon>
                    <v-list-item-content>
                    <v-list-item-title class="text text__main">
                        {{contact.contact}}
                    </v-list-item-title>
                    <v-list-item-subtitle v-if="contact.comment" class="text text__comment text__main">
                        {{contact.comment}}
                    </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <v-expansion-panels>
            <v-expansion-panel class="div__bordered-panel" v-if="person.role!=='employee'">
                <v-expansion-panel-header class="text">
                    Клубы
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-list-item v-for="club in person.clubs" :key="club.name">
                        <v-list-item-icon>
                            <v-img  v-bind:src="require('../assets/images/'+club.image)"></v-img>
                        </v-list-item-icon>
                        <v-list-item-content>
                        <v-list-item-title class="text text__bold">
                            {{club.name}}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text text__sub_text">
                            {{club.role}}
                        </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="div__bordered-panel" v-else-if="!person.is_teacher">
                <v-expansion-panel-header class="text">
                    Коллеги
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-list-item v-for="colleague in person.colleagues" :key="colleague.last_name">
                        <v-badge dot overlap color="green" left bottom>
                        <v-list-item-icon class="zero_margin">
                            <v-avatar size="34px">
                            <v-img  v-bind:src="require('../assets/images/'+colleague.image)" height="34px" width="34px"></v-img>
                            </v-avatar>
                        </v-list-item-icon>
                        </v-badge>
                        <v-list-item-content>
                        <v-list-item-title class="text text__bold">
                            {{colleague.last_name + " " + colleague.first_name + " " + colleague.second_name}}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text text__sub_text">
                            {{colleague.role}}
                        </v-list-item-subtitle>
                        <div class="create_message"><a href="#" class="text text__big">Написать сообщение</a></div>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="div__bordered-panel" v-else>
                <v-expansion-panel-header class="text">
                    Расписание
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div v-for="lesson in person.timetable" :key="lesson.start_time + lesson.date" class="timetable">
                        <b-row v-if="lesson.date.toDateString()===new Date().toDateString()">
                            <b-col cols="3" class="timetable__colmn">
                                <div class="text text__bold">{{lesson.start_time}}</div>
                                <p class="text text__sub_text">{{lesson.end_time}}</p>
                            </b-col>
                            <b-col cols="8">
                                <v-chip label :color="lesson.type=='Лекция'? '#0091FF': '#F7B500'" class="chip"> {{lesson.type}}</v-chip>
                                <p class="text text__main timetable__lesson_name">{{lesson.name}}</p>
                                <b-row>
                                    <b-col cols="1">
                                        <img src="../assets/icons/map-marker.png">
                                    </b-col>
                                    <b-col cols="9">
                                        <p class="text text__sub_text">{{"Ауд. " + lesson.aud + ", " + lesson.addr}}</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                    <v-dialog
                    v-model="dialog"
                    width="552"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <p class="text text__main text__centured zero_margin__bottom"><a href="#" v-bind="attrs"
                        v-on="on">Подробнее</a></p>
                    </template>

                    <v-card
                    width="552"
                    >
                        <b-row class="v-dialog__first_row">
                            <b-col cols="10">
                        <v-card-title class="text text__bold text__xl">
                        Расписание
                        </v-card-title>
                            </b-col>
                            <b-col cols="2" class="div__column__centured_col">
                                <b-icon icon="X" font-scale="1.8" @click="dialog = false"></b-icon>
                            </b-col>
                        </b-row>
                        <v-divider class="zero_margin__top"></v-divider>
                        <modal-window :person="person"></modal-window>
                    </v-card>
                    </v-dialog>
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
        </b-col>
        <b-col cols="9" class="div__column__main">
            <div class="zero_margin div__bordered list-div">
                <b-row id="dence-row">
                    <div class="div__column__header div__column__divider">
                        <h3 class="text text__xl text__bold">{{person.last_name + " " + person.first_name+ " " + person.second_name}}</h3>
                    </div>
                    <div class="div__column__header" v-bind:class="{'div__column__divider': person.exchange}">
                        <span class="text text__l text__sub_text">{{person.isu}}</span>
                    </div>
                    <div v-if="person.exchange">
                        <v-chip color="#FFF0E7" id="exchange">семестровый обмен</v-chip>
                    </div>
                </b-row>
                <div v-if="person.role==='student' || person.role==='student_employee'" class="div__block_main">
                <b-row>
                    <b-col cols="3">
                        <p class="text text__sub_text">Курс:</p>
                    </b-col>
                    <b-col>
                        <p class="text text__main">{{person.course}}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="text text__sub_text">Факультет:</p>
                    </b-col>
                    <b-col>
                        <p class="text text__main"><a href="#">{{person.faculty}}</a></p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="text text__sub_text">Обр. программа:</p>
                    </b-col>
                    <b-col>
                        <p class="text text__main"><a href="#">{{person.op}}</a></p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="text text__sub_text">Специализация:</p>
                    </b-col>
                    <b-col>
                        <p class="text text__main"><a>{{person.specialization}}</a></p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="text text__sub_text zero_margin__bottom">Группа:</p>
                    </b-col>
                    <b-col>
                        <p class="text text__main zero_margin__bottom"><a href="#">{{person.group}}</a></p>
                    </b-col>
                </b-row>
                </div>
                <div v-if="person.role==='employee' || person.role==='student_employee'" class="div__block_main">
                    <b-row>
                    <b-col cols="3">
                        <p class="text text__sub_text">Должности:</p>
                    </b-col>
                    <b-col cols="6">
                        <b-row v-for=" position in open_positions? person.positions: person.positions.slice(0, 1)" :key="position.position + position.role">
                            <b-col cols="10">
                        <div>
                                <span class="text text__main"><a href="#">{{position.position}}</a></span>
                                <p class="text text__main">{{position.role}}</p>
                        </div>
                            </b-col>
                            <b-col cols="2">
                        <v-chip color="#E6EFFB" v-if="position.vacation">отпуск</v-chip>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="3">
                        <v-btn class="more" v-if="(person.positions.length>2  || person.positions.length>2)&& open_positions==false" elevation="0" color="#F2F2F2" @click="setPositions(true)">Подробнее <v-icon right> fa fa-chevron-down</v-icon></v-btn>
                        <v-btn v-else-if="open_positions" id="more" elevation="0" color="#F2F2F2" @click="setPositions(false)">Скрыть <v-icon right> fa fa-chevron-up</v-icon></v-btn>
                    </b-col>
                    <b-col>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="text text__sub_text">Полномочия:</p>
                    </b-col>
                    <b-col>
                        <div v-for="power in open_positions? person.powers: person.powers.slice(0, 1)" :key="power.power + power.role">
                                <span class="text text__main"><a href="#">{{power.power}}</a></span>
                                <p class="text text__main">{{power.role}}</p>
                        </div>
                    </b-col>
                </b-row>
                </div>
            </div>
            <b-row style="padding: 24px 0px">
                <b-col style="width: 28%; flex: none">
                    <b-dropdown>
                        <template #button-content>
                            Вся деятельность <span class="text text__sub_text" style="font-weight: 600; font-size: 12px; margin-left: 5%">(45)</span><v-icon style="font-size: 11px; margin-left: 5%;"> fa fa-chevron-down </v-icon>
                        </template>
                    </b-dropdown>
                </b-col>
                <b-col style="width: 60%; flex: none">
                    <b-form-input v-model="search" placeholder="Поиск"></b-form-input>
                </b-col>
                <b-col style="width: 12%; flex: none">
                    <v-btn class="button__search_button text text__main" id="search_btn" color="#035DD8">Найти</v-btn>
                </b-col>
            </b-row>
            <div class=" list-div div__bordered" v-for="activity in person.activities" :key="activity.name">
                <b-row>
                    <b-col cols="1">
                        <v-img  v-bind:src="require('../assets/icons/'+activity.icon)" width="32px" height="32px"></v-img>
                    </b-col>
                    <b-col cols="9">
                        <p class="text text__bold text__header__colored">
                            {{activity.type}}
                        </p>
                        <p class="text text__main" style="font-size: 16px">
                            {{activity.name}}
                        </p>
                        <p class="text text__sub_text" style="font-size: 12px">
                            {{activity.role}}
                        </p>
                    </b-col>
                    <b-col cols="1" offset="1">
                        <p class="text text__sub_text" style="font-size: 12px; text-aligment: end">
                            {{activity.date}}
                        </p>
                    </b-col>
                </b-row>
            </div>
        </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { person_base } from '../shared/Person.js';
import ModalWindow from '../components/ModalWindow.vue'
export default {
    name: "Personality",
    components: {ModalWindow},
    data() {
        return {
            current_date: new Date(),
            person: null,
        search: '',
        open_positions: false,
        dialog: false
        }
    },
    methods: {
        setPositions(open) {
            this.open_positions=open
        }
    },
    created() {
        //Студент
        //
        //Сотрудник
        //person_base.setEmployee("Шабанин", "Семен", "Олегович", "192073", [{position: "Центр проектирования корпоративных сервисов", role: "Директор", vacation: true}], [{power: "Mobile Development Club", role: "Ментор"}], "Shabanin.png")
        //Сотрудик + студент
        //person_base.setStudentEmployee("Шабанин", "Семен", "Олегович", "192073", 4, "ФТМИ", "Управление технологическими инновациями 2018", "Управление технологическими инновациями", "U34752",[{position: "Центр проектирования корпоративных сервисов", role: "Директор", vacation: true}], [{power: "Mobile Development Club", role: "Ментор"}], "Shabanin.png")
        //Преподаватель
        person_base.setTeacher("Бугров", "Владислав", "Евгеньевич", "168462", "Профессор, доктор физико-математических наук", 245, 133, 
        [{position: "Институт перспективных систем передачи данных", role: "Главный научный сотрудник", vacation: false},
        {position: "Лаборатория атмосферных оптических квантовых каналов связи", role: "Профессор", vacation: false},
        {position: "Научно-исследовательский центр перспективных функциональн...", role: "Главный научный сотрудник", vacation: true},
        {position: "Лаборатория однофотонных детекторов и генераторов", role: "Главный научный сотрудник", vacation: false},
        {position: "Лаборатория однофотонных детекторов и генераторов", role: "Руководитель", vacation: false},
        {position: "Научно-исследовательский центр радиофотонных систем ...", role: "Руководитель", vacation: false},
        {position: "Институт перспективных систем передачи данных", role: "Директор", vacation: false},
        ], [{power: "Научно-исследовательский центр перспективных функциональн...", role: "Сотрудник подразделения"},
        {power: "Диссертационный совет Университета ИТМО 06.19.00", role: "Председатель"},
        {power: "Лазеры для информационно-коммуникационных систем 2016", role: "Руководитель образовательной программы"},
        {power: "Оптоэлектроника 2018 ", role: "Руководитель образовательной программы"},
        {power: "Светодиодные технологии и оптоэлектроника 2019", role: "Руководитель образовательной программы"},
        {power: "Светодиодные технологии и оптоэлектроника 2020", role: "Руководитель образовательной программы"},
        ], "Bugrov.png")
        console.log(person_base)
        this.person = person_base.state
        console.log(this.person)
        if (this.person.role==="employee" || this.person.role==="student_employee") {
            this.setPositions(false)
        }
    }
}
</script>
<style scoped>
    div.container__main_container {
        margin-right: 60px;  
        padding-right: 300px;
    }
    .div__bordered {
        padding: 16px;
        border: 1px solid #E6E6E6;
        border-radius: 6px;
    }
    .div__column__main {
        padding: 15px;
    }
    .v-divider--vertical {
      height: 100%;
  }
  .v-divider {
      background: #E6E6E6;
  }
  .div__column__header {
      display: flex;
      align-items: center;
  }
  .text.text__sub_text {
      font-size: 14px;
  }

  .div__block_m {
      margin-top: 30px;
  }

  .v-application a {
    color: #035DD8;
    text-decoration: auto;
}
#dence-row > * {
    width: fit-content;
}
.button__search_button {
    background: #035DD8;
    color: white;
}
#search_btn {
    font-weight: 400;
    font-size: 14px;
    text-transform: none;
    width: 100%;
}
.list-div {
    padding: 24px;
    margin: 15px 0px;
}

h3.text__header__colored {
    font-size: 16px; 
    font-weight: 700
}

h3.text__bold {
    font-size: 16px; 
    margin-left: 10px
}

.text__xl {
    font-size: 24px !important;
}

.text__l {
    font-size: 16px !important;
}

.text__header__colored {
    font-size: 14px;
    color: #035DD8 !important;
}
.v-list-item__icon {
    margin-right: 10px !important;
}
.col-3 .div__bordered {
    margin-bottom: 30px;
}
.div__bordered-panel {
    border: 1px solid #E6E6E6 !important;
        border-radius: 6px !important;
    font-weight: 700 !important;
    font-size: 16px !important;
}
.v-chip {
    font-family: "Open Sans";
    font-size: 12px !important;
    font-weight: 600;
    color: #035DD8 !important;
}
.text__centured{
    text-align: center;
    padding: 10px 20px;
}
.chip {
    color: white !important;
    font-family: "Open Sans";
    font-size: 10px !important;
    font-weight: 400;
    width: 58px;
    height: 16px !important;
    justify-content: center;
    padding: 0;
}
#exchange {
    color: #FF7010 !important;
}

.v-list-item__title{
    font-size: 14px;
}

.text__comment {
    color: #999999 !important;
    font-size: 14px
}

.zero_margin {
    margin: 0;
}

.zero_margin__bottom {
    margin-bottom: 0 !important
}

.zero_margin__top {
    margin-bottom: 0 !important
}

div.create_message {
    margin-top: 5px
}

.timetable__column {
    text-align: end;
    padding-top: 10px
}

.timetable__lesson_name {
 margin-bottom: 5px;   
}

.v-dialog__first_row {
    padding: 0px 20px
}

</style>
<style>
    .btn-secondary {
        background: #F2F2F2 !important;
    color: #333333 !important; 
    font-family: "Open Sans" !important;
    font-weight: 600 !important;
    border: none !important;
    font-size: 14px !important;
}
.dropdown-toggle::after {
    display: none !important;
}
.dropdown {
    width: 100%;
    height: 36px;
}

.theme--light.v-icon {
    font-size: 12px !important;
}
.v-dialog {
    overflow: hidden;
}
.more {
    font-family: "Open Sans";
    font-size: 12px !important;
    font-weight: 600;
    text-transform: none !important;
    margin-left: 40%;
}
.div__column__centured_col {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .div__column__divider {
      border-right: 1px solid #E6E6E6;
  }
</style>
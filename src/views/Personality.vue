<template>
    <b-container fluid style="margin-right: 60px;     padding-right: 300px;">
        <b-row>
        <b-col cols="3"  class="main-cols">
            <div class="bordered">
            <v-img  v-bind:src="require('../assets/images/'+person.photo)"></v-img>
            <div v-if="person.is_teacher">
                <p class="sub-text centured-text">{{person.main_role}}</p>
                <b-row>
                    <b-col class="divider-col centured-text">
                        <h3 class="color-header" style="font-size: 16px; font-weight: 700">{{person.scopus_index}}</h3>
                        <span class="sub-text">h-индекс Scopus</span>
                    </b-col>
                    <b-col class="centured-text">
                        <h3 class="color-header" style="font-size: 16px; font-weight: 700">{{person.rinc_index}}</h3>
                        <span class="sub-text">h-индекс РИНЦ</span>
                    </b-col>
                </b-row>
            </div>
            </div>
            <div class="bordered">
                <h3 class="bold-text" style="font-size: 16px; margin-left: 10px">
                    Контакты
                </h3>
                <v-list-item v-for="contact in person.contacts" :key="contact.contact">
                    <v-list-item-icon>
                        <v-img  v-bind:src="require('../assets/icons/'+contact.icon)" width="20px" height="20px"></v-img>
                    </v-list-item-icon>
                    <v-list-item-content>
                    <v-list-item-title class="main-text" style="font-size: 14px">
                        {{contact.contact}}
                    </v-list-item-title>
                    <v-list-item-subtitle v-if="contact.comment">
                        {{contact.comment}}
                    </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <v-expansion-panels>
            <v-expansion-panel class="bordered-panel" v-if="person.role!=='employee'">
                <v-expansion-panel-header style="font-family: 'Open Sans'">
                    Клубы
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-list-item v-for="club in person.clubs" :key="club.name">
                        <v-list-item-icon>
                            <v-img  v-bind:src="require('../assets/images/'+club.image)"></v-img>
                        </v-list-item-icon>
                        <v-list-item-content>
                        <v-list-item-title class="bold-text" style="font-size: 14px">
                            {{club.name}}
                        </v-list-item-title>
                        <v-list-item-subtitle class="sub-text">
                            {{club.role}}
                        </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="bordered-panel" v-else-if="!person.is_teacher">
                <v-expansion-panel-header style="font-family: 'Open Sans'">
                    Коллеги
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-list-item v-for="colleague in person.colleagues" :key="colleague.last_name">
                        <v-badge dot overlap color="green" left bottom>
                        <v-list-item-icon style="margin: 0">
                            <v-avatar size="34px">
                            <v-img  v-bind:src="require('../assets/images/'+colleague.image)" height="34px" width="34px"></v-img>
                            </v-avatar>
                        </v-list-item-icon>
                        </v-badge>
                        <v-list-item-content>
                        <v-list-item-title class="bold-text" style="font-size: 14px">
                            {{colleague.last_name + " " + colleague.first_name + " " + colleague.second_name}}
                        </v-list-item-title>
                        <v-list-item-subtitle class="sub-text">
                            {{colleague.role}}
                        </v-list-item-subtitle>
                        <div style="margin-top: 5px"><a href="#" style="font-weight: 400">Написать сообщение</a></div>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="bordered-panel" v-else>
                <v-expansion-panel-header style="font-family: 'Open Sans'">
                    Расписание
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div v-for="lesson in person.timetable" :key="lesson.start_time + lesson.date">
                        <b-row v-if="lesson.date.toDateString()===new Date().toDateString()">
                            <b-col cols="3" style="text-align: end; padding-top: 10px">
                                <div class="bold-text">{{lesson.start_time}}</div>
                                <p class="sub-text">{{lesson.end_time}}</p>
                            </b-col>
                            <b-col cols="8">
                                <v-chip label :color="lesson.type=='Лекция'? '#0091FF': '#F7B500'" class="chip"> {{lesson.type}}</v-chip>
                                <p class="main-text">{{lesson.name}}</p>
                                <b-row>
                                    <b-col cols="1">
                                        <img src="../assets/icons/map-marker.png">
                                    </b-col>
                                    <b-col cols="9">
                                        <p class="sub-text" style="font-size: 14px">{{lesson.addr}}</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                    <p class="main-text centured-text" style="margin-bottom: 0"><a href="#">Подробнее</a></p>
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
        </b-col>
        <b-col cols="9" class="main-cols">
            <div class="bordered" style="padding: 24px">
                <b-row>
                    <b-col class="head-col divider-col">
                        <h3 class="bold-text" style="font-size: 24px;">{{person.last_name + " " + person.first_name+ " " + person.second_name}}</h3>
                    </b-col>
                    <b-col class="head-col">
                        <span class="sub-text" style="font-size: 16px">{{person.isu}}</span>
                    </b-col>
                </b-row>
                <div v-if="person.role==='student' || person.role==='student_employee'" class="main-block">
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text">Курс:</p>
                    </b-col>
                    <b-col>
                        <p class="main-text">{{person.course}}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text">Факультет:</p>
                    </b-col>
                    <b-col>
                        <p class="main-text"><a href="#">{{person.faculty}}</a></p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text">Обр. программа:</p>
                    </b-col>
                    <b-col>
                        <p class="main-text"><a href="#">{{person.op}}</a></p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text">Специализация:</p>
                    </b-col>
                    <b-col>
                        <p class="main-text"><a>{{person.specialization}}</a></p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text" style="margin-bottom: 0">Группа:</p>
                    </b-col>
                    <b-col>
                        <p class="main-text" style="margin-bottom: 0"><a href="#">{{personspecialization.state.group}}</a></p>
                    </b-col>
                </b-row>
                </div>
                <div v-if="person.role==='employee' || person.role==='student_employee'" class="main-block">
                    <b-row>
                    <b-col cols="3">
                        <p class="sub-text">Должности:</p>
                    </b-col>
                    <b-col cols="6">
                        <div v-for=" position in open_positions? person.positions: person.positions.slice(0, 1)" :key="position.position + position.role">
                                <span class="main-text"><a href="#">{{position.position}}</a></span>
                                <p class="main-text">{{position.role}}</p>
                        </div>
                    </b-col>
                    <b-col cols="3">
                        <v-btn id="more" v-if="(person.positions.length>2  || person.positions.length>2)&& open_positions==false" elevation="0" color="#F2F2F2" @click="setPositions(true)">Подробнее <v-icon right> fa fa-chevron-down</v-icon></v-btn>
                        <v-btn v-else-if="open_positions" id="more" elevation="0" color="#F2F2F2" @click="setPositions(false)">Скрыть <v-icon right> fa fa-chevron-up</v-icon></v-btn>
                    </b-col>
                    <b-col>
                     <!-- <v-chip color="#E6EFFB">отпуск</v-chip> -->
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text">Полномочия:</p>
                    </b-col>
                    <b-col>
                        <div v-for="power in open_positions? person.powers: person.powers.slice(0, 1)" :key="power.power + power.role">
                                <span class="main-text"><a href="#">{{power.power}}</a></span>
                                <p class="main-text">{{power.role}}</p>
                        </div>
                    </b-col>
                </b-row>
                </div>
            </div>
            <b-row style="padding: 24px 0px">
                <b-col cols="3">
                    <b-dropdown>
                        <template #button-content>
                            Вся деятельность <span class="sub-text" style="font-weight: 600; font-size: 12px; margin-left: 5%">(45)</span><v-icon style="font-size: 11px; margin-left: 5%;"> fa fa-chevron-down </v-icon>
                        </template>
                    </b-dropdown>
                </b-col>
                <b-col cols="7">
                    <b-form-input v-model="search" placeholder="Поиск"></b-form-input>
                </b-col>
                <b-col cols="2">
                    <v-btn class="search_button main-text" id="search_btn" color="#035DD8">Найти</v-btn>
                </b-col>
            </b-row>
            <div class=" list-div bordered" v-for="activity in person.activities" :key="activity.name">
                <b-row>
                    <b-col cols="1">
                        <v-img  v-bind:src="require('../assets/icons/'+activity.icon)" width="32px" height="32px"></v-img>
                    </b-col>
                    <b-col cols="9">
                        <p class="bold-text color-header">
                            {{activity.type}}
                        </p>
                        <p class="main-text" style="font-size: 16px">
                            {{activity.name}}
                        </p>
                        <p class="sub-text" style="font-size: 12px">
                            {{activity.role}}
                        </p>
                    </b-col>
                    <b-col cols="1" offset="1">
                        <p class="sub-text" style="font-size: 12px; text-aligment: end">
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
export default {
    name: "Personality",
    data: () => ({
        person: null,
        search: '',
        open_positions: false
    }),
    methods: {
        setPositions(open) {
            this.open_positions=open
        }
    },
    created() {
        //person_base.setEmployee("Шабанин", "Семен", "Олегович", "192073", [{position: "Центр проектирования корпоративных сервисов", role: "Директор"}], [{power: "Mobile Development Club", role: "Ментор"}], "Shabanin.png")
        person_base.setTeacher("Бугров", "Владислав", "Евгеньевич", "168462", "Профессор, доктор физико-математических наук", 245, 133, 
        [{position: "Институт перспективных систем передачи данных", role: "Главный научный сотрудник"},
        {position: "Лаборатория атмосферных оптических квантовых каналов связи", role: "Профессор"},
        {position: "Научно-исследовательский центр перспективных функциональн...", role: "Главный научный сотрудник"},
        {position: "Лаборатория однофотонных детекторов и генераторов", role: "Главный научный сотрудник"},
        {position: "Лаборатория однофотонных детекторов и генераторов", role: "Руководитель"},
        {position: "Научно-исследовательский центр радиофотонных систем ...", role: "Руководитель"},
        {position: "Институт перспективных систем передачи данных", role: "Директор"},
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
    .bordered {
        padding: 16px;
        border: 1px solid #E6E6E6;
        border-radius: 6px;
    }
    .main-cols {
        padding: 15px;
    }
    .v-divider--vertical {
      height: 100%;
  }
  .v-divider {
      background: #E6E6E6;
  }
  .centered-col {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .head-col {
      display: flex;
      align-items: center;
  }
  .divider-col {
      border-right: 1px solid #E6E6E6;
  }
  .sub-text {
      font-size: 14px;
  }

  .main-block {
      margin-top: 30px;
  }

  .v-application a {
    color: #035DD8;
    text-decoration: auto;
}
.search_button {
    background: #035DD8;
    color: white;
}
#search_btn {
    font-weight: 400;
    font-size: 14px;
    text-transform: none;
    width: 70%;
}
.list-div {
    padding: 24px;
    margin: 15px 0px;
}

.color-header {
    font-size: 14px;
    color: #035DD8 !important;
}
.v-list-item__icon {
    margin-right: 10px !important;
}
.col-3 .bordered {
    margin-bottom: 30px;
}
.bordered-panel {
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
#more {
    font-family: "Open Sans";
    font-size: 12px !important;
    font-weight: 600;
    text-transform: none !important;
    margin-left: 40%;
}
.centured-text{
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
</style>
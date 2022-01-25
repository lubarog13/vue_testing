<template>
    <b-container fluid style="margin-right: 60px;     padding-right: 300px;">
        <b-row>
        <b-col cols="3"  class="main-cols">
            <div class="bordered">
            <v-img  v-bind:src="require('../assets/images/'+person.state.photo)"></v-img>
            </div>
            <div class="bordered">
                <h3 class="bold-text" style="font-size: 16px; margin-left: 10px">
                    Контакты
                </h3>
                <v-list-item v-for="contact in person.state.contacts" :key="contact.contact">
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
            <v-expansion-panel class="bordered-panel" >
                <v-expansion-panel-header style="font-family: 'Open Sans'">
                    Клубы
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-list-item v-for="club in person.state.clubs" :key="club.name">
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
            </v-expansion-panels>
        </b-col>
        <b-col cols="9" class="main-cols">
            <div class="bordered" style="padding: 24px">
                <b-row>
                    <b-col class="head-col divider-col">
                        <h3 class="bold-text" style="font-size: 24px;">{{person.state.last_name + " " + person.state.first_name+ " " + person.state.second_name}}</h3>
                    </b-col>
                    <b-col class="head-col">
                        <span class="sub-text" style="font-size: 16px">{{person.state.isu}}</span>
                    </b-col>
                </b-row>
                <div v-if="person.state.role==='student'" class="main-block">
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text">Курс:</p>
                    </b-col>
                    <b-col>
                        <p class="main-text">{{person.state.course}}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text">Факультет:</p>
                    </b-col>
                    <b-col>
                        <p class="main-text"><a href="#">{{person.state.faculty}}</a></p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text">Обр. программа:</p>
                    </b-col>
                    <b-col>
                        <p class="main-text"><a href="#">{{person.state.op}}</a></p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text">Специализация:</p>
                    </b-col>
                    <b-col>
                        <p class="main-text"><a>{{person.state.specialization}}</a></p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <p class="sub-text" style="margin-bottom: 0">Группа:</p>
                    </b-col>
                    <b-col>
                        <p class="main-text" style="margin-bottom: 0"><a href="#">{{person.state.group}}</a></p>
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
            <div class=" list-div bordered" v-for="activity in person.state.activities" :key="activity.name">
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
import { person } from '../shared/Person.js';
export default {
    name: "Personality",
    data: () => ({
        person: person,
        search: ''
    }),
    created() {
        console.log(person)
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
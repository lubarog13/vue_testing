<template>
    <b-container fluid style="margin-right: 60px;     padding-right: 300px;">
        <b-row>
        <b-col cols="3"  class="main-cols">
            <div class="bordered">
            <v-img  v-bind:src="require('../assets/images/'+person.state.photo)"></v-img>
            </div>
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
                <b-col cols="6">
                    <b-form-input v-model="search" placeholder="Поиск"></b-form-input>
                </b-col>
            </b-row>
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
    width: 90%;
    height: 36px;
}
</style>
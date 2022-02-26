<template>
    <div class="info">
        <div class="info__main">
            <div class="info__main-name">
                {{last_name}} {{first_name}} {{second_name}}
            </div>
            <div class="info__main-isu">
                {{isu}}
            </div>
            <div class="info__main-exchange" v-if="exchange">
                <div class="custom-badge" id="tooltip-target-1" @mouseover="active=true" @mouseleave="active=false">
                    семестровый обмен
                </div>
                <div class="arrow_up" target="tooltip-target-1" triggers="hover" v-show="active">
                </div>
                <b-tooltip target="tooltip-target-1" triggers="hover" placement="bottom" variant="success">
                    направлен на обучение в вуз-партнер с {{exchange.start_date.toLocaleDateString()}} по {{exchange.end_date.toLocaleDateString()}}
                </b-tooltip>
            </div>
        </div>
        <div class="info__about about" v-if="role==='student'||role==='student_employee'">
            <div class="about__row">
                <div class="about__label">
                    Курс:
                </div>
                <div class="about__value">
                    {{course}} курс
                </div>
            </div>
            <div class="about__row">
                <div class="about__label">
                    Факультет:
                </div>
                <router-link class="about__value">
                    {{faculty}}
                </router-link>
            </div>
            <div class="about__row">
                <div class="about__label">
                    Обр. программа:
                </div>
                <router-link class="about__value">
                    {{op}}
                </router-link>
            </div>
            <div class="about__row">
                <div class="about__label">
                    Специализация:
                </div>
                <div class="about__value">
                    {{specialization}}
                </div>
            </div>
            <div class="about__row">
                <div class="about__label">
                    Группа:
                </div>
                <router-link class="about__value">
                    {{group}}
                </router-link>
            </div>
        </div>
        <div class="info__about about" v-if="role==='employee'||role==='student_employee'||role==='teacher'">
            <div class="about__row">
                <div class="about__label">
                    Должности:
                </div>
                <div class="about__value-column">
                    <router-link class="about__value">
                    {{positions[0].position}}
                    </router-link>
                    <div class="about__value">
                        {{positions[0].role}}
                    </div>
                </div>
                <b-button class="about__actions" v-if="user_positions" @click="openInfo">
                    {{ opened? "Скрыть" : "Подробнее"}}
                    <img :src="require('/src/assets/icons/Arrow.svg?data')" class="icon" :class="{'icon-close': opened}">
                </b-button>
            </div>
            <transition name="fall">
            <div class="about__value-hidden" v-if="opened">
                    <div class="about__value-column" v-for="position in user_positions" :key="position.position">
                    <router-link class="about__value">
                    {{position.position}}
                    </router-link>
                    <div class="about__value">
                        {{position.role}}
                    </div>
                </div>
            </div>
            </transition>
            <div class="about__row">
                <div class="about__label">
                    Полномочия:
                </div>
                <div class="about__value-column">
                    <router-link class="about__value">
                    {{powers[0].power}}
                    </router-link>
                    <div class="about__value">
                        {{powers[0].role}}
                    </div>
                </div>
            </div>
            <transition name="fall">
            <div class="about__value-hidden" v-if="opened">
                    <div class="about__value-column" v-for="power in user_powers" :key="power.power">
                    <router-link class="about__value">
                    {{power.power}}
                    </router-link>
                    <div class="about__value">
                        {{power.role}}
                    </div>
                </div>
            </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: "InfoCard",
        data() {
            return {
                opened: false,
                active: false
            }
        },
        methods: {
            openInfo() {
                this.opened = !this.opened
            }
        }, 
        computed: {
            ...mapState({
                first_name: state => state.user.first_name,
                last_name: state => state.user.last_name,
                second_name: state => state.user.second_name,
                isu: state => state.user.isu,
                role: state => state.user.role,
                course: state => state.user.course,
                faculty: state => state.user.faculty,
                op: state => state.user.op,
                specialization: state => state.user.specialization,
                group: state => state.user.group,
                positions: state => state.user.positions,
                powers: state => state.user.powers,
                exchange: state => state.user.exchange
            }),
            user_positions() {
                if (this.positions.length) {
                    return this.positions.slice(1)
                }
                return null
            },
            user_powers() {
                if (this.powers.length) {
                    return this.powers.slice(1)
                }
                return null
            },
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("../assets/_variables.less");
    .info {
        &__main {
            display: flex;
            &-name {
                color: @black100-color;
                font-size: 24px;
                font-weight: 700;
                padding-right: 16px;
                border-right: @st_border;
                width: fit-content;
            }

            &-isu {
                text-align: left;
                margin-left: 16px;
                font-weight: 400;
                font-size: 16px;
                color: @black40-color;
                align-self: center;
            }
            &-exchange {
                margin-left: 16px;
                padding-left: 16px;
                border-left: @st_border;
                position: relative;
                display: flex;
                justify-content: center;
                flex-direction: column;

                .custom-badge {
                    color: @secondary7-color;
                    background: @secondary710-color;
                    
                    &:hover {
                        background: @secondary7-color;
                        color: @secondary710-color;
                        
                    }

                }
            }
        }

        .about {
            margin-top: 24px;
            font-size: 14px;
            font-weight: 400;

            &:last-child {
                margin-top: 12px;
            }

            &__row {
                display: flex;
                flex-direction: row;
                &:last-child {
                    margin-bottom: 0;
                }
            }

            & > * {
                margin-bottom: 12px;
            }

            &__label {
                min-width: 120px;
                color: @black40-color;
            }

            &__value {
                flex: 1;
                margin-left: 24px;
                color: @black100-color;

            }

            &__value-column {
                display: flex;
                flex-direction: column;
            }

            &__value-hidden {
                display: flex;
                flex-direction: column;
                margin-left: 120px;

                & > * {
                margin-bottom: 12px;
                }

            }

            router-link.about__value {
                text-decoration: none;
                color: @primary-blue-color;
                cursor: pointer;
            }

            &__actions {
                margin-left: auto;
                width: 106px;
                height: 28px;
                background: @black5-color;
                color: @black100-color;
                font-weight: 600;
                display: flex;
                font-size: 12px;
                .rad();
                border: none;

                .icon {
                    width: 16px;
                    height: 16px;
                    margin-left: auto;
                    align-self: center;
                }
            }
        }
    }

/*     .fall-enter-active, .fall-leave-active {
        transition: height 1.5s;
    }
    .fall-enter, .fall-leave-to  {
        height: 0;
        overflow: hidden;
    } */

</style>

<style lang="less">
@import (less) url("../assets/_variables.less");
    .tooltip.b-tooltip-success .tooltip-inner {
        background: @black100-color !important;
        opacity: 1 !important;
        font-size: 12px;
        margin-top: 2px !important;
        top: -2px;
    }

    .arrow_up {
        width: 0;
        height: 0;
        padding-top: 4px;
        align-self: center;
        border-style: solid;
        border-width: 0 5.25px 5.5px 5.25px;
        border-color: transparent transparent @black100-color transparent;
    }
</style>
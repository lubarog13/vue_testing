<template>
    <div class="info">
        <div class="info__main">
            <div class="info__main-name">
                {{last_name}} {{first_name}} {{second_name}}
            </div>
            <div class="info__main-isu">
                {{isu}}
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
                opened: false
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
                powers: state => state.user.powers
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
                flex: 1;
                text-align: left;
                margin-left: 16px;
                font-weight: 400;
                font-size: 16px;
                color: @black40-color;
                align-self: center;
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
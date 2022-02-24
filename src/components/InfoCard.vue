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
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: "InfoCard",
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
            })
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

            &__row {
                display: flex;
                flex-direction: row;
            }

            & > * :not(:last-child) {
                margin-bottom: 12px;
            }

            &__label {
                width: 120px;
                color: @black40-color;
            }

            &__value {
                flex: 1;
                margin-left: 24px;
                color: @black100-color;
            }

            router-link.about__value {
                text-decoration: none;
                color: @primary-blue-color;
                cursor: pointer;
            }
        }
    }

</style>
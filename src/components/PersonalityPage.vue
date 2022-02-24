<template>
    <div class="page__container person">
        <div class="left__content">
            <div class="person__photo">
                <photo-card />
            </div>
            <div class="person__contacts">
                <contacts-card />
            </div>
            <div class="person__variable-block">
                <clubs-card />
            </div>
        </div>
        <div class="right__content">
            <div class="person__info">
                <info-card/>
            </div>
            <div class="right__content-search search">
                <select class="search__select">
                    <option>
                        Вся деятельность
                        <span class="search__select-count">(345)</span>
                    </option>
                </select>
                <b-form-input placeholder="Поиск" class="search__input"></b-form-input>
                <b-button class="search__button">Найти</b-button>
            </div>
            <activity-card class="person__activity" v-for="activity in activities" :key="activity.name" :activity="activity"/>
        </div> 
    </div>
</template>

<script>
import InfoCard from './InfoCard.vue'
import ActivityCard from './UI/ActivityCard.vue'
import ClubsCard from './UI/ClubsCard.vue'
import ContactsCard from './UI/ContactsCard.vue'
import PhotoCard from './UI/PhotoCard.vue'
    export default {
        components: { PhotoCard, InfoCard, ActivityCard, ContactsCard, ClubsCard },
        name: "PersonalityPage",
        computed: {
            activities() {
                return this.$store.state.user.activities
            }
        }
    }
</script>

<style lang="less" scoped>
    @import (less) url("../assets/_variables.less");
    .page__container {
        padding: 24px;
        display: flex;
        flex-direction: row;

        .left__content {
            flex: 0 0 264px;
            display: flex;
            flex-direction: column;


            .person__photo {
                .bordered_box();
                .pad1()
            }

            .person__contacts {
                margin-top: 24px;
            }

            .person__variable-block {
                margin-top: 24px;
            }
        }

        .right__content {
            display: flex;
            flex: 1;
            flex-direction: column;
            margin-left: 23px;

            .person__info {
                .bordered_box();
                .pad2()
            }

            .search {
                margin-top: 24px;
                display: flex;

                &__select {
                    background: @black5-color;
                    border-color: @black5-color;
                    border-right-width: 16px;
                    border-left-width: 16px;
                    border-bottom-width: 8px;
                    border-top-width: 8px;
                    color: @black100-color;
                    font-weight: 600;
                    font-size: 14px;
                    padding-right: 12px;

                    option {
                        color: @black100-color;
                        font-weight: 600;
                        font-size: 14px;
                    }

                    &-count {
                        color: @black40-color;
                        font-size: 12px;
                    }

                    .rad();
                }

                &__input {
                    flex: 1;
                    margin: 0 16px;
                }

                &__button {
                    background: @primary-blue-color;
                    color: white;
                    border: none;
                    font-weight: 600;
                    font-size: 14px;
                    padding: 8px 27px;
                    .rad()
                }
            }

            .person__activity {
                margin-top: 16px;
            }
        }

    }

</style>
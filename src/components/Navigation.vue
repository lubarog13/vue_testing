<template>
    <div class="navigation">
        <div class="navigation__content">
            <div class="navigation__title">Персоналии</div>
            <div class="navigation__main main">
                <div class="main__search">
                    <img src="../assets/icons/search-outline.svg" class="icon">
                </div>
                <div class="main__date date">
                    <div class="date__title">
                        {{date}}
                    </div>
                    <div class="date__week">
                        чётная неделя
                    </div>
                </div>
                <div class="main__notifications">
                    <img src="../assets/icons/notification-outline-active.svg" class="icon">
                </div>
                <div class="main__profile profile">
                    <div class="profile__avatar avatar">
                            <img :src="profilePhoto" class="avatar__image"/>
                    </div>
                    <div class="profile__content">
                        <div class="profile__name">
                            {{ `${profileLastName} ${profileFirstName.charAt(0)}. ${profileSecondName.charAt(0)}.` }}
                        </div>
                        <div class="profile__isu">
                            {{profileIsu}}
                        </div>
                    </div>
                    <div class="profile__actions">
                        <img src="../assets/icons/ProfileArrow.svg?data" class="icon">
                    </div>
                </div>
                <div class="main__lang">
                    <img :src="countryPhoto" class="icon">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from "moment"
    import {mapState} from 'vuex'
    export default {
        name: "Navigation",
        computed: {
            date() {
                return moment().locale("ru").format("ddd") + ", " + moment().locale("ru").format("DD MMMM")
            },
            ...mapState({
                profileFirstName: state => state.profile.profileFirstName,
                profileLastName: state => state.profile.profileLastName,
                profileSecondName: state => state.profile.profileSecondName,
                profileIsu: state => state.profile.profileIsu,
                profilePhoto: state => require(`../assets/images/${state.profile.profilePhoto}`),
                countryPhoto: state => require(`../assets/countryIcons/${state.country}.png`)
            })
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("../assets/_variables.less");
    .navigation {
        height: 64px;
        background: white;
        border-bottom: 1px solid @black10-color;
        display: flex;
        align-items: center;

        &__content {
            padding: 12px 24px 12px 17px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .navigation__title {
             font-weight: 700;
             font-size: 30px;
             flex: 1;
             color: @black100-color;
            }
            
            .main {
                height: 40px;
                display: flex;
                align-items: center;
                & > *  {
                    border-right: 1px solid @black10-color;
                    padding: 0 16px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                &__search {
                    padding-left: 0;
                    width: fit-content;
                    cursor: pointer;
                }

                .date {
                    justify-content: flex-end;
                    font-weight: 400;

                    &__title {
                        color: @black100-color;
                        font-size: 14px;
                        &::first-letter {
                            text-transform: capitalize;
                        }
                    }
                    &__week {
                        color: @black20-color;
                        font-size: 12px;
                        text-align: end;
                    }
                }

                .profile {
                    align-items: center;
                    flex-direction: row;

                    .avatar {
                        border: 2px solid @primary-blue-color;
                        border-radius: 50%;
                        padding: 2px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &__image {
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                        }
                    }

                    &__content {
                        margin-left: 12px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        font-weight: 400;

                        .profile__name {
                            font-size: 16px;
                            color: @black100-color;
                        }

                        .profile__isu {
                            font-size: 14px;
                            color: @black20-color;
                        }
                    }

                    &__actions  {
                        margin-left: 12px;

                        .icon {
                            width: 16px;
                            height: 15px;
                        }
                    }
                }

                &__lang {
                    padding-right: 0;
                    border: none;
                }
            }
        }

    }
</style>
<template>
    <div class="clubs">
        <div class="clubs__panel panel" @click="openPanel">
            <div class="panel__title">
                Клубы
            </div>
            <img class="icon" :class="{'icon-close': opened}" :src="require('/src/assets/icons/Arrow.svg?data')"/>
        </div>
        <div class="clubs__content" v-if="opened">
            <div class="clubs__content__club club" v-for="club in clubs" :key="club.name">
                <b-avatar class="club__avatar" :src="require(`/src/assets/images/${club.image}`)"></b-avatar>
                <div class="club__content">
                    <div class="club__content__title">{{club.name}}</div>
                    <div class="club__content__role">{{club.role}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClubsCard",
        data() {
            return{
                opened: false
            }
        },
        methods: {
            openPanel() {
                this.opened = !this.opened
            }
        },

        computed: {
            clubs() {
                return this.$store.state.user.clubs
            }
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");
.clubs {
    .bordered_box();
    padding: 8px 0;

    .panel {
        display: flex;
        cursor: pointer;
        padding: 0 12px;
        &__title {
            flex: 1;
            font-weight: 700;
            font-size: 16px;
            color: @black100-color;
        }

        .icon {
            width: 16px;
            height: 16px;
            align-self: center;
        }
    }

    &__content {
        margin-top: 8px;

        .club {
            display: flex;
            padding: 8px 12px;

            &__avatar {
                width: 34px;
                height: auto;
            }

            &__content {
                display: flex;
                flex-direction: column;
                font-size: 14px;
                margin-left: 8px;
                flex: 1;

                &__title {
                    font-weight: 700;
                    color: @black100-color;
                }

                &__role {
                    font-weight: 400;
                    color: @black40-color;
                }
            }
        }
    }
}

</style>
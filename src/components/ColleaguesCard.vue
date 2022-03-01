<template>
    <div class="colleagues">
        <div class="colleagues__panel panel" @click="openPanel">
            <div class="panel__title">
                Коллеги
            </div>
            <img class="icon" :class="{'icon-close': opened}" :src="require('/src/assets/icons/Arrow.svg?data')"/>
        </div>
        <div class="colleagues__content" v-if="opened">
            <div class="colleagues__content__colleague colleague" v-for="colleague in colleagues" :key="colleague.name">
                <b-avatar badge badge-variant="success" badge-left class="colleague__avatar" :src="require(`/src/assets/images/${colleague.image}`)"></b-avatar>
                <div class="colleague__content">
                    <div class="colleague__content__name">{{colleague.last_name}} {{colleague.first_name}} {{colleague.second_name}}</div>
                    <div class="colleague__content__role">{{colleague.role}}</div>
                    <a href="#" class="colleague__content__action">Написать сообщение</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ColleaguesCard",
        data() {
            return {
                opened: false
            }
        },
        methods: {
            openPanel() {
                this.opened = !this.opened
            }
        },
        computed: {
            colleagues() {
                return this.$store.state.user.colleagues
            }
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");
.colleague {
    &__content {
        &__action {
            color: @primary-blue-color;
            margin-top: 8px;
            text-decoration: none;
        }
    }
}
</style>

<style lang="less">
@import (less) url("/src/assets/_variables.less");
    .badge-success {
        background: @secondary6-color;
        width: 10px;
        height: 10px;
        border: 2px solid @white100-color;
        min-width: 0 !important;
        min-height: 0 !important;
    }
</style>
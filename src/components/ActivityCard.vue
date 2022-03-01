<template>
    <div class="activity">
        <div class="activity__icon">
            <img :src="icon" />
        </div>
        <div class="activity__content">
            <div class="activity__content-type">
                {{activity.type}}
            </div>
            <div class="activity__content-name">
                {{activity.name}}
            </div>
            <div class="activity__content-role">
                {{activity.role}}
            </div>
        </div>
        <div class="activity__date" v-html="date">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Activity-card",
        props: ["activity"],
        computed: {
            icon() {
                return require(`/src/assets/icons/${this.activity.icon}`)
            },
            date() {
                if(this.activity.date.includes('–')) {
                    return `${this.activity.date.split('–')[0]}–<br/>${this.activity.date.split('–')[1]}`
                } 
                return this.activity.date
            }
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");
    .activity {
        .bordered_box();
        .pad2();
        display: flex;

        &__icon {
            img {
                width: 32px;
                height: 32px;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            flex: 1;
            margin-left: 16px;

            &-type {
                color: @primary-blue-color;
                font-weight: 700;
                font-size: 14px;
            }

            &-name {
                margin-top: 2px;
                font-weight: 400;
                font-size: 16px;
            }
            &-role {
                margin-top: 12px;
                color: @black20-color;
                font-size: 12px;
                font-weight: 600;
            }
        }

        &__date {
            width: 110px;
        
            text-align: end;
            color: @black40-color;
            font-size: 12px;
            font-weight: 400;
        }
    }

</style>
<template>
<div class="item">
    <div class="item__content"> 
        <img :src="item_icon" class="item__icon icon"/>
        <span class="item__name">{{item.name}}</span>
        <div class="item__options">
            <div class="item__options__badge" v-if="item.messages">
                {{item.messages}}
            </div>
            <img :src="require('/src/assets/icons/Arrow.svg?data')" class="icon" v-if="item.children">
        </div>
    </div>
    <div class="item__children" v-if="item.children">
        <div class="item__child child" v-for="child in item.children" :key="child.name">
            <div class="child__decoration"></div>
            <div class="child__content">
                {{child.name}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: ["item"],
        computed: {
            item_icon() {
                return require(`/src/assets/icons/${this.item.icon}.svg?data`)
            }
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");

.item {
    cursor: pointer;
    padding: 8px;
    &__content {
        display: flex;
        align-items: center;
        color: @black60-color;
    }

    &__name {
        font-weight: 400;
        font-size: 16px;
        padding-left: 8px;
    }
    &__options {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        &__badge {
            background-color: @secondary5-color;
            color: @white100-color;
            font-weight: 600;
            font-size: 12px;
            border-radius: 24px;
            padding: 2px 6px;
        }
    }
    &__children {
        padding: 0 8px;

        .child {
           display: flex;
           margin-top: 8px;
           
           &__decoration {
               width: 13px;
               height: 40px;
               border-right: 2px solid @black5-color;
           }

           &__content {
               margin-left: 11px;
               border-radius: 6px;
               background-color: @black5-color;
               color: @black100-color;
               padding: 10px 8px;
               flex: 1;
           }
        }
    }
}

</style>
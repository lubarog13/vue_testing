<template>
    <div class="select">
        <div class="select__panel panel" @click="openPanel" :class="{'panel-active': opened}">
            <div class="panel__option-name">
                {{selectedOption.name}}
            </div>
            <div class="panel__option-value">
                ({{selectedOption.value}})
            </div>
            <img class="icon" :class="{'icon-close': opened}" :src="require('/src/assets/icons/Arrow.svg?data')"/>
        </div>
        <div class="select__list list" v-if="opened">
            <div class="list__item" v-for="(option, index) in options" :key="index" @click="selectOption(option)">
                <div class="list__item__name">
                    {{option.name}}
                </div>
                <div class="list__item__value">
                    ({{option.value}})
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MySelect",
        data() {
            return {
                opened: false,
                selectedOption: null
            }
        },
        props: ["options"],
        methods: {
            openPanel() {
                this.opened = !this.opened
            },
            selectOption(option) {
                this.selectedOption = option
                this.$emit("selected", option)
                this.openPanel()
            }
        },
        created() {
            this.selectedOption = this.options[0]
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");
.select {
    width: 226px;
    display: flex;
    position: relative;
    cursor: pointer;
    flex-direction: column;
    .panel {
        display: flex;
        padding: 8px 16px;
        align-items: center;
        font-weight: 600;
        height: 36px;
        border-radius: 6px;
        position: relative;
        background-color: @black5-color;
        color: @black100-color;

        &__option-name {
            font-size: 14px;

        }
        &__option-value {
            font-size: 12px;
            color: @black40-color;
            margin-left: 8px;
        }

        .icon {
            width: 20px;
            height: 20px;
            right: 16px;
            position: absolute;
        }

        &-active {
            background-color: @primary-blue-color;
            color: white;
            .panel__option-value {
                color: rgba(255, 255, 255, 0.4);
            }

        }
    }

    .list {
        position: absolute;
        top: 44px;
        display: flex;
        flex-direction: column;
        z-index: 99;
        width: 100%;
        background: white;
        padding: 4px 1px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        border: 1px solid @black5-color;

        &__item {
            padding: 8px 12px;
            display: flex;
            align-items: center;

            &__name {
                color: @black60-color;
                font-size: 14px;
            }

            &__value {
                font-size: 12px;
                color: @black20-color;
                margin-left: 4px;
            }

            &:hover {
                background: @black5-color;
            }
        }
    }
}
</style>
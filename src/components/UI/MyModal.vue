<template>
    <div class="modal" @click="closeModal" v-if="value">
        <div class="modal__content content" @click.stop>
            <div class="content__heading">
                <div class="content__heading__title">
                    <slot name="title"></slot>
                </div>
                <img :src="require('/src/assets/icons/CloseIcon.svg')"  class="content__heading__close" @click="closeModal">
            </div>
            <div class="content__main">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyModal",
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            closeModal() {
                this.$emit('input', false)
            }
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");
.modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    background: rgba(67, 66, 68, 0.8);
    display: flex;

    .content {
        margin: auto;
        min-height: 50px;
        min-width: 300px;
        background: @white100-color;
        .rad();

        &__heading {
            display: flex;
            border-bottom: @st_border;
            width: 100%;
            padding: 16px 24px;
            color: @black100-color;
            justify-content: space-between;
            align-items: center;

            &__title {
                font-weight: 700;
                font-size: 24px;
            }

            &__close {
                width: 36px;
                height: 36px;
                cursor: pointer;
            }
        }
        &__main {
                padding: 16px 24px 24px 24px;
                overflow: auto;
            }
    }
}
</style>
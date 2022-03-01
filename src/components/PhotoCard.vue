<template>
    <div class="user__photo-wrap">
        <img :src="image" alt="Фото пользователя" class="user__photo">
        <div class="user__photo-info" v-if="teacherInfo">
            <div class="user__role">
                {{teacherInfo.role}}
            </div>
            <b-row>
                <b-col class="user__rating">
                    <div class="user__rating-value">
                        {{teacherInfo.scopus_index}}
                    </div>
                    <div class="user__rating-hint">
                        h-индекс Scopus
                    </div>
                </b-col>
                <b-col class="user__rating">
                    <div class="user__rating-value">
                        {{teacherInfo.rinc_index}}
                    </div>
                    <div class="user__rating-hint">
                        h-индекс РИНЦ
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhotoCard",
        computed: {
            user_role() {
                return this.$store.state.user.role
            },
            teacherInfo() {
                if (this.user_role==="teacher") {
                    return {
                        role: this.$store.state.user.main_role,
                        scopus_index: this.$store.state.user.scopus_index,
                        rinc_index: this.$store.state.user.rinc_index,
                    }
                }
                return null
            },
            image() {
                return require(`/src/assets/images/${this.$store.state.user.photo}`)
            }
        }
    }
</script>

<style lang="less" scoped>
@import (less) url("/src/assets/_variables.less");
.user__photo-wrap {
    .bordered_box();
    .pad1();
    .user__photo {
        width: 230px;
        height: 230px;
    }
    .user__photo-info {
        margin-top: 16px;
        font-weight: 400;
        font-size: 12px;
        color: @black40-color;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .row {
            margin-top: 16px;

            .user__rating {
                align-items: center;
                width: fit-content;

                &:first-child {
                    border-right: @st_border;
                }

                &-value {
                    font-size: 16px;
                    color: @primary-blue-color;
                    font-weight: 700;
                }
            }
        }

    }
}
</style>
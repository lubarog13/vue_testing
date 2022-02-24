<template>
    <div class="page__container person">
        <div class="left__content">
            <div class="person__photo">
                <photo-card />
            </div>
        </div>
        <div class="right__content">
            <div class="person__info">
                <info-card/>
            </div>
        </div> 
    </div>
</template>

<script>
import InfoCard from './InfoCard.vue'
import PhotoCard from './UI/PhotoCard.vue'
    export default {
        components: { PhotoCard, InfoCard },
        name: "PersonalityPage"
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
        }

    }

</style>
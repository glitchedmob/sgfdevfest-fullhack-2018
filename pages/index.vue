<template>
    <div class="module-squares-layout">
        <div class="square icon-square logo gradient bottom-left">
            <img src="~/assets/images/logo.svg" alt="Logo">
        </div>
        <app-modal class="square icon-square gradient top-right pizza">
            <button
                slot="modal-trigger"
                slot-scope="{ open }"
                @click="open"
            >
                <img src="~/assets/images/pizza.svg" alt="">
            </button>

            <sponsers slot="modal-content"/>
        </app-modal>
        <div class="square icon-square calendar gradient top-right">
            <img src="~/assets/images/calendar.svg" alt="">
        </div>
        <div class="square icon-square download gradient top-right">
            <img src="~/assets/images/download.svg" alt="">
        </div>
        <div class="square image-square pic-1">
            <img src="~/assets/images/dub.svg" class="top-aligned-icon" alt="">
            <img src="~/assets/images/image1.jpg" alt="">
        </div>
        <div class="square image-square pic-2">
            <img src="~/assets/images/image2.jpg" alt="">
        </div>
        <div class="square image-square pic-3">
            <img src="~/assets/images/image2.jpg" alt="">
        </div>
        <div class="square image-square pic-4">
            <img src="~/assets/images/image4.jpg" alt="">
        </div>
        <div class="square image-square pic-5">
            <img src="~/assets/images/vub.svg" class="middle-aligned-icon" alt="">
            <img src="~/assets/images/image3.jpg" alt="">
        </div>
        <div class="square box-1 primary-solid"></div>
        <div class="square box-2 primary-solid"></div>
        <div class="square box-3 primary-solid"></div>
        <div class="square box-4 primary-solid"></div>
        <div class="square box-5 gradient bottom-right"></div>
        <div class="square box-6 gradient bottom-right"></div>
        <div class="square box-7 primary-solid"></div>
        <div class="square icon-square gradient bottom-right twitch">
            <img src="~/assets/images/twitch.svg" alt="">
        </div>
        <a href="#" class="square icon-square gradient bottom-right twitter">
            <img src="~/assets/images/twitter.svg" alt="">
        </a>
        <a href="#" class="square icon-square gradient bottom-right youtube">
            <img src="~/assets/images/youtube.svg" alt="">
        </a>
        <a href="#" class="square icon-square gradient bottom-right github">
            <img src="~/assets/images/github.svg" alt="">
        </a>
        <a href="#" class="square icon-square gradient bottom-right facebook">
            <img src="~/assets/images/facebook.svg" alt="">
        </a>
        <a href="#" class="square icon-square gradient bottom-right slack">
            <img src="~/assets/images/slack.svg" alt="">
        </a>
        <a href="#" class="square icon-square gradient bottom-right meetup">
            <img src="~/assets/images/meetup.svg" alt="">
        </a>
    </div>
</template>

<script>
import AppModal from '~/components/AppModal.vue';
import Sponsers from '~/components/Sponsers.vue';

export default {
    components: {
        AppModal,
        Sponsers,
    }
}
</script>

<!--<style lang="scss">-->
<!--</style>-->
`

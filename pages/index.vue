<template>
    <div>
        <app-modal>
            <button slot="modal-trigger" slot-scope="{ open }" @click="open">Test</button>
            <div slot="modal-content">
                <p>Test</p>
            </div>
        </app-modal>
    </div>
</template>

<script>
import AppModal from '~/components/AppModal.vue';

export default {
    components: {
        AppModal,
    }
}
</script>

<!--<style lang="scss">-->
<!--</style>-->

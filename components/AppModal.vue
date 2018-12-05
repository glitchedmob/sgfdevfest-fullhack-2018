<template>
    <div>
        <slot :open="open" :close="close" name="modal-trigger"/>

        <portal v-if="portalOpen" to="modal">
            <transition name="modal-animation" @after-leave="afterClose">
                <div v-show="isOpen" class="component-modal">
                    <div class="modal-overlay">
                        <div ref="modal-wrapper" class="modal-wrapper" @click="handleWrapperClick($event)">
                            <div :class="modalContainerClasses" class="modal-container container">
                                <button class="modal-close" @click="close">
                                    <slot name="modal-close">
                                        &times;
                                    </slot>
                                </button>
                                <slot :close="close" name="modal-content"/>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </portal>
    </div>
</template>

<script>
import { KEY_ESCAPE } from 'keycode-js';

export default {
    name: 'AppModal',
    props: {
        type: {
            type: String,
            default: 'content',
        },
    },
    data: () => ({
        isOpen: false,
        portalOpen: false,
    }),
    computed: {
        modalContainerClasses() {
            if (this.type === 'embed') {
                return 'modal-embed';
            }

            if (this.type === 'small') {
                return 'modal-small';
            }

            return 'modal-content';
        },
    },
    beforeDestroy() {
        window.removeEventListener('keyup', this.handleEscape);
    },
    methods: {
        close() {
            this.isOpen = false;

            window.removeEventListener('keyup', this.handleEscape);
        },
        afterClose() {
            this.portalOpen = false;
            this.$emit('close');
        },
        open(event) {
            if (event) {
                event.currentTarget.blur();
            }

            this.portalOpen = true;
            setTimeout(() => {
                this.isOpen = true;
                this.$emit('open');
            }, 0);

            window.addEventListener('keyup', this.handleEscape.bind(this));
        },
        handleEscape(event) {
            if (event.keyCode === KEY_ESCAPE) {
                this.close();
            }
        },
        handleWrapperClick(event) {
            if (event.target === this.$refs['modal-wrapper']) {
                this.close();
            }
        },
    },
};
</script>

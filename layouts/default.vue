<template>
    <div>
        <app-navigation />
        <main>
            <nuxt />
        </main>
        <app-footer />
        <no-ssr>
            <portal-target name="modal"/>
        </no-ssr>
    </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue';
import AppFooter from '~/components/AppFooter.vue';

export default {
    components: {
        AppNavigation,
        AppFooter,
    }
}
</script>

<style lang="scss">
</style>

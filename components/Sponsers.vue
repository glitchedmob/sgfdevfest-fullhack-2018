<template>
    <div class="sponsers">
        <h1 class="headline">Sponsored By:</h1>
        <div class="logos">
            <img src="~/assets/images/Pluralsight.png" alt="">
            <img src="~/assets/images/Infragistics.jpg" alt="">
            <img src="~/assets/images/Jet Brains.jpg" alt="">
            <img src="~/assets/images/OReilly.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .headline {
        padding-top: 5rem;
        @include responsive-font((
            max-size: 3.6rem,
            min-size: 2.4rem,
            lower-bound: breakpoint(x-small),
            upper-bound: breakpoint(large)
        ));

        color: color(text);
        text-align: center;
    }

    .logos {
        img {
            display: block;
            max-width: 100%;
            margin: 0 auto;
        }
    }
</style>

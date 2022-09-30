<template>
    <div class="background">
        <img :src="require(`@/Assets/Images/Story/${Image}.png`)" alt="">
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "Background",

    props: {
        Image: String
    },
})

</script>

<style lang="scss">



</style>
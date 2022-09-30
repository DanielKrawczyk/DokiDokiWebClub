<template>
    <div class="character" :id="`character-${Person.CharacterName}`">
        <template v-if="Person.Images.Head[0] === 'none'">
            <img class="main" :src="require(`@/Assets/Images/${Person.CharacterName}/${Person.Images.Body[0]}.png`)" alt="">
        </template>
        <template v-else>
            <div class="head">
                <template v-if="Person.Images.Head.length === 2">
                    <img :src="require(`@/Assets/Images/${Person.CharacterName}/${Person.Images.Head[0]}.png`)" class="head" alt="">
                    <img :src="require(`@/Assets/Images/${Person.CharacterName}/${Person.Images.Head[1]}.png`)" class="add" alt="">
                </template>
                <template v-else>
                    <img :src="require(`@/Assets/Images/${Person.CharacterName}/${Person.Images.Head[0]}.png`)" class="main" alt="">
                </template>
            </div>
            <div class="body">
                <template v-if="Person.Images.Body.length === 2">
                    <img :src="require(`@/Assets/Images/${Person.CharacterName}/${Person.Images.Body[0]}.png`)" class="left" alt="">
                    <img :src="require(`@/Assets/Images/${Person.CharacterName}/${Person.Images.Body[1]}.png`)" class="right" alt="">
                </template>
                <template v-else>
                    <img :src="require(`@/Assets/Images/${Person.CharacterName}/${Person.Images.Body[0]}.png`)" class="main" alt="">
                </template>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "Person",

    props: {
        Person: Object
    },

    updated() {
        this.Person.ResetPosition();
        this.Person.CheckPosition();
        this.Person.CheckEffects();
    }
})  

</script>

<style lang="scss">



</style>
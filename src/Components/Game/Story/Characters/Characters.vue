<template>
    <div class="characters">
        <template v-for="item in CharactersData">
            <Person :key="item.name" :Person="ParseToCharacter(item)" />
        </template>
    </div>
</template>

<script lang="ts">
import Person from './Character/Person.vue';
import Character from '@/Engine/Character/Character';
import Vue from 'vue';
import ICharacterImages from '@/Model/Engine/Character/ICharacterImages';

export default Vue.extend({
    name: "Characters",

    components: {
        Person
    },

    props: {
        CharactersData: Array
    },

    methods: {
        ParseToCharacter(item: any): Character {
            return new Character(item.name, item.effects, item.position, this.ParseToCharacterImages(item.images));
        },
        ParseToCharacterImages(item: any): ICharacterImages {
            return { Head: item.head, Body: item.body };
        }
    }
})

</script>

<style lang="scss">



</style>
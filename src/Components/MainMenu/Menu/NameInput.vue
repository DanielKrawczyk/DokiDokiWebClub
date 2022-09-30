<template>
    <div class="name" id="name">
        <div class="name-frame">
            <img src="@/Assets/Images/UI/frame.png" alt="">

            <div class="name-frame_input">
                <p>
                    Write your name:
                </p>

                <input v-model="Name" type="text" id="new-name" autocomplete="off" />

                <p
                    class="ok"
                    @mouseover="PlayHoverSound()"
                    @click="ClickOk()"
                >
                    Ok.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Click, Hover } from '@/Assets/Sounds';

export default Vue.extend({
    name: "NameInput",

    props: {
        OnNewGame: Function,
    },

    data() {
        return {
            Name: ""
        }
    },

    methods: {
        PlayHoverSound() {
            Hover.Play();
        },

        ClickOk() {
            Click.Play();
            if (this.Name.length < 3) return;
            this.SaveName();
        },

        SaveName() {
            this.$store.commit("ChangeName", this.Name);
            localStorage.setItem("dokidoki-playername", JSON.stringify(this.Name));
            this.OnNewGame();
        },
    }
})

</script>

<style lang="scss">



</style>
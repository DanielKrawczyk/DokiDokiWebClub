<template>
    <div class="menu">
        <div class="menu-background" id="menu-background">
            <img src="@/Assets/Images/MainMenu/main_menu.png" alt="" />
        </div>
        <div class="menu-logo" id="menu-logo">
            <img src="@/Assets/Images/MainMenu/logo.png" alt="" />
        </div>
        <div class="menu-list">
            <p
                @mouseover="(item) => MenuButtonsHover(item)"
                @click="NewGame()"
            >
                New Game
            </p>
            <p
                @mouseover="(item) => MenuButtonsHover(item)"
                @click="LoadGame()"
            >
                Load Game
            </p>
            <p
                @mouseover="(item) => MenuButtonsHover(item)"
                @click="Settings()"
            >
                Settings
            </p>
            <p
                @mouseover="(item) => MenuButtonsHover(item)"
                @click="Help()"
            >
                Help
            </p>
            <p
                @mouseover="(item) => MenuButtonsHover(item)"
                @click="Quit()"
            >
                Quit
            </p>
            <p
                v-if="Settings.AllowTestingArea"
                @mouseover="(item) => MenuButtonsHover(item)"
                @click="Test()"
            >
                Test Area
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppSettings from '@/AppSettings';
import { Click, Hover } from '@/Assets/Sounds';
import { CloseWindow } from '@/Handlers/HandleClose';
import { GetID } from '@/Handlers/HandleDOM';

export default Vue.extend({
    name: "Menu",

    props: {
        OnNewGame: Function,
        OnHelp: Function,
        OnTest: Function,
    },

    data() {
        return {
            AppSettings: new AppSettings()
        }
    },

    methods: {
        MenuButtonsHover(item: any) {
            Hover.Play();
        },
        
        NewGame() {
            Click.Play();
            if ( this.$store.state.PlayerName === "" ) return ( GetID("name") as HTMLElement ).classList.add('active')
            this.OnNewGame();
        },

        LoadGame() {
            Click.Play();
            window.alert("In development");
        },

        Settings() {
            Click.Play();
            window.alert("In development");
        },

        Help() {
            Click.Play();
            this.OnHelp();
        },

        Quit() {
            Click.Play();
            CloseWindow();
        },

        Test() {
            Click.Play();
            this.OnTest();
        }
    }
})

</script>

<style lang="scss">



</style>
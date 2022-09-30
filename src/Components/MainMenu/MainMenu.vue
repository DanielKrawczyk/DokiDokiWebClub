<template>
    <div class="main-menu" id="main-menu">
        <audio 
            id="mainmenu-audio" 
            src="@/Assets/Audio/1.ogg"
            autoplay
            @ended="(item) => AudioFinished(item)"
        ></audio>

        <Logo />
        <Warning />
        <div class="main-menu_final" id="main-menu_final">
            <Background />
            <Menu 
                :OnNewGame="OnStart"
                :OnHelp="OnHelp"
                :OnTest="OnTest"
            />
            <Characters />
            <NameInput :OnNewGame="OnStart" />
        </div>
    </div>
</template>

<script lang="ts">
import { GetID } from '@/Handlers/HandleDOM';
import Vue from 'vue';
import Logo from "./BeforeMenu/Logo.vue";
import Warning from "./BeforeMenu/Warning.vue";
import Menu from './Menu/Menu.vue';
import NameInput from './Menu/NameInput.vue';
import Characters from './Background/Characters.vue';
import Background from './Background/Background.vue';

export default Vue.extend({
    name: "MainMenu",

    components: {
        Logo,
        Warning,
        Background,
        Menu,
        Characters,
        NameInput
    },

    props: {
        OnStart: Function,
        OnHelp: Function,
        OnTest: Function,
    },

    mounted() {
        this.LoadBeforeMainContext();
    },

    methods: {
        LoadBeforeMainContext(): void {
            const Logo: DOMTokenList = GetID( "logo" ).classList,
                Warning: DOMTokenList = GetID( "warning" ).classList,
                Main: DOMTokenList = GetID( "main-menu_final" ).classList;
            
            setTimeout(() => {
                Logo.add( "active" );

                setTimeout(() => {
                    Logo.remove( "active" );

                    setTimeout(() => {
                        Warning.add( "active" );
                    }, 500);

                    setTimeout(() => {
                        Warning.remove( "active" );

                        setTimeout(() => {
                            Main.add( "active" );
                        }, 500);

                    }, 3000);

                }, 3000);

            }, 500);
        },

        AudioFinished(item: any): void {
            const elem = item.path[0];
            elem.currentTime = 22.1;
            elem.play();
        }
    }   
})

</script>

<style lang="scss">



</style>
<template>
    <div class="story" id="story">
        <Background :Image="Data.Value.Background" />
        <Characters :CharactersData="Data.Value.Characters" />
        <Storybar 
            :Person="Data.Value.Person"
            :Text="Data.Value.Text"
            :OnNext="Next"
            :OnPoem="WritePoem"
            :Hide="HideStorybar"
            :key="Data.Iterator"
        />
        <template v-if="Data.Value.Music !== ''">
            <audio :src="require(`@/Assets/Audio/${Data.Value.Music}.ogg`)" autoplay loop></audio>
        </template>
        <template v-if="Settings.DevelopmentMode">
            <Debug :Stage="Data.Iterator" :Proceed="(x) => ProceedTo(x)" :BackToMenu="BackToMenu" />
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Storybar from './Story/Storybar/Storybar.vue';
import Background from './Story/Background/Background.vue';
import Characters from './Story/Characters/Characters.vue';
import AppSettings from '@/AppSettings';
import Debug from './Story/Development/Debug.vue';
import Story from '@/Engine/Game/Story/Story';
import LinkedList from '@/Engine/Features/LinkedList/LinkedList';
import Anim from '@/Engine/Game/Animations/Anim';

export default Vue.extend({
    name: "Game",

    components: {
        Storybar,
        Background,
        Characters,
        Debug,
    },

    props: [
        'DataArray',
        'BackToMenu',
        'PlayMusic',
        'WritePoem',
    ],

    data() {
        return {
            Data: new LinkedList<Story>(this.DataArray),
            Settings: new AppSettings(),
            HideStorybar: true
        }
    },
    
    mounted() {
        setTimeout(() => {
            Anim.BlackscreenOff();

            setTimeout(() => {
                this.HideStorybar = false;
            }, 1000);

        }, 1000);
    },

    methods: {
        FadeInAndOutBlackscreen(): void {
            const storyElement = "story";
            const storybarElement = "storybar";
            
            Anim.Hide(storyElement);

            setTimeout(() => {

                Anim.BlackscreenOn();
                Anim.FadeOut(storyElement);

                setTimeout(() => {

                    this.Data.Move();
                    Anim.FadeIn(storyElement);

                    setTimeout(() => {

                        setTimeout(() => {
                            Anim.BlackscreenOff();
                        }, 500);

                        setTimeout(() => {
                            Anim.Show(storybarElement);
                        }, 1000);

                    }, 1000);

                }, 500);

            }, 300);
        },

        Next() {
            if (this.Data.Next === null) return window.alert("Rest of the story is under development")
            this.Data.Move();
            this.SaveBackstory();
        },

        ProceedTo(Stage: any) {
            this.Data.Iterator = Stage;
        },

        SaveBackstory() {
            const backstory = this.Data.GetPrevious(10);
        }
    }
})

</script>
<template>
    <div class="poem" id="poem">
        <div class="poem-background">
            <img src="@/Assets/Images/Story/notebook.png" alt="">
        </div>
        <div class="poem-stickers">
            <div class="poem-stickers_sticker">
                <img 
                    v-if="Monika !== 0"
                    id="sticker-monika"
                    :class="Monika === 2 ? 'jump' : ''"
                    :src="require(`@/Assets/Images/Stickers/m_sticker_${Monika}.png`)" 
                    alt=""
                />
            </div>
            <div class="poem-stickers_sticker">
                <img 
                    id="sticker-natsuki"
                    :class="Natsuki === 2 ? 'jump' : ''"
                    :src="require(`@/Assets/Images/Stickers/n_sticker_${Natsuki}.png`)" 
                    alt=""
                />
            </div>
            <div class="poem-stickers_sticker">
                <img 
                    id="sticker-sayori"
                    :class="Sayori === 2 ? 'jump' : ''"
                    :src="require(`@/Assets/Images/Stickers/s_sticker_${Sayori}.png`)" 
                    alt=""
                />
            </div>
            <div class="poem-stickers_sticker">
                <img 
                    id="sticker-yuri"
                    :class="Yuri === 2 ? 'jump' : ''"
                    :src="require(`@/Assets/Images/Stickers/y_sticker_${Yuri}.png`)" 
                    alt=""
                />
            </div>
        </div>

        <div class="poem-words">
            <div class="poem-words_list">
                <template v-for="item in testWords">
                    <div 
                        :key="item.word"
                        class="poem-words_list_item"
                    >
                        <p @click="animateSticker(item.person)">
                            {{ item.word }}
                        </p>
                    </div>
                </template>
            </div>
        </div>
        <audio src="@/Assets/Audio/4.ogg" autoplay loop></audio>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RNG from '@/Engine/Features/RNG/Random';

export default Vue.extend({
    name: "Poem",

    data() {
        return {
            Monika: 0,
            Natsuki: 1,
            Sayori: 1,
            Yuri: 1,

            testWords: [
                { word: "Adventure", person: "sayori" },
                { word: "Sugar", person: "natsuki" },
                { word: "Landscape", person: "yuri" },
                { word: "Melody", person: "natsuki" },
                { word: "Romance", person: "sayori" },
                { word: "Vacation", person: "sayori" },
                { word: "Whisper", person: "natsuki" },
                { word: "Anime", person: "natsuki" },
                { word: "Insight", person: "yuri" },
                { word: "Melancholy", person: "yuri" },
            ]
        }
    },

    mounted() {
        window.alert("This part of Doki Doki is under hard development and it's not finished yet. If you want to quit to main menu simply reload the page ;)")
    },

    methods: {
        animateSticker(id: string) {
            const timeout = 700;

            switch(id) {
                case 'monika':
                    this.Monika = 2;

                    setTimeout(() => {
                        this.Monika = 1;
                    }, timeout);
                    break;
                case 'natsuki':
                    this.Natsuki = 2;

                    setTimeout(() => {
                        this.Natsuki = 1;
                    }, timeout);
                    break;
                case 'sayori': 
                    this.Sayori = 2;

                    setTimeout(() => {
                        this.Sayori = 1;
                    }, timeout);
                    break;
                case 'yuri':
                    this.Yuri = 2;

                    setTimeout(() => {
                        this.Yuri = 1;
                    }, timeout);
            }
        },

        GetRandomStickerAnimation() {
            const random = RNG.Random(1, 5);
        },
    }
})

</script>

<style lang="scss">



</style>
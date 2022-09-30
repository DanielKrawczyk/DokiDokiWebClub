<template>
  <div class="game">
    <template v-if="checkScreenResolution()">
      <NoSupport />
    </template>
    <template v-else>
      <template v-if="GameState === 0">
        <MainWarning :ToMainMenu="FadeAfterWarning" />
      </template>
      <template v-if="GameState === 1">
        <MainMenu :OnHelp="OnHelp" :OnStart="OnStart" :OnTest="OnTest" />
      </template>
      <template v-if="GameState === 2">
        <Game :DataArray="PrepareData(Story)" :BackToMenu="GoBackToMenu" :PlayMusic="AudioPath" :WritePoem="RedirectToPoem" />
      </template>
      <template v-if="GameState === 3">
        <Game :DataArray="PrepareData(About)" :BackToMenu="GoBackToMenu" :PlayMusic="AudioPath" />
      </template>
      <template v-if="GameState === 4">
        <Game :DataArray="PrepareData(Test)" :BackToMenu="GoBackToMenu" :PlayMusic="AudioPath" />
      </template>
      <template v-if="GameState === 5">
        <Poem />
      </template>
    </template>
    <div class="blackscreen"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppSettings from '@/AppSettings';
import Anim from '@/Engine/Game/Animations/Anim';

import StoryJSON from '@/Data/story.json';
import AboutJSON from '@/Data/about.json';
import TestJSON from '@/Data/test.json';

import NoSupport from '@/NoSupport.vue';
import MainWarning from '@/Components/Warning/Warning.vue';
import MainMenu from "@/Components/MainMenu/MainMenu.vue";
import Game from "@/Components/Game/Game.vue";
import Story from './Engine/Game/Story/Story';
import Poem from '@/Components/Game/Poem/Poem.vue';

const ELEMENTS = {
  STORYBAR: "storybar",
  WARNING: "warn",
  BUTTON: "button"
}

export default Vue.extend({
  name: "App",

  components: {
    NoSupport,
    MainWarning,
    MainMenu,
    Game,
    Poem
  },

  data() {
    return {
      Loading: true,
      Settings: new AppSettings(),
      GameState: 0,
      AudioPath: "",
      Story: StoryJSON,
      About: AboutJSON,
      Test: TestJSON,

      Assets: {
        Images: [],
        Audio: []
      }
    }
  },

  mounted() {
    // Should be removed after creating Loading screen => DDWC-1
    this.DataLoaded();
  },

  methods: {

    checkScreenResolution(): boolean {
      if (window.screen.width < 1024 && !this.Settings.AllowSmallScreens)
        return true;
      else
        return false;
    },

    StartNewGame( Stage = 2 ): void {
      Anim.BlackscreenOn();
      Anim.FadeOut("main-menu");

      setTimeout(() => {
        this.GameState = Stage;
      }, 3000);
    },

    FadeAfterWarning(): void {
      Anim.Hide(ELEMENTS.STORYBAR);
      Anim.Hide(ELEMENTS.WARNING);
      Anim.Hide(ELEMENTS.BUTTON);

      setTimeout(() => {
        this.GameState = 1;
      }, 3000);
    },

    GoBackToMenu(): void {
      Anim.BlackscreenOn();

      setTimeout(() => {
        this.GameState = 1;
        Anim.BlackscreenOff();
      }, 500);
    },

    RedirectToPoem(): void {
      this.GameState = 5;
    },

    OnStart() {
      this.StartNewGame();
    },
    OnHelp() {
      this.StartNewGame(3);
    },
    OnTest() {
      this.StartNewGame(4);
    },
    DataLoaded() {
      if (this.$store.state.PlayerName === "")
        this.GameState = 0;
      else 
        this.GameState = 1;
    },

    PrepareData(DataJSON: any) {
      return DataJSON.map((item: any) => {
        return new Story(item);
      })
    },

  }
})

</script>

<style lang="scss">

@import '/SCSS/main';

</style>
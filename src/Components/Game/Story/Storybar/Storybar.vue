<template>
  <div :class="`storybar ${Hide ? 'hide':''}`" 
        id="storybar"
        @click="ProceedWhenDone()"
        @contextmenu="(e) => RightClickStorybar(e)"
  >
    <div class="storybar-frame">

      <img src="@/Assets/Images/Story/textbox.png" class="frame" alt="" />
      <template v-if="Person !== ''">
        <img src="@/Assets/Images/Story/namebox.png" class="name" alt="" />
      </template>
      <img src="@/Assets/Images/Story/ctc.png" class="arrow" id="arrow" alt="" />

      <div class="storybar-frame_person">
        <p>
          {{ PlayerRegExp.test(Person) ? PlayerName : Person }}
        </p>
      </div>
      <div class="storybar-frame_text" id="write-text">

      </div>
      <div class="storybar-frame_options">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Writer from '@/Engine/Features/Writer/Writer';
import { GetID } from '@/Handlers/HandleDOM';
import Anim from '@/Engine/Game/Animations/Anim';
const ELEMENTS = {
  STORYBAR: "storybar"
}

export default Vue.extend({
  name: "Storybar",

  props: {
    Person: String,
    Text: String,
    OnNext: Function,
    OnPoem: Function,
    Hide: Boolean,
  },

  data() {
    return {
      PlayerRegExp: /\$player/,
      PlayerName: this.$store.state.PlayerName,
      Writer: new Writer(),
    }
  },

  mounted() {
    this.Writer.SetNewText(this.CheckForPlayerName());

    Anim.Inactive("arrow");

    if (this.Text === "fade-black") {
      this.HandleFadeBlack();
      return;

    } else if (this.Text === "location-reload") {
      this.HandleLocationReload();
      return;

    } else if (this.Text === "poem") {
      this.OnPoem();
    }

    this.SpaceToProceed();
    this.Writer.Write("write-text");
  },

  methods: {
    ProceedWhenDone(): void {
      if (GetID("storybar").classList.contains("hide")) return;
      if (this.Writer.IsDone)
        this.OnNext();
      else 
        this.Writer.IsDone = true;
    },

    SpaceToProceed(): void {
      document.body.onkeyup = (key: KeyboardEvent) => {
        if (key.keyCode === 32) this.ProceedWhenDone();
      }
    },

    RightClickStorybar(element: any): void {
      element.preventDefault();
      const EStorybar = GetID("storybar").classList;

      if (EStorybar.contains("hide"))
        EStorybar.remove("hide");
      else
        EStorybar.add("hide");
    },

    HandleFadeBlack(): void {
      this.$store.commit("BlackScreenState", true);
      Anim.Hide(ELEMENTS.STORYBAR);

      setTimeout(() => {
        Anim.BlackscreenOn();

        setTimeout(() => {
          this.OnNext();

          setTimeout(() => {
            Anim.BlackscreenOff();

            setTimeout(() => {
              Anim.Show(ELEMENTS.STORYBAR);
            }, 1000);
          }, 1000);

        }, 500);
      }, 200);
      this.$store.commit("BlackScreenState", false);
    },

    HandleLocationReload(): void {
      window.location.reload();
    },

    CheckForPlayerName(): Array<string> {
      let FilteredText = [];
      if (this.Person !== "") FilteredText.push('"');
      const text = this.Text.replace(this.PlayerRegExp, this.PlayerName);

      for (let i = 0; i < text.length; i++)
        FilteredText.push(text[i]);
      
      if (this.Person !== "") FilteredText.push('"');
      return FilteredText;
    }
  }
})

</script>

<style lang="scss">

</style>
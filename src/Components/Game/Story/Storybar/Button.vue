<template>
  <div class="button" id="button">
    <div class="button-btn">
      <template v-if="ButtonState === 0">
        <img src="@/Assets/Images/UI/choice_idle_background.png" alt="">
      </template>
      <template v-else-if="ButtonState === 1">
        <img src="@/Assets/Images/UI/choice_hover_background.png" alt="">
      </template>
    </div>
    <div class="button-text"
        @mouseover="OnMouseOver()"
        @mouseleave="OnMouseOut()"
        @click="OnClick()"
    >
      {{ ButtonText }}
    </div>
  </div>  
</template>

<script lang="ts">
import Vue from 'vue';
import { Hover, Click } from '@/Assets/Sounds';

export default Vue.extend({
  name: "Button",

  props: {
     ButtonText: String,
     OnNext: Function,
  },

  data() {
    return {
      ButtonState: 0
    }
  },

  methods: {

    OnMouseOver() {
      Hover.Play();
      this.ButtonState = 1;
    },

    OnMouseOut() {
      this.ButtonState = 0;
    },

    OnClick() {
      Click.Play();
      this.OnNext();
    }

  }
})

</script>

<style lang="scss">



</style>
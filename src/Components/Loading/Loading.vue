<template>
  <div class="loading">
    <div class="loading-background">
      <img src="@/Assets/Images/Story/warning.png" alt="">
    </div>
    <div class="loading-button" v-if="!Loading">
      <Button :ButtonText="'Play!'" :OnNext="OnNext" />
    </div>
    <div class="loading-statusbar">
      <div class="loading-statusbar_status">
        <img id="loading-status" src="@/Assets/Images/UI/choice_idle_background.png" alt="" />
      </div>
      <div class="loading-statusbar_bar">
        <img src="@/Assets/Images/UI/choice_hover_background.png" alt="" />
      </div>
      <div class="loading-statusbar_percent">
        <p id="loading-percent">
          0%
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LoadingAssets from '@/Handlers/HandleLoading';
import Button from '@/Components/Game/Story/Storybar/Button.vue';

export default Vue.extend({
  name: "Loading",

  components: {
    Button
  },

  props: {
    OnNext: Function,
  },

  data() {
    return {
      Loading: true,
    }
  },

  mounted() {
    this.LoadData();
  },

  methods: {
    
    LoadData() {
      //new LoadingAssets().LoadAssets();

      this.Loading = false;
    }
  }

})

</script>

<style lang="scss">


</style>
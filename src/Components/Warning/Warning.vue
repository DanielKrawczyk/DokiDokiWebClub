<template>
  <div class="story" id="main-warning">
    <img src="@/Assets/Images/Warning/warning2.png" class="second" alt="" />
    <img src="@/Assets/Images/Warning/warning.png" id="warn" class="first" alt="" />

    <template v-for="button in Data.Value.btn">
      <Button :key="button.text" :ButtonText="button.text" :OnNext="ToMainMenu" />
    </template>

    <Storybar :key="Data.Iterator" v-bind:Person="''" v-bind:Text="Data.Value.text" :OnNext="OnNext" :Hide="HideStorybar" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WarningJSON from '@/Data/warning.json';
import LinkedList from '@/Engine/Features/LinkedList/LinkedList';
import IWarningJSON from '@/Model/Data/IWarningJSON';
import AppSettings from '@/AppSettings';
import Button from '../Game/Story/Storybar/Button.vue';
import Storybar from '../Game/Story/Storybar/Storybar.vue';

export default Vue.extend({
  name: "MainWarning",

  props: {
    ToMainMenu: Function,
  },

  components: {
    Button,
    Storybar
  },

  data() {
    return {
      Data: new LinkedList<IWarningJSON>(WarningJSON),
      Settings: new AppSettings(),
      HideStorybar: true
    }
  },

  mounted() {
    this.HideStorybar = false;
  },

  methods: {
    OnNext(): void {
      if (this.Data.Next === null) return;
      this.Data.Move();
    }
  }
})

</script>

<style lang="scss">



</style>
<template>
  <div id="noSupport">
    <div class="message">
      This game does not support screen resolution less than 1024px!
    </div>
  </div>
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({
  name: "NoSupport"
})

</script>

<style lang="scss" scoped>
@import '/SCSS/config';

#noSupport {
    .message {
        position: absolute;
        z-index: 2;
        width: 100vw;
        margin-top: 40vh;
        padding: 0.5rem 1rem;
        background-color: rgba(100, 100, 100, 0.4);
        text-align: center;

        color: #fff;
        font-size: 40px;
        font-family: $font-story;
    }
}
</style>
<template>
    <div class="debug">
        <p>
            Current stage: {{ Stage }}
        </p>
        <input type="number" v-model="State">
        <button @click="ProceedTo()">
            Proceed.
        </button>
        <button @click="ToMenu()">
            Back to menu.
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "Debug",

    props: {
        Stage: Number,
        Proceed: Function,
        BackToMenu: Function,
    },

    data() {
        return {
            State: this.Stage
        }
    },

    methods: {
        ProceedTo() {
            this.Proceed(this.State);
        },
        ToMenu() {
            this.BackToMenu();
        }
    }
})

</script>
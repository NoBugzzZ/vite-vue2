<template>
  <div class="sfc">
    {{ this.title }}
    <button @click="reverse">click</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "sfc",
    };
  },
  methods: {
    reverse() {
      this.title = this.title.split("").reverse().join("");
    },
  },
};
</script>
<style>
@import "@/styles/common.css";
/* .sfc {
  background-color: aliceblue;
} */
</style>

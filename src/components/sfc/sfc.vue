<template>
  <div class="sfc border">
    {{ this.title }}
    <button @click="reverse">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'sfc'
    }
  },
  methods: {
    reverse() {
      this.title = this.title.split('').reverse().join('')
    }
  }
}
</script>
<style lang="less">
@import url('./sfc.less');
// @width:10px;
// .border{
//     border: @width dashed blue;
// }
</style>
<style>
@import url('@/styles/common.css');
/* .sfc {
  background-color: aliceblue;
} */
</style>

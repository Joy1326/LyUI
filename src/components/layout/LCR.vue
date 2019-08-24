<template>
  <div class="ly-lcr-wrap" :style="fitStyle">
    <div class="ly-lcr-l" :style="fitStyle">
      <slot name="left"></slot>
    </div>
    <div class="ly-lcr-r" :style="fitStyle">
      <slot name="right"></slot>
    </div>
    <div class="ly-lcr-c" :style="fitStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    fit:Boolean
  },
  computed:{
    fitStyle(){
      return {
        height:this.fit?'100%':'auto'
      }
    }
  }
}
</script>

<style scoped>
/* .ly-lcr-wrap {
  height: 100%;
} */
.ly-lcr-l {
  float: left;
  overflow: hidden;
}
.ly-lcr-r {
  float: right;
  overflow: hidden;
}
.ly-lcr-c {
  overflow: auto;
}
/* .ly-lcr-l,
.ly-lcr-r,
.ly-lcr-c {
  height: 100%;
} */
.ly-lcr-l,
.ly-lcr-r {
    background: linear-gradient(45deg, #FFEB3B, transparent);
}
</style>


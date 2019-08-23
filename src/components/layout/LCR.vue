<template>
  <div class="ly-lcr-wrap">
    <div class="ly-lcr-l">
      <slot name="left"></slot>
    </div>
    <div class="ly-lcr-r">
      <slot name="right"></slot>
    </div>
    <div class="ly-lcr-c">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.ly-lcr-wrap {
  height: 100%;
}
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
.ly-lcr-l,
.ly-lcr-r,
.ly-lcr-c {
  height: 100%;
}
.ly-lcr-l,
.ly-lcr-r {
    background: linear-gradient(45deg, #FFEB3B, transparent);
}
</style>


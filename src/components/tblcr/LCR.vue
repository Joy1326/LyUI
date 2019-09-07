<template>
  <div class="ly-tb-lcr-wrap">
    <div class="ly-tb-cell">
      <slot name="left"></slot>
    </div>
    <div class="ly-tb-cell">
      <slot></slot>
    </div>
    <div class="ly-tb-cell">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<style scoped>
.ly-tb-lcr-wrap {
  display: table;
  table-layout: fixed;
}
.ly-tb-cell {
  display: table-cell;
  vertical-align: middle;
}
</style>


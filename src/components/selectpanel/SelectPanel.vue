<template>
  <div class="ly-select-panel-wrap">
    <div class="ly-select-panel">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.ly-select-panel-wrap {
  display: inline-block;
  position: absolute;
  overflow: auto;
  border-radius: 4px;
  background: white;
  z-index: 99;
  box-shadow: 0px 0px 5px 0px #b6b9bb;

}
</style>

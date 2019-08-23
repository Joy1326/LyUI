<template>
  <div class="ly-layout-wrap">
    <div class="ly-layout-header ly-table-layout-row">
      <div>
        <slot name="header"></slot>
      </div>
    </div>
    <div class="ly-layout-body ly-table-layout-row">
      <div class="ly-layout-center-wrap">
        <div class="ly-layout-center">
          <LCR>
            <slot
              slot="left"
              name="left"
            ></slot>
            <slot></slot>
            <slot
              slot="right"
              name="right"
            ></slot>
          </LCR>
        </div>
      </div>
    </div>
    <div class="ly-layout-footer ly-table-layout-row">
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import LCR from "./LCR.vue";
export default {
  components: { LCR }
};
</script>

<style scoped>
.ly-layout-wrap {
  display: table;
  width: 100%;
  table-layout: fixed;
  height: 100%;
      background: linear-gradient(45deg, #00BCD4, transparent);
}
.ly-table-layout-row {
  display: table-row;
}
.ly-layout-body {
  height: 100%;
}
.ly-layout-center-wrap {
  height: 100%;
  overflow: hidden;
  display: table-cell;
}
.ly-layout-center {
  height: 100%;
  overflow: auto;
}
</style>



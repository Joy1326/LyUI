<template>
  <div
    class="ly-layout-wrap"
    :style="fitStyle"
  >
    <div class="ly-layout-header ly-table-layout-row">
      <div>
        <slot name="header"></slot>
      </div>
    </div>
    <div
      class="ly-layout-body ly-table-layout-row"
      :style="fitStyle"
    >
      <div
        class="ly-layout-center-wrap"
        :style="fitStyle"
      >
        <div
          class="ly-layout-center"
          :style="fitStyle"
        >
          <LCR :fit="fit">
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
import LCR from "../lcr";
export default {
  components: { LCR },
  props: {
    fit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fitStyle() {
      return {
        height: this.fit ? "100%" : "auto"
      };
    }
  }
};
</script>

<style scoped>
.ly-layout-wrap {
  display: table;
  width: 100%;
  table-layout: fixed;
  background: linear-gradient(45deg, #00bcd4, transparent);
}
.ly-table-layout-row {
  display: table-row;
}
.ly-layout-center-wrap {
  overflow: hidden;
  display: table-cell;
}
.ly-layout-center {
  overflow: auto;
}
</style>



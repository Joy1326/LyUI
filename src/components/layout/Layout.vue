<template>
  <div
    :style="wrapStyle"
    ref="wrapBox"
  >
    <div ref="header">
      <slot name="header"></slot>
    </div>
    <div
      :style="contentWrapStyle"
      class="ly-content-wrap"
    >
      <slot name="left"></slot>
      <slot></slot>
      <slot name="right"></slot>
    </div>
    <div ref="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      wrapHeight: 0,
      headerHeight: 0,
      footerHeight: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initFn();
    });
  },
  computed: {
    wrapStyle() {
      return {
        height: this.fit ? "100%" : "auto",
        overflow:this.fit?'hidden':'auto'
      };
    },
    contentWrapStyle() {
      return {
        height: this.fit
          ? this.wrapHeight - this.headerHeight - this.footerHeight + "px"
          : "auto"
      };
    }
  },
  methods: {
    getRefWrapBox() {
      return this.$refs.wrapBox;
    },
    getWrapBoxHeight() {
      return this.getRefWrapBox().offsetHeight;
    },
    getRefHeader() {
      return this.$refs.header;
    },
    getHeaderHeight() {
      return this.getRefHeader().offsetHeight;
    },
    getRefFooter() {
      return this.$refs.footer;
    },
    getFooterHeight() {
      return this.getRefFooter().offsetHeight;
    },
    initFn() {
      this.wrapHeight = this.getWrapBoxHeight();
      this.headerHeight = this.getHeaderHeight();
      this.footerHeight = this.getFooterHeight();
    }
  }
};
</script>
<style scoped>
.ly-content-wrap {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.ly-content-wrap > div {
  display: table-cell;
}
</style>



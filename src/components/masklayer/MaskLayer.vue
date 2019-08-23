<template>
  <CenterBox
    class="ly-masklayer-wrap"
    @click.native="maskHandler"
    :style="wrapStyle"
  >
    <slot></slot>
  </CenterBox>
</template>
<script>
import CenterBox from "../centerbox";
export default {
  components: { CenterBox },
  props: {
    modal: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [Number, String],
      default: "auto"
    },
    maskClosable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      zIndexLevel: this.zIndex
    };
  },
  computed: {
    wrapStyle(pos) {
      return {
        zIndex: this.zIndexLevel
      };
    }
  },
  methods: {
    maskHandler() {
      if (this.maskClosable) {
        if (this.$listeners.onMaskLayerClick) {
          this.$emit("onMaskLayerClick");
          return;
        }
        this.zIndexLevel = -999;
      }
    }
  }
};
</script>
<style scoped>
.ly-masklayer-wrap {
  background-color: #7979799e;;
}
</style>


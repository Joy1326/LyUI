<template>
  <div
    class="ly-dialog-wrap"
    v-show="showDlg"
  >
    <MaskLayer
      class="ly-dialog-masklayer-wrap"
      :style="positionStyle"
      :modal="modal"
      :maskClosable="maskClosable"
      @onMaskLayerClick="onMaskLayerClick"
    >
      <div
        ref="dialogTag"
        class="ly-dialog-tag"
        :style="tagStyle"
      >
      </div>
    </MaskLayer>
    <Resizable
      :left="sLeft"
      :top="sTop"
      :style="{...positionStyle}"
      :width="width"
      :height="height"
      ref="resizableBox"
    >
      <div class="ly-dialog-body">
        <slot></slot>
      </div>
    </Resizable>
  </div>
</template>
<script>
import CenterBox from "../centerbox";
import Resizable from "../resizable";
import MaskLayer from "../masklayer";

export default {
  components: { CenterBox, Resizable, MaskLayer },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    scopePos: {
      //absolute,fixed,relative
      type: String,
      default: "fixed"
    },
    width: {
      type: [String],
      default: "auto"
    },
    height: {
      type: [String],
      default: "auto"
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      sLeft: "auto",
      sTop: "auto",
      tagWidth: "auto",
      tagHeight: "auto",
      showDlg: this.value
    };
  },
  watch: {
    value(isShow) {
      this.showDlg = isShow;
      this.initOptFn();
    }
  },
  computed: {
    positionStyle() {
      return {
        position: this.scopePos
      };
    },
    tagStyle() {
      return {
        width: this.tagWidth,
        height: this.tagHeight
      };
    }
  },
  mounted() {
    this.initOptFn();
  },
  methods: {
    getRefDialogTag() {
      return this.$refs.dialogTag;
    },
    getRefResizableBox() {
      return this.$refs.resizableBox;
    },
    getTagOffset() {
      let ref = this.getRefDialogTag();
      return {
        offsetLeft: ref.offsetLeft,
        offsetTop: ref.offsetTop
      };
    },
    getResizableBoxOffset() {
      try {
        let ref = this.getRefResizableBox().$el;
        return {
          offsetWidth: ref.offsetWidth,
          offsetHeight: ref.offsetHeight
        };
      } catch (error) {
        console.error(error);
      }
    },
    initOptFn() {
      this.$nextTick(() => {
        try {
          let resizeBoxOffset = this.getResizableBoxOffset();

          this.tagWidth = resizeBoxOffset.offsetWidth + "px";
          this.tagHeight = resizeBoxOffset.offsetHeight + "px";

          this.$nextTick(() => {
            let offset = this.getTagOffset();
            this.sLeft = offset.offsetLeft + "px";
            this.sTop = offset.offsetTop + "px";
          });
        } catch (error) {
          console.error(error);
        }
      });
    },
    close() {
      this.showDlg = false;
      this.$emit("input", this.showDlg);
    },
    onMaskLayerClick() {
      this.close();
    }
  }
};
</script>
<style scoped>
.ly-dialog-wrap {
  height: 0;
  width: 0;
}
.ly-dialog-tag {
  position: relative;
  background-color: #d6d6d600;
  z-index: -99;
}
.ly-dialog-body {
  overflow: auto;
  height: 100%;
  width: 100%;
}
</style>



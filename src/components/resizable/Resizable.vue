<template>
  <div
    ref="resizableWrap"
    class="ly-resizable-wrap"
    :style="wrapStyle"
  >
    <slot></slot>

    <Corner
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveLeftRight"
      style="left:0;bottom:0;height:100%;cursor:ew-resize;"
    />
    <Corner
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveTopBottom"
      style="left:0;top:0;right:0;width:100%;cursor:ns-resize;"
    />
    <Corner
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveRightLeft"
      style="right:0;bottom:0;height:100%;cursor:ew-resize;"
    />
    <Corner
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveBottomTop"
      style="left:0;right:0;bottom:0;width:100%;cursor:ns-resize;"
    />
    <!-- 点 -->
    <Corner
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveTopLeft"
      style="left:0;top:0;cursor:nwse-resize;"
    />
    <Corner
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveTopRight"
      style="right:0;top:0;cursor:nesw-resize;"
    />
    <Corner
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveBottomRight"
      style="right:0;bottom:0;cursor:nwse-resize;"
    />
    <Corner
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveBottomLeft"
      style="bottom:0;cursor:nesw-resize;"
    />

  </div>
</template>
<script>
import Corner from "./Corner.vue";
export default {
  props: {
    width: {
      type: [String],
      default: "auto"
    },
    height: {
      type: [String],
      default: "auto"
    },
    left: {
      type: [String],
      default: "auto"
    },
    top: {
      type: [String],
      default: "auto"
    },
    right: {
      type: [String],
      default: "auto"
    },
    bottom: {
      type: [String],
      default: "auto"
    }
  },
  components: {
    Corner
  },
  watch:{
    left(value){
      this.wrapStyle.left=value;
    },
    top(value){
      this.wrapStyle.top=value;
    }
  },
  data() {
    return {
      wrapStyle: {
        left: this.left,
        top: this.top,
        right: this.right,
        bottom: this.bottom,
        width: this.width,
        height: this.height,
      }
    };
  },
  methods: {
    getRefWrap() {
      return this.$refs.resizableWrap;
    },
    getWrapWidth() {
      return this.getRefWrap().offsetWidth;
    },
    getWrapHeight() {
      return this.getRefWrap().offsetHeight;
    },
    getWrapLeft() {
      return this.getRefWrap().offsetLeft;
    },
    getWrapTop() {
      return this.getRefWrap().offsetTop;
    },
    mouseDown(event) {
      this.wrapLeft = this.getWrapLeft();
      this.wrapTop = this.getWrapTop();
      this.wrapWidth = this.getWrapWidth();
      this.wrapHeight = this.getWrapHeight();
    },
    setWrapLeftAdd(moveX) {
      this.wrapStyle.left = this.wrapLeft + moveX + "px";
    },
    setWrapTopAdd(moveY) {
      this.wrapStyle.top = this.wrapTop + moveY + "px";
    },
    setWrapWidthAdd(moveX) {
      this.wrapStyle.width = this.wrapWidth + moveX + "px";
    },
    setWrapWidthSubt(moveX) {
      this.wrapStyle.width = this.wrapWidth - moveX + "px";
    },
    setWrapHeightAdd(moveY) {
      this.wrapStyle.height = this.wrapHeight + moveY + "px";
    },
    setWrapHeightSubt(moveY) {
      this.wrapStyle.height = this.wrapHeight - moveY + "px";
    },
    mouseMoveTopLeft(event, { moveX, moveY }) {
      this.setWrapLeftAdd(moveX);
      this.setWrapTopAdd(moveY);

      this.setWrapWidthSubt(moveX);
      this.setWrapHeightSubt(moveY);
    },
    mouseMoveBottomRight(event, { moveX, moveY }) {
      this.setWrapWidthAdd(moveX);
      this.setWrapHeightAdd(moveY);
    },
    mouseMoveTopRight(event, { moveX, moveY }) {
      this.setWrapTopAdd(moveY);
      this.setWrapWidthAdd(moveX);
      this.setWrapHeightSubt(moveY);
    },
    mouseMoveBottomLeft(event, { moveX, moveY }) {
      this.setWrapLeftAdd(moveX);
      this.setWrapWidthSubt(moveX);
      this.setWrapHeightAdd(moveY);
    },
    mouseMoveLeftRight(event, { moveX, moveY }) {
      this.setWrapLeftAdd(moveX);
      this.setWrapWidthSubt(moveX);
    },
    mouseMoveTopBottom(event, { moveX, moveY }) {
      this.setWrapTopAdd(moveY);
      this.setWrapHeightSubt(moveY);
    },
    mouseMoveRightLeft(event, { moveX, moveY }) {
      this.setWrapWidthAdd(moveX);
    },
    mouseMoveBottomTop(event, { moveX, moveY }) {
      this.setWrapHeightAdd(moveY);
    }
  }
};
</script>

<style scoped>
.ly-resizable-wrap {
  position: absolute;
  /* height: 400px;
  width: 400px; */
  background-color: #42b1bf;
  border: 1px solid #795548;
  border-radius: 4px;
  box-shadow: 2px 2px 5px #00bcd4;
  overflow: hidden;
}
</style>


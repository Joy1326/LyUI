<template>
  <div
    class="ly-resizable-wrap"
    ref="resizableWrap"
  >
    <ControlHandleBox
      @mouseDown="mouseDown"
      @mouseMoveLeftRight="mouseMoveLeftRight"
      @mouseMoveTopBottom="mouseMoveTopBottom"
      @mouseMoveRightLeft="mouseMoveRightLeft"
      @mouseMoveBottomTop="mouseMoveBottomTop"
      @mouseMoveTopLeft="mouseMoveTopLeft"
      @mouseMoveTopRight="mouseMoveTopRight"
      @mouseMoveBottomRight="mouseMoveBottomRight"
      @mouseMoveBottomLeft="mouseMoveBottomLeft"
    />
    <slot></slot>
  </div>
</template>
<script>
import ControlHandleBox from "./ControlHandleBox.vue";
export default {
  components: { ControlHandleBox },
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
    setWrapStyleAttr(attrName, value) {
      this.getRefWrap().style[attrName] = value;
    },
    setWrapLeftAdd(moveX) {
      this.setWrapStyleAttr("left", this.wrapLeft + moveX + "px");
    },
    setWrapTopAdd(moveY) {
      this.setWrapStyleAttr("top", this.wrapTop + moveY + "px");
    },
    setWrapWidthAdd(moveX) {
      this.setWrapStyleAttr("width", this.wrapWidth + moveX + "px");
    },
    setWrapWidthSubt(moveX) {
      this.setWrapStyleAttr("width", this.wrapWidth - moveX + "px");
    },
    setWrapHeightAdd(moveY) {
      this.setWrapStyleAttr("height", this.wrapHeight + moveY + "px");
    },
    setWrapHeightSubt(moveY) {
      this.setWrapStyleAttr("height", this.wrapHeight - moveY + "px");
    },
    mouseDown() {
      this.wrapLeft = this.getWrapLeft();
      this.wrapTop = this.getWrapTop();
      this.wrapWidth = this.getWrapWidth();
      this.wrapHeight = this.getWrapHeight();
    },
    mouseMoveLeftRight({ moveX }) {
      this.setWrapLeftAdd(moveX);
      this.setWrapWidthSubt(moveX);
    },
    mouseMoveTopBottom({ moveY }) {
      this.setWrapTopAdd(moveY);
      this.setWrapHeightSubt(moveY);
    },
    mouseMoveRightLeft({ moveX }) {
      this.setWrapWidthAdd(moveX);
    },
    mouseMoveBottomTop({ moveY }) {
      this.setWrapHeightAdd(moveY);
    },
    mouseMoveTopLeft({ moveX, moveY }) {
      this.setWrapLeftAdd(moveX);
      this.setWrapTopAdd(moveY);

      this.setWrapWidthSubt(moveX);
      this.setWrapHeightSubt(moveY);
    },
    mouseMoveTopRight({ moveX, moveY }) {
      this.setWrapTopAdd(moveY);
      this.setWrapWidthAdd(moveX);
      this.setWrapHeightSubt(moveY);
    },
    mouseMoveBottomRight({ moveX, moveY }) {
      this.setWrapWidthAdd(moveX);
      this.setWrapHeightAdd(moveY);
    },
    mouseMoveBottomLeft({ moveX, moveY }) {
      this.setWrapLeftAdd(moveX);
      this.setWrapWidthSubt(moveX);
      this.setWrapHeightAdd(moveY);
    }
  }
};
</script>

<style scoped>
.ly-resizable-wrap {
  position: absolute;
  border: 1px solid #dddede;
  border-radius: 4px;
  left: auto;
  box-sizing: border-box;
}
</style>


<template>
  <div
    class="ly-resizable-control-wrap"
    style="height:0;width:0;"
  >
    <!-- left line -->
    <ControlHandle
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveLeftRight"
      style="top:0;bottom:0;left:-1px;cursor:ew-resize;"
    />
    <!-- top line -->
    <ControlHandle
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveTopBottom"
      style="left:0;top:-1px;right:0;cursor:ns-resize;"
    />
    <!-- right line -->
    <ControlHandle
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveRightLeft"
      style="top:0;right:-1px;bottom:0;cursor:ew-resize;"
    />
    <!-- bottom line -->
    <ControlHandle
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveBottomTop"
      style="left:0;right:0;bottom:-1px;cursor:ns-resize;"
    />
    <!-- corner -->
    <ControlHandle
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveTopLeft"
      style="left:-1px;top:-1px;cursor:nwse-resize;"
    />
    <ControlHandle
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveTopRight"
      style="right:-1px;top:-1px;cursor:nesw-resize;"
    />
    <ControlHandle
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveBottomRight"
      style="right:-1px;bottom:-1px;cursor:nwse-resize;"
    />
    <ControlHandle
      @lyMouseDown="mouseDown"
      @lyMouseMove="mouseMoveBottomLeft"
      style="bottom:-1px;left:-1px;cursor:nesw-resize;"
    />
  </div>
</template>
<script>
import ControlHandle from "./ControlHandle.vue";
export default {
  components: { ControlHandle },
  methods: {
    mouseDown(event) {
      this.$emit("mouseDown", event);
    },
    mouseMoveLeftRight(event, { moveX }) {
      this.$emit("mouseMoveLeftRight", { moveX });
    },
    mouseMoveTopBottom(event, { moveY }) {
      this.$emit("mouseMoveTopBottom", { moveY });
    },
    mouseMoveRightLeft(event, { moveX }) {
      this.$emit("mouseMoveRightLeft", { moveX });
    },
    mouseMoveBottomTop(event, { moveY }) {
      this.$emit("mouseMoveBottomTop", { moveY });
    },
    mouseMoveTopLeft(event, { moveX, moveY }) {
      this.$emit("mouseMoveTopLeft", { moveX, moveY });
    },
    mouseMoveTopRight(event, { moveX, moveY }) {
      this.$emit("mouseMoveTopRight", { moveX, moveY });
    },
    mouseMoveBottomRight(event, { moveX, moveY }) {
      this.$emit("mouseMoveBottomRight", { moveX, moveY });
    },
    mouseMoveBottomLeft(event, { moveX, moveY }) {
      this.$emit("mouseMoveBottomLeft", { moveX, moveY });
    }
  }
};
</script>
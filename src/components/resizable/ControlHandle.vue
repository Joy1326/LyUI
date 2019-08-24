<template>
  <div
    class="ly-corner-wrap"
    @mousedown="mousedown"
  ></div>
</template>
<script>
export default {
  methods: {
    mousedown(event) {
      let {pageX,pageY} = event;
      this.sPageX = pageX;
      this.sPageY = pageY;
      this.$listeners.lyMouseDown&&this.$emit('lyMouseDown',event);
      document.addEventListener("mousemove", this.mousemoveFn);
      document.addEventListener("mouseup", this.mouseupFn);
    },
    mousemoveFn(event) {
        let {pageX,pageY} = event;
      this.$listeners.lyMouseMove&&this.$emit('lyMouseMove',event,{moveX:pageX-this.sPageX,moveY:pageY-this.sPageY});
    },
    mouseupFn(event) {
      document.removeEventListener("mousemove", this.mousemoveFn);
      document.removeEventListener("mouseup", this.mouseup);
    }
  }
};
</script>

<style scoped>
.ly-corner-wrap {
  border:2px solid #9e9e9e00;
  cursor: move;
  position: absolute;
}
</style>


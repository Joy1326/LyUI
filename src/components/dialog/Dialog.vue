<template>
  <div
    v-if="dlgShow"
    class="ly-dlg-mask"
    @click.self="maskHandler"
  >
    <div
      class="ly-dlg-wrap"
      :style="boxPosStyle"
      ref="dlgBody"
      v-resize
    >
      <div
        class="ly-dlg-header"
        v-drag="{targetEl:getTargetEl}"
        :style="headerStyle"
      >
        <slot>
          <div class="ly-header-item">
            header
          </div>
        </slot>
      </div>
      <div class="ly-dlg-body" :style="bodyStyle">
        body
      </div>
    </div>
  </div>
</template>
<script>
import dragMixins from "../mixins/drag";
import resizeMixins from "../mixins/resize";
export default {
  mixins: [dragMixins, resizeMixins],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    headerHeight: {
      type: Number,
      default: 36
    }
  },
  data() {
    return {
      dlgShow: this.value,
      boxOffsetLeft: 0,
      boxOffsetTop: 0,
      targetEl: null,
      subPos: {
        left: 0,
        top: 0
      }
    };
  },
  watch: {
    value(value) {
      this.dlgShow = value;
    },
    dlgShow(value) {
      this.$emit("input", this.dlgShow);
    }
  },
  computed: {
    boxPosStyle() {
      if (this.boxOffsetLeft && this.boxOffsetTop) {
        let { left, top } = this.subPos;
        return {
          left: this.boxOffsetLeft + left + "px",
          top: this.boxOffsetTop + top + "px"
        };
      }
    },
    headerStyle() {
      return {
        height: this.headerHeight + "px"
      };
    },
    bodyStyle(){
        console.log(this.headerHeight)
        return {
            height:`calc(100% - ${this.headerHeight}px)`
        }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setBoxOffsetLeftAndTop();
    });
  },
  methods: {
    getTargetEl() {
      return this.$refs.dlgBody;
    },
    setBoxOffsetLeftAndTop() {
      try {
        let { offsetLeft, offsetTop } = this.$refs.dlgBody;
        this.boxOffsetLeft = offsetLeft;
        this.boxOffsetTop = offsetTop;
        this.resetSubPos();
      } catch (error) {
        console.error(error);
      }
    },
    resetSubPos() {
      this.subPos.left = 0;
      this.subPos.top = 0;
    },
    maskHandler(e) {
      this.dlgShow = false;
    }
  }
};
</script>
<style scoped>
.ly-dlg-mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #6d6d6d75;
  z-index: 999;
  /* opacity:0.4; */
}
.ly-dlg-wrap {
  border: 1px solid #cec7c7;
  padding: 1px;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
  cursor: e-resize;
  box-sizing: border-box;
  overflow: hidden;;
}
.ly-dlg-header {
  position: relative;
  cursor: move;
}
.ly-header-item {
  background: #e8e5e5;
  padding: 5px;
  height: 100%;
}
.ly-dlg-body {
  /* height: 100%; */
  position: relative;
  background-color: skyblue;
  cursor: auto;
}
</style>



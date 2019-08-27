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
      :style="{...positionStyle,...resizableStyle}"
      ref="resizableBox"
      v-draggable="draggableOpt"
    >
      <div class="ly-dialog-body">
        <div
          class="ly-dialog-title-box"
          ref="refHandle"
          :style="titleStyle"
          v-html="title"
        ></div>
        <div
          class="ly-dialog-body-panel"
          :style="bodyPanelStyle"
        >
          <slot></slot>
        </div>
        <div class="ly-dialog-footer">
          <LyButton
            @click="cancelHandler"
            class="ly-dialog-cacel-btn ly-dialog-footer-btn"
          >取消</LyButton>
          <LyButton
            @click="okHandler"
            class="ly-dialog-ok-btn ly-dialog-footer-btn"
          >确定</LyButton>
        </div>
      </div>
    </Resizable>
  </div>
</template>
<script>
import Resizable from "../resizable";
import MaskLayer from "../masklayer";
import draggableMixin from "../directives/draggable";
import LyButton from "../button";
export default {
  components: { Resizable, MaskLayer, LyButton },
  mixins: [draggableMixin],
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
    },
    title: {
      type: String,
      default: "title"
    },
    draggable: {
      type: Boolean,
      default: false
    },
    resizable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sLeft: "auto",
      sTop: "auto",
      tagWidth: "auto",
      tagHeight: "auto",
      showDlg: this.value,
      draggableOpt: {
        handle: this.getRefHandle
      }
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
    },
    titleStyle() {
      // this.draggable ? { cursor: "move" } : null;
      return {
        cursor: this.draggable ? "move" : "auto"
      };
    },
    resizableStyle() {
      return {
        width: this.width,
        height: this.height,
        left: this.sLeft,
        top: this.sTop
      };
    },
    bodyPanelStyle() {
      let headerHeight = 36;
      let footerHeight = 42;
      return {
        height: `calc(100% - ${headerHeight + footerHeight}px)`,
        background: "white"
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
    },
    getRefHandle() {
      return this.$refs.refHandle;
    },
    cancelHandler() {
      this.close();
      this.$emit('cancelHandler');
    },
    okHandler() {
      this.close();
      this.$emit('okHandler');
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
  background-color: white;
}
.ly-dialog-title-box {
  height: 36px;
  line-height: 36px;
  padding-left: 8px;
  background: linear-gradient(180deg, #f7f7f7, #c5c5c5b5);
  border-bottom: 1px solid #e2e2e2;
  box-sizing: border-box;
}
.ly-dialog-body-panel {
  overflow: auto;
}
.ly-dialog-footer {
  height: 42px;
  background: #f1f1f1;
  padding: 5px;
  border-top: 1px solid #e2e2e2;
  box-sizing: border-box;
  text-align: right;
}
.ly-dialog-footer-btn {
  margin: 0 5px;
}
</style>



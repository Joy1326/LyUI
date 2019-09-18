<template>
  <button
    class="ly-button"
    v-bind="disabledProp"
    @click="clickHandler"
    :style="btnStyle"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  mounted() {},
  computed: {
    disabledProp() {
      if (!this.disabled) {
        return {};
      }
      return {
        disabled: "disabled"
      };
    },
    btnStyle() {
      if (this.size === "normal") {
        return null;
      }
      if (this.size === "small") {
        return {
          width: "44px",
          height: "24px",
          lineHeight: "24px",
          fontSize: "12px"
        };
      }
    }
  },
  methods: {
    clickHandler(e) {
      //   console.log(e)
      this.$emit("click", e);
    }
  }
};
</script>
<style scoped>
.ly-button {
  display: inline-block;
  outline: none;
  border: 1px solid #dce1e2;
  border-radius: 4px;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 14px;
  background-color: white;
  color: #696767;
  vertical-align: top;
}
.ly-button:disabled {
  cursor: not-allowed;
  background-color: #e6e6e6;
  color: #bfbfbf;
}
.ly-button:active {
  background-color: #f1f1f1;
  border-color: #9cc9ca;
}
</style>



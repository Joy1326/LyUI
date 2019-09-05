<template>
  <div
    class="ly-input-wrap"
    :class="isFocus?'ly-input-focus':''"
    ref="inputWrap"
  >
    <input
      class="ly-input"
      type="input"
      v-bind="$attrs"
      :value="textValue"
      :disabled="disabled"
      @input="oninputFn"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>
<script>
import { debounce } from "lodash";
export default {
  name: "LyInput",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: ""
    }
  },
  data() {
    return {
      isFocus: false,
      textValue: this.value,
      oninputFn:debounce(this.oninput,80)
    };
  },
  watch: {
    value(val) {
      this.textValue = val;
    }
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    getRefWrap() {
      return this.$refs.inputWrap;
    },
    oninput(event) {
      let value = event.target.value;
      this.textValue = value;
      this.$emit("input", value);

    },
    onFocus(event) {
      this.isFocus = true;
      this.$emit("on-focus", event);
    },
    onBlur(event) {
      this.isFocus = false;
      this.$emit("on-blur", event);
    }
  }
};
</script>
<style scoped>
.ly-input-wrap {
  display: inline-block;
  border: 1px solid #cec7c7;
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;
  vertical-align: middle;
}
.ly-input {
  width: calc(100% - 2px);
  height: 26px;
  text-indent: 4px;
  color: gray;
  font-size: 14px;
  outline: 0;
  border: 0;
}
.ly-input:focus {
  /* outline: 0;
  box-shadow: 0px 0px 5px 0px #03a9f4;
  border: 1px solid #03a9f4; */
}
.ly-input-focus {
  box-shadow: 0px 0px 5px 0px #03a9f4;
  border: 1px solid #03a9f4;
}
.ly-input:disabled {
  background-color: #f1f1f1;
}
/* .ly-input-prefix {
  float: left;
}
.ly-input-suffix {
  float: right;
} */
</style>


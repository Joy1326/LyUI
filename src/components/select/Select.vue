<template>
  <div class="ly-select-wrap">
    <div>
      <Input
        @on-focus="onFocus"
        @on-blur="onBlur"
        v-model="textStr"
        ref="lyTextInput"
      />
    </div>
    <SelectPanel
      v-show="showPanel"
      style="height:200px;width:200px;"
      v-clickOutside="onOutsideClick"
    >
      <slot></slot>
    </SelectPanel>
  </div>
</template>
<script>
import Input from "../input";
import SelectPanel from "../selectpanel";
import ClickOutside from "../directives/clickoutside";
export default {
  name: "lySelect",
  mixins: [ClickOutside],
  components: { Input, SelectPanel },
  props: {
    value: {
      type: [String, Array],
      required: true
    }
  },
  data() {
    return {
      showPanel: false,
      textValue: this.value,
      textStr: "",
      isFocus: false
    };
  },
  watch: {
    value(val) {
      this.textValue = val;
    }
  },
  mounted() {
    this.$on("on-select-selected", this.onOptionClick);
    this.$nextTick(() => {
      this.textStrFn();
    });
  },
  methods: {
    getRefSelectPanel() {
      return this.$refs.selectPanel;
    },
    onFocus() {
      this.showPanel = true;
      this.isFocus = true;
    },
    onBlur() {
      this.isFocus = false;
    },
    onOutsideClick() {
      if (!this.isFocus) {
        this.showPanel = false;
      }
    },
    onOptionClick({ value, text }) {
      console.log(value, text);
      this.textValue = value;
      this.textStr = text;
      this.$emit("input", value);
      this.showPanel = false;
    },
    textStrFn() {
      this.textStr = this.getTextStr(this.value);
    },
    getTextStr(val) {
      console.log(this);
      // componentInstance
      // componentOptions.tag==='"LyOption"'
      // this.$slots.default
      let slotsDefault = this.$slots.default;
      for (let i = 0, slotLen = slotsDefault.length; i < slotLen; i++) {
        let { value, optionText='' } = slotsDefault[i].componentInstance;
        if (val === value) {
          return optionText.toString().trim();
        }
      }
    }
  }
};
</script>
<style scoped>
.ly-select-wrap {
  display: inline-block;
  position: relative;
}
</style>



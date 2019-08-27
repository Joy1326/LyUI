<template>
  <div class="ly-select-wrap">
    <div>
      <Input
        @on-focus="onFocus"
        @on-blur="onBlur"
        v-model="textValue"
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
      isFocus:false
    };
  },
  mounted() {
    this.$on("on-select-selected", this.onOptionClick);
  },
  methods: {
    getRefSelectPanel() {
      return this.$refs.selectPanel;
    },
    onFocus() {
      this.showPanel = true;
      this.isFocus=true;
    },
    onBlur() {
      this.isFocus=false;
    },
    onOutsideClick() {
        if(!this.isFocus){
            this.showPanel = false;
        }
    },
    onOptionClick({ value, text }) {
      this.textValue = value;
      this.$emit("input", value);
      this.showPanel = false;
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



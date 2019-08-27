<template>
  <div class="ly-combotree-wrap">
    <div>
      <Input
        @on-focus="onFocus"
        @on-blur="onBlur"
        v-model="textValue"
        ref="lyTextInput"
      />
    </div>
    <!-- <div class="ly-combotree-box">
      <Tree
        :style="{width:panelWidth+'px'}"
        :data="data"
      ></Tree>
    </div> -->
    <SelectPanel
      v-show="showPanel"
      style="width:200px;"
      v-clickOutside="onOutsideClick"
    >
      <slot>
        <Tree
          :data="data"
        ></Tree>
      </slot>
    </SelectPanel>
  </div>
</template>
<script>
import Input from "../input";
import SelectPanel from "../selectpanel";
import ClickOutside from "../directives/clickoutside";
import Tree from '../tree';
export default {
  name: "lyComboTree",
  mixins: [ClickOutside],
  components: { Input, SelectPanel,Tree },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    panelWidth: {
      type: [Number],
      default: 120
    }
  },
  data() {
    return {
      showPanel: false,
      textValue: this.value,
      isFocus: false
    };
  },
  methods: {
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
      this.textValue = value;
      this.$emit("input", value);
      this.showPanel = false;
    }
  }
};
</script>
<style scoped>
.ly-combotree-wrap {
  width: 220px;
  display: inline-block;
  box-sizing: border-box;
}
.ly-combotree-box {
  padding: 2px;
  box-sizing: border-box;
}
</style>



<template>
  <div class="ly-select-wrap">
    <div>
      <Input
        @on-focus="onFocus"
        @on-blur="onBlur"
        v-model="textStr"
        ref="lyTextInput"
      >
      <Icon
        slot="icon"
        :type="showPanel?iconUp:iconDown"
        @click="iconClick"
      ></Icon>
      </Input>
    </div>
    <SelectPanel
      v-show="showPanel"
      v-clickOutside="onOutsideClick"
      :style="cPanelStyle"
    >
      <slot></slot>
    </SelectPanel>
  </div>
</template>
<script>
import Input from "../input";
import SelectPanel from "../selectpanel";
import ClickOutside from "../directives/clickoutside";
import Icon from "../icon";
export default {
  name: "lySelect",
  mixins: [ClickOutside],
  components: { Input, SelectPanel, Icon },
  provide() {
    return {
      lySelect: this
    };
  },
  props: {
    value: {
      type: [String, Array],
      required: true
    },
    iconUp:{
      type:String,
      default:'icon-expand'
    },
    iconDown:{
      type:String,
      default:'icon-collapse'
    },
    panelWidth:{
      type:String,
      default:'200px'
    },
    panelHeight:{
      type:String,
      default:'200px'
    },
    panelStyle:Object
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
  computed:{
    cPanelStyle(){
      return {
        width:this.panelWidth,
        height:this.panelHeight,
        ...this.panelStyle
      }
    }
  },
  mounted() {
    this.$on("on-selected", this.onOptionClick);
    this.$on('on-item-rendered',this.itemRendered);
  },
  methods: {
    getRefInput() {
      return this.$refs.lyTextInput;
    },
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
      this.textValue = value;
      this.textStr = text;
      this.$emit("input", value);
      this.showPanel = false;
    },
    itemRendered(item){
      let {value,text} = item;
      if(value === this.value){
        this.textStr = text;
      }
    },
    iconClick(e) {
      if (!this.showPanel) {
        this.getRefInput().focus();
        return;
      }
      this.showPanel != this.showPanel;
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



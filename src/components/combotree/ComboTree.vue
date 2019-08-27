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
    <SelectPanel
      v-show="showPanel"
      style="width:200px;"
      v-clickOutside="onOutsideClick"
    >
      <slot>
        <Tree
          :data="data"
          v-model="treeValue"
        ></Tree>
      </slot>
    </SelectPanel>
  </div>
</template>
<script>
import Input from "../input";
import SelectPanel from "../selectpanel";
import ClickOutside from "../directives/clickoutside";
import Tree from "../tree";
export default {
  name: "lyComboTree",
  mixins: [ClickOutside],
  components: { Input, SelectPanel, Tree },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    panelWidth: {
      type: [Number],
      default: 120
    },
    value:{
      type:[String,Array,Number]
    }
  },
  data() {
    return {
      showPanel: false,
      textValue: this.getTextValue(this.value),
      treeValue: this.value,
      isFocus: false
    };
  },
  watch: {},
  mounted() {
    this.$on("on-node-click", this.nodeClick);
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
    nodeClick(node) {
      let { value, name } = node;
      this.textValue = name;
      this.treeValue = value;
      this.$emit("input", value);
      this.showPanel=false;
    },
    getTextValue(value) {
      if(!value){
        return '';
      }
      let data = this.data;
      for (let i = 0, dataLen = data.length; i < dataLen; i++) {
        let v=this.breadthFirst(value, data[i]);
        if(v){
          return v.name;
        }
      }
    },
    breadthFirst(value, root) {
      let nodeDeque = [];
      let node = root;
      nodeDeque.push(node);
      while (nodeDeque.length) {
        node = nodeDeque.pop();
        if(value ===node.value){
          return node;
        }
        if (node.children) {
          for (let ch of node.children) {
            nodeDeque.push(ch);
          }
        }
      }
    }
  }
};
</script>
<style scoped>
.ly-combotree-wrap {
  /* width: 220px; */
  display: inline-block;
  box-sizing: border-box;
}
.ly-combotree-box {
  padding: 2px;
  box-sizing: border-box;
}
</style>



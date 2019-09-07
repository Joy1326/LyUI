<template>
  <div class="ly-combotree-wrap">
    <div>
      <Input
        @on-focus="onFocus"
        @on-blur="onBlur"
        @input="onInput"
        v-model="textValue"
        ref="lyTextInput"
      >
      <Icon slot="icon" :type="iconType" />
      </Input>
    </div>
    <SelectPanel
      v-show="showPanel"
      style="width:200px;"
      v-clickOutside="onOutsideClick"
    >
      <Tree
        :data="treeData"
        v-model="treeValue"
      ></Tree>
    </SelectPanel>
  </div>
</template>
<script>
import Input from "../input";
import SelectPanel from "../selectpanel";
import ClickOutside from "../directives/clickoutside";
import Tree from "../tree";
import Icon from '../icon';
import { cloneDeep, debounce } from "lodash";
export default {
  name: "lyComboTree",
  mixins: [ClickOutside],
  components: { Input, SelectPanel, Tree ,Icon},
  props: {
    data: {
      type: Array,
      default: () => []
    },
    panelWidth: {
      type: [Number],
      default: 120
    },
    value: {
      type: [String, Array, Number]
    },
    searchName:{
      type:String,
      default:'name'
    },
    isLikeSearch: {
      type: Boolean,
      default: false
    },
    isLikeSearchAll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showPanel: false,
      textValue: this.getTextValue(this.value),
      treeValue: this.value,
      isFocus: false,
      treeData: this.data,
      iconType:'icon-expand'
    };
  },
  mounted() {
    this.$on("on-node-click", this.nodeClick);
  },
  watch:{
    showPanel(val){
      let iconType = "";
      if (val) {
        iconType = "icon-collapse";
      } else {
        iconType = "icon-expand";
      }
      this.iconType = iconType;
    }
  },
  methods: {
    resetTreeData(){
      this.treeData = this.data;
    },
    onFocus() {
      this.showPanel = true;
      this.isFocus = true;
      this.resetTreeData();
    },
    onInput(value) {
      // console.log(value);
      if (!value) {
        this.resetTreeData();
        return;
      }
      this.searchNode(value, this.isLikeSearch, this.isLikeSearchAll);
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
      this.showPanel = false;
    },
    searchNode(value, isLikeSearch, isLikeSerchAll) {
      let treeData = this.copyData(this.data);
      let path = [];
      let newTree = [];
      for (let i = 0, len = treeData.length; i < len; i++) {
        let cNode = treeData[i];
        cNode = Object.assign({}, this.copyData(cNode), {
          level: 0,
          pValue: null,
          index: i,
          pIndex: -1
        });
        path.push({
          finds: [],
          nodeMap: {},
          firseNodeValue: cNode.value
        });
        this.breadthFirstToSearchNode(
          cNode,
          value,
          isLikeSearch,
          isLikeSerchAll,
          path
        );
      }
      // console.log(path);
      this.toNewTree(path, newTree);
      this.treeData = newTree;
    },
    copyData(data) {
      return cloneDeep(data);
    },
    toNewTree(path, newTree) {
      for (let i = 0, len = path.length; i < len; i++) {
        let { finds, nodeMap, firseNodeValue } = path[i];
        // this.toNewTree3(finds, nodeMap);
        this.toNewTree2(finds, nodeMap);
        newTree.push(nodeMap[firseNodeValue]);
      }
    },
    toNewTree2(finds, nodeMap) {
      for (let i = 0, len = finds.length; i < len; i++) {
        let node = finds[i];
        let { pValue } = node;
        if (pValue) {
          this.travPath(nodeMap, pValue);
        }
        this.toNewTree3(nodeMap);
      }
    },
    travPath(nodeMap, pValue) {
      let deque = [];
      let pNode = nodeMap[pValue];
      deque.push(pNode);
      while (deque.length) {
        let _pNode = deque.pop();
        let { value, pValue } = _pNode;
        nodeMap[value]._p = true;
        // console.log(nodeMap[n.value])
        if (pValue) {
          deque.push(nodeMap[pValue]);
        }
        // console.log(_pNode)
      }
    },
    toNewTree3(nodeMap) {
      // console.log(nodeMap);
      for (let node in nodeMap) {
        let tNode = nodeMap[node];
        let { _p, pValue, value } = tNode;
        // console.log(pValue);
        if (_p && pValue) {
          if (!(nodeMap[pValue]._pv && nodeMap[pValue]._pv[value])) {
            if (!nodeMap[pValue]._pv) {
              nodeMap[pValue]._pv = {};
            }
            nodeMap[pValue]._pv[value] = true;
            nodeMap[pValue].children.push(tNode);
          }
        }
      }
    },
    breadthFirstToSearchNode(cNode, value, isLikeSearch, isLikeSerchAll, path) {
      let nodeDeque = [];
      let node = cNode;
      nodeDeque.push(node);
      let fNode = null;
      let toChildrenNull = ({ children, ...resp }) => ({
        ...resp,
        children: []
      });
      while (nodeDeque.length) {
        node = nodeDeque.pop();
        path[path.length - 1].nodeMap[node.value] = toChildrenNull(node);
        if (!isLikeSearch) {
          if (node[this.searchName] === value) {
            fNode = node;
            path[path.length - 1].finds.push(node);
            path[path.length - 1].nodeMap[node.value]["_p"] = true;
            break;
          }
        } else {
          if (node[this.searchName].trim().indexOf(value) > -1) {
            fNode = node;
            path[path.length - 1].finds.push(node);
            path[path.length - 1].nodeMap[node.value]["_p"] = true;
            if (!isLikeSerchAll) {
              break;
            }
          }
        }
        if (node.children && node.children.length) {
          for (let i = 0, len = node.children.length; i < len; i++) {
            let _cNode = node.children[i];
            _cNode = Object.assign({}, this.copyData(_cNode), {
              level: node.level + 1,
              pValue: node.value,
              index: i,
              pIndex: node.index
            });
            nodeDeque.push(_cNode);
          }
        }
      }
      if (!fNode) {
        path.length && path.pop();
      }
    },
    getTextValue(value) {
      if (!value) {
        return "";
      }
      let data = this.data;
      for (let i = 0, dataLen = data.length; i < dataLen; i++) {
        let v = this.breadthFirst(value, data[i]);
        if (v) {
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
        if (value === node.value) {
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



<template>
  <div :class="isChild?'ly-tree-child ly-tree-wrap':'ly-tree-root ly-tree-wrap'">
    <div
      class="ly-tree-empty"
      v-if="!isChild&&!data.length"
    >没有数据！</div>
    <ul
      v-else
      class="ly-tree-ul"
      style="padding:2px 5px;"
      :style="isChild?{marginLeft:'20px'}:{marginLeft:0}"
    >
      <li
        class="ly-tree-li"
        v-for="(treeNode,nodeIndex) in data"
        :key="nodeIndex"
      >
        <span :class="{'ly-line':showLine(treeNode)}"></span>
        <!-- <span :class="(treeNode.children&&treeNode.children.length)?'ly-line':''"></span> -->
        <div
          class="ly-tree-name"
          :style="!(treeNode.children&&treeNode.children.length)?'margin-left:24px;':''"
        >
          <span
            class="ly-sp"
            v-show="treeNode.children&&treeNode.children.length"
            @click="changeStatus(nodeIndex)"
          >
            {{!bindCk[nodeIndex]?'-':'+'}}
          </span>
          <span
            @click="nodeClick(treeNode)"
            class="ly-tree-text"
          >{{treeNode.name}}</span>
        </div>
        <LyTree
          v-show="!bindCk[nodeIndex]&&treeNode.children"
          :isChild="true"
          :data="treeNode.children"
        ></LyTree>
      </li>
    </ul>
  </div>
</template>
<script>
import Emitter from "../mixins/emitter";
export default {
  name: "LyTree",
  mixins: [Emitter],
  props: {
    data: {
      type: Array,
      default: () => []
    },
    isChild: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bindCk: []
    };
  },
  methods: {
    showLine(node){
      if(!this.isChild){
        return false;
      }
      if(node.children&&node.children.length){
        if(this.isChild){
          return false;
        }
        return true;
      }
      return false;
    },
    // changeStatus(index, hasChild) {
    //   if (hasChild) {
    //     this.$set(this.bindCk, index, !this.bindCk[index]);
    //   }
    // },
    changeStatus(index) {
      this.$set(this.bindCk, index, !this.bindCk[index]);
    },
    nodeClick(treeNode) {
      this.dispatch("lyComboTree", "on-node-click", treeNode);
    }
  }
};
</script>
<style scoped>
.ly-tree-root {
  background-color: white;
  display: inline-block;
  padding: 5px;
  box-sizing: border-box;
  color: #808080;
}
.ly-tree-ul {
  list-style: none;
}
.ly-line {
  height: 0;
  display: block;
  width: 24px;
  border-top: 1px dashed #b9b9b9;
  position: relative;
  top: 12px;
  left: -2px;
}
.ly-tree-name {
  cursor: pointer;
}
.ly-tree-text:hover {
  background-color: aliceblue;
}
.ly-tree-text {
  white-space: nowrap;
}
.ly-sp {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  line-height: 14px;
  /* color: gray; */
  border: 1px solid #b9b9b9;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  margin-right: 4px;
  margin-top: 2px;
}
/* .ly-tree-child > .ly-tree-ul {
  border-left: 1px dashed #b9b9b9;
} */
.ly-tree-li:not(:last-of-type) .ly-tree-ul{
  border-left: 1px dashed #b9b9b9;
}
.ly-tree-empty {
  text-align: center;
  /* color: gray; */
  font-size: 14px;
}
</style>





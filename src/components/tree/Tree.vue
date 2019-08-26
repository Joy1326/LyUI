<template>
  <div :class="isChild?'ly-tree-child ly-tree-wrap':'ly-tree-root ly-tree-wrap'">
    <ul
      class="ly-tree-ul"
      style="padding:2px 5px;"
      :style="isChild?{marginLeft:'20px'}:{marginLeft:0}"
    >
      <li
        class="ly-tree-li"
        v-for="(treeNode,nodeIndex) in data"
        :key="nodeIndex"
      >
        <span :class="!treeNode.children?'ly-line':''"></span>
        <div
          class="ly-tree-name"
          :style="!treeNode.children?'margin-left:12px;':''"
          @click="changeStatus(nodeIndex,treeNode.children)"
        >
          <span
            class="ly-sp"
            v-if="treeNode.children"
          >
            {{bindCk[nodeIndex]?'-':'+'}}
          </span>
          {{treeNode.name}}
        </div>
        <LyTree
          v-if="bindCk[nodeIndex]"
          :isChild="true"
          :data="treeNode.children"
        ></LyTree>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LyTree",
  props: {
    data: {
      type: Array,
      required: true
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
    changeStatus(index, hasChild) {
      console.log(this);
      if (hasChild) {
        this.$set(this.bindCk, index, !this.bindCk[index]);
      }
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
}
.ly-tree-ul {
  list-style: none;
}
.ly-line {
  height: 0;
  display: inline-block;
  width: 12px;
  border-top: 1px dashed #b9b9b9;
  position: relative;
  top: 18px;
  left: -2px;
}
.ly-sp {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  line-height: 14px;
  color: gray;
  border: 1px solid #b9b9b9;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}
.ly-tree-child > .ly-tree-ul {
  border-left: 1px dashed #b9b9b9;
}
</style>
<style scoped>
/* .ly-tree-ul {
  list-style: none;
}
.ly-tree-wrap {
  display: inline-block;
  box-sizing: border-box;
}
.ly-tree-name {
}
.ly-tree-child {
  border-left: 1px dashed #b9b9b9;
  padding: 6px;
}
.ly-sp {
  display: inline-block;
  border: 1px solid #b9b9b9;
  height: 16px;
  color: gray;
  width: 16px;
  line-height: 10px;
  text-align: center;
  cursor: pointer;
  margin-left: -22px;
  box-sizing: border-box;
} */
</style>




<template>
  <div class="ly-tree-wrap">
    <ul class="ly-tree-ul">
      <li
        class="ly-tree-li"
        v-for="(treeNode,nodeIndex) in data"
        :key="nodeIndex"
      >
        <div
          class="ly-tree-name"
          @click="changeStatus(nodeIndex,treeNode.children)"
        >
          <span
            class="ly-sp"
            v-if="treeNode.children"
          >{{bindCk[nodeIndex]?'－':'＋'}}</span>
          {{treeNode.name}}
        </div>
        <LyTree
          v-if="bindCk[nodeIndex]"
          class="ly-tree-sub"
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
    }
  },
  data() {
    return {
      bindCk: []
    };
  },
  methods: {
    changeStatus(index, hasChild) {
      if (hasChild) {
        this.$set(this.bindCk, index, !this.bindCk[index]);
      }
    }
  }
};
</script>
<style scoped>
.ly-tree-ul {
  list-style: none;
}
.ly-tree-wrap {
  display: inline-block;
  /* border: 1px solid #b9b9b9; */
  /* border-radius: 2px; */
  /* padding: 4px; */
  box-sizing: border-box;
}
.ly-tree-name {
  /* background-color: white; */
}
.ly-tree-sub {
  border-left: 1px dashed #b9b9b9;
  padding: 6px;
}
.ly-sp {
  display: inline-block;
  border: 1px solid #b9b9b9;
  height: 16px;
  color: gray;
  width: 16px;
  line-height: 14px;
  text-align: center;
  cursor: pointer;
}
</style>



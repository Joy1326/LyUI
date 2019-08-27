<template>
  <div class="ly-combotree-wrap">
    <div>
      <Input />
    </div>
    <div class="ly-combotree-box">
      <Tree :style="{width:panelWidth+'px'}" :data="data"></Tree>
    </div>
  </div>
</template>
<script>
import Input from "../input";
import Tree from "../tree";
export default {
  components: { Input, Tree },
  props: {
    data: {
      type: Array,
      default: ()=>[]
    },
    panelWidth:{
        type:[Number],
        default:120
    }
  }
};
</script>
<style scoped>
.ly-combotree-wrap{
    width: 220px;
    display: inline-block;
    box-sizing: border-box;
}
.ly-combotree-box{
        padding: 2px;
    box-sizing: border-box;
}
</style>



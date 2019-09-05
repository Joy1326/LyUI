<template>
  <div>
    <div>
      <span class="t-name">精确查询：</span>
      <LyComboTree
        :data="data"
        v-model="value"
      ></LyComboTree><span class="t-model">（{{'value:'+value}}）</span>
    </div>
    <div>
      <span class="t-name">模糊查询（找到第一个节点停止）：</span>
      <LyComboTree
        :data="data"
        v-model="value2"
        :isLikeSearch="true"
      ></LyComboTree><span class="t-model">（{{'value:'+value2}}）</span>
    </div>
    <div>
      <span class="t-name">模糊查询（查找所有节点）：</span>
      <LyComboTree
        :data="data"
        v-model="value3"
        :isLikeSearch="true"
        :isLikeSearchAll="true"
      ></LyComboTree><span class="t-model">（{{'value:'+value3}}）</span>
    </div>
  </div>
</template>
<script>
import list from "../tree/data";
export default {
  data() {
    return {
      data: this.getList(),
      value: "",
      value2: "10920201",
      value3: ""
    };
  },
  methods: {
    getList() {
      return list;
    }
  }
};
</script>
<style scoped>
.t-name {
  display: inline-block;
  width: 280px;
  vertical-align: middle;
  text-align: justify;
  text-align-last: justify;
}
.t-model {
  margin: 5px;
  display: inline-block;
  vertical-align: middle;
}
</style>



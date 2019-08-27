<template>
  <div>
    <div>
      <LyComboTree
        :data="data"
        v-model="value"
      ></LyComboTree><span>{{'value:'+value}}</span>
    </div>
    <div>
      <LyComboTree
        :data="data"
        v-model="value2"
      ></LyComboTree><span>{{'value2:'+value2}}</span>
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
      value2:'100202'
    };
  },
  methods: {
    getList() {
      return list;
    }
  }
};
</script>


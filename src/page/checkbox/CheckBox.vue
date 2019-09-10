<template>
  <div class="box">
    <div>
      <div>独立复选框</div>
      <LyCheckBox v-model="value1">
        苹果
      </LyCheckBox>
      {{'value='+value1}}
      <LyCheckBox v-model="value2" true-value="trueValue" false-value="falseValue">
        香蕉
      </LyCheckBox>
      {{'value='+value2}}
    </div>
    <div>
      <div>多个复选框</div>
      <LyCheckBox
        v-for="(item,index) in test"
        :key="index"
        :label="item"
        v-model="values"
      >
        {{item}}
      </LyCheckBox>
      <div>{{'values=['+values}}]</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
      value2:'',
      test: ["测试", "张三"],
      values: ["张三"]
    };
  }
};
</script>
<style scoped>
.box > div {
  margin: 10px;
  border: 1px solid #03a9f4;
  border-radius: 5px;
  padding: 10px;
  background: white;
  box-shadow: 0px 0px 5px 2px #9e9e9e;
}
</style>



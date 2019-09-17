<template>
  <div class="box">
    <LyCard>
      <div>独立复选框</div>
      <LyCheckBox v-model="value1">
        苹果{{'value='+value1}}
      </LyCheckBox>
      <LyCheckBox label="banana" v-model="value2" false-value="falseValue">
        香蕉{{'value='+value2}}
      </LyCheckBox>
      <LyCheckBox label="banana" v-model="value2" disabled>
        香蕉
      </LyCheckBox>

      <LyCheckBox v-model="value3" true-value="trueValue">
        香蕉1{{'value='+value3}}
      </LyCheckBox>
    </LyCard>
    <LyCard>
      <div>多个复选框</div>
      <LyCheckBoxGroup v-model="values">
        <LyCheckBox label="张三"></LyCheckBox>
        <LyCheckBox label="李四"></LyCheckBox>
        <LyCheckBox label="李五"></LyCheckBox>
      </LyCheckBoxGroup>
      <div>{{'values=['+values}}]</div>
    </LyCard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
      value2:'',
      value3:false,
      values: ["张三"]
    };
  }
};
</script>
<style scoped>
.box > div {
  margin: 10px;
  padding: 10px;
}
</style>



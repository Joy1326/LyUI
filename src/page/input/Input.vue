<template>
  <div class="box">
    <div>
      <LyInput v-model="value"></LyInput>{{value}}
    </div>
    <div>
      <LyInput
        maxlength="3"
      ></LyInput>
    </div>
    <div>
      <LyInput
      icon="icon-unlock"
      ></LyInput>
    </div>
    <div>
      <LyInput
      prefix-icon="icon-unlock"
      ></LyInput>
    </div>
    <div>
      <LyInput
      >
        <LyIcon slot="icon" type="icon-search"></LyIcon>
      </LyInput>
    </div>
    <div>
      <LyInput
      >
        <LyIcon slot="prefix-icon" type="icon-search"></LyIcon>
      </LyInput>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "12"
    };
  }
};
</script>
<style scoped>
.box >div{
    margin: 10px;
}
</style>



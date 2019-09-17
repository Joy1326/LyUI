<template>
    <div class="box">
        <div>
            <div>单个radio</div>
            <LyRadio disabled label="苹果" v-model="value1">苹果</LyRadio>
            <LyRadio label="苹果" v-model="value1">苹果</LyRadio>
            {{'value='+value1}}
            <LyRadio label="荔枝" v-model="value2">荔枝</LyRadio>
            {{'value='+value2}}
        </div>
        <div>
            <div>radio组</div>
            <LyRadioGroup v-model="value">
                <LyRadio disabled label="value1">测试</LyRadio>
                <LyRadio label="value2">测试2</LyRadio>
                <LyRadio label="value3" true-value="trueValue">测试3</LyRadio>
            </LyRadioGroup>
            {{'value='+value}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value1:'',
            value2:'',
            value:'',
        }
    }
}
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
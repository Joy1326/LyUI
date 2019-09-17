<template>
    <div class="box">
        <LyCard>
            <div>单个radio</div>
            <LyRadio disabled label="苹果" v-model="value1">苹果</LyRadio>
            <LyRadio label="苹果" v-model="value1">苹果</LyRadio>
            {{'value='+value1}}
            <LyRadio label="荔枝" v-model="value2">荔枝</LyRadio>
            {{'value='+value2}}
        </LyCard>
        <LyCard>
            <div>radio组</div>
            <LyRadioGroup v-model="value">
                <LyRadio disabled label="value1">测试</LyRadio>
                <LyRadio label="value2">测试2</LyRadio>
                <LyRadio label="value3" true-value="trueValue">测试3</LyRadio>
            </LyRadioGroup>
            {{'value='+value}}
        </LyCard>
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
  padding: 10px;
}
</style>
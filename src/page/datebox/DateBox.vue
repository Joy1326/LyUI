<template>
    <div class="box">
        <LyCard>
            <LyDateBox v-model="value"></LyDateBox>
            <LyDateBox style="margin-left:20px;" v-model="value1"></LyDateBox>
        </LyCard>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value:'',
            value1:'2019-10-01'
        }
    }
}
</script>
<style scoped>
.box>div{
    padding: 20px;
}
</style>
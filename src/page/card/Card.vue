<template>
    <div class="box">
        <LyCard v-for="(item,index) in  listNum" :key="index" class="my-card">
            <div>{{'card'+index}}</div>
        </LyCard>
    </div>
</template>
<script>
export default {
    data(){
        return {
            listNum:5
        }
    }
}
</script>
<style scoped>
.my-card{
    margin: 10px;
}
.my-card div{
    height: 84px;
}
</style>
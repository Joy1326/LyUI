<template>
    <div :style="style">
        <div class="ly-box">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        width:{
            type:[Number,String],
            default:'auto'
        }
    },
    computed:{
        style(){
            return {
                width: !isNaN(this.width)?this.width+'px':'auto'
            }
        }
    }
}
</script>
<style scoped>
.ly-box{
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>



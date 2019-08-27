<template>
<div>

    <LyInput v-model="value"></LyInput>{{value}}
    <br />
    <LyInput  maxlength="3" placeholder="maxlength=3"></LyInput>
</div>
</template>
<script>
export default {
    data(){
        return {
            value:'12'
        }
    }
}
</script>


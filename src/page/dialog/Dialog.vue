<template>
    <div>
        <LyButton @click="openDlg">打开</LyButton>
        <LyDialog v-model="dlgShow"></LyDialog>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dlgShow:true
        }
    },
    methods:{
        openDlg(){
            this.dlgShow = !this.dlgShow;
        }
    }
}
</script>


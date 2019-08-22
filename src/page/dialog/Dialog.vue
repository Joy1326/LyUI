<template>
    <div>
        <LyButton @click="openDlg">打开</LyButton>
        <LyDialog v-model="dlgShow" height="400px" width="600px" >
            <div style="background:#FFC107;">
                dialog
            </div>
        </LyDialog>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dlgShow:false
        }
    },
    methods:{
        openDlg(){
            this.dlgShow = !this.dlgShow;
        }
    }
}
</script>


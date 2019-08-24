<template>
    <div>
        <LyButton @click="openDlg">打开</LyButton>
        <LyDialog v-model="dlgShow" height="400px" width="600px" draggable>
            <div>
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


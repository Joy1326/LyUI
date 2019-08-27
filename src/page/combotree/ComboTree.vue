<template>
    <div>
        <LyComboTree :data="data"></LyComboTree>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data:this.getList()
        }
    },
    methods:{
        getList() {
      return [
        {
            name:"一级-01",
            children:[{
                name:'二级-01-01'
            }]
        },{
            name:"一级-02",
            children:[{
                name:'二级-02-01'
            },{
                name:'二级-02-02',
                children:[{
                    name:'三级-02-02-01'
                }]
            }]
        }
      ];
    }
    }
}
</script>


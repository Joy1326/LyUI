<template>
  <div
    class="ly-select-item"
    @click="itemClick"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LySelectOption",
  inject: {
    lySelect: {
      default: ""
    }
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    text: {
      type: [String, Number]
    }
  },
  computed: {
    optionText() {
      return this.text || (this.$el && this.$el.textContent);
    }
  },
  mounted(){
    this.$nextTick(()=>{
      if(this.lySelect!==''){
        this.lySelect.$emit('on-item-rendered',{
          value:this.value,
          text:this.optionText.trim()
        })
      }
    });
  },
  methods: {
    itemClick() {
      let text = this.optionText;
      if (this.lySelect !== "") {
        this.lySelect.$emit("on-selected", {
          value: this.value,
          text: text ? text.trim() : ""
        });
      }
    }
  }
};
</script>
<style scoped>
.ly-select-item {
  border-bottom: 1px solid #cec7c7;
  padding: 4px;
  cursor: pointer;
}
.ly-select-item:hover {
  background-color: aliceblue;
}
</style>



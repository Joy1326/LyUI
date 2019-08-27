<template>
  <div
    class="ly-select-item"
    @click="itemClick"
  >
    <slot></slot>
  </div>
</template>
<script>
import Emitter from "../mixins/emitter";
export default {
  name: "LySelectOption",
  mixins: [Emitter],
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
  methods: {
    itemClick() {
      let  text= this.optionText;
      this.dispatch("lySelect", "on-select-selected", {
        value: this.value,
        text: text?text.trim():''
      });
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



<template>
  <Select
    v-model="currentValue"
    iconUp="icon-calendar"
    iconDown="icon-calendar"
    panelHeight="auto"
  >
    <DatePanel v-model="currentValue" @on-selected="onDateSelected" />
  </Select>
</template>
<script>
import Select from "../select";
import DatePanel from "./DatePanel.vue";
export default {
  components: { Select, DatePanel },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    onDateSelected(time) {
      this.$emit("input", time);
      this.$emit("on-selected", time);
    }
  }
};
</script>

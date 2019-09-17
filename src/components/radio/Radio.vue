<template>
  <div class="ly-radio-wrap">
    <label
      class="ly-ck-label"
      :class="disabled?'ly-ck-disabled':'ly-ck-abled'"
    >
      <input
        type="radio"
        class="ly-ck-input"
        :name="name"
        :value="label"
        :disabled="disabled"
        v-model="model"
        @change="handleChange"
      />
      <Icon
        :fill="fillColor"
        :type="disabled?disabledIcon:(isChecked?checkedIcon:unCheckedIcon)"
      ></Icon>
      <slot></slot>
      <span v-if="!$slots.default">{{label}}</span>
    </label>
  </div>
</template>
<script>
import Icon from "../icon";
export default {
  components: { Icon },
  props: {
    name: String,
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    },
    checkedIcon: {
      type: String,
      default: "icon-radio-checked-fill"
    },
    unCheckedIcon: {
      type: String,
      default: "icon-radio-unchecked"
    },
    disabledIcon: {
      type: String,
      default: "icon-radio-disabled"
    },
    fillColor: {
      type: String,
      default: "#2196F3"
    }
  },
  inject: {
    lyRadioGroup: {
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    hasLabel() {
      return Boolean(this.$attrs.label);
    },
    label() {
      return this.hasLabel ? this.$attrs.label : true;
    },
    isChecked() {
      return this.model === this.label;
    },
    isGroup() {
      return this.lyRadioGroup !== "";
    },
    model: {
      get() {
        return this.isGroup ? this.lyRadioGroup.value : this.value;
      },
      set(val) {
        this.isGroup
          ? this.lyRadioGroup.$emit("input", val)
          : this.$emit("input", val);
      }
    }
  },
  mounted() {
    console.log(this.isGroup);
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit("change", this.model);
        this.isGroup && this.lyRadioGroup.$emit("handleChange", this.model);
      });
    }
  }
};
</script>
<style scoped>
.ly-radio-wrap {
  display: inline-block;
  position: relative;
}
.ly-ck-input {
  position: absolute;
  opacity: 0;
}
.ly-ck-abled,
.ly-ck-abled .ly-ck-input {
  cursor: pointer;
}
.ly-ck-disabled,
.ly-ck-disabled .ly-ck-input {
  cursor: not-allowed;
}
</style>
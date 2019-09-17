<template>
  <div class="ly-checkbox-wrap">
    <label
      class="ly-ck-label"
      :class="disabled?'ly-ck-disabled':'ly-ck-abled'"
    >
      <span class="ly-ck-icon-box">
        <input
          class="ly-ck-input"
          type="checkbox"
          :disabled="disabled"
          :checked="isChecked"
          :name="name"
          :value="label"
          :v-model="value"
          :id="inputId"
          @change="onChange"
        >
        <Icon
          :fill="fillColor"
          :type="disabled?disabledIcon:(isChecked?checkedIcon:unCheckedIcon)"
        ></Icon>
      </span>
      <slot></slot>
      <span v-if="!$slots.default">{{label}}</span>
    </label>
  </div>
</template>
<script>
import Icon from "../icon";
import { typeOf } from "../utils/utils";
export default {
  name: "LyCheckBox",
  components: { Icon },
  inject: {
    lyCheckBoxGroup: {
      default: ""
    }
  },
  props: {
    value: {
      type: [Array, Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    inputId: String,
    fillColor: {
      type: String,
      default: "#2196F3"
    },
    checkedIcon: {
      type: String,
      default: "icon-checked"
    },
    unCheckedIcon: {
      type: String,
      default: "icon-no-checked"
    },
    disabledIcon: {
      type: String,
      default: "icon-checked-disabled"
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
    hasTrueValue() {
      return Boolean(this.$attrs["true-value"]);
    },
    hasFalseValue() {
      return Boolean(this.$attrs["false-value"]);
    },
    trueValue() {
      return this.hasTrueValue ? this.$attrs["true-value"] : true;
    },
    falseValue() {
      return this.hasFalseValue ? this.$attrs["false-value"] : false;
    },
    isChecked() {
      if (this.isGroup) {
        return this.includes(this.model, this.label);
      }
      if (this.hasLabel) {
        return this.label === this.model;
      } else {
        return this.trueValue === this.model;
      }
    },
    isGroup() {
      return this.lyCheckBoxGroup !== "";
    },
    model: {
      get() {
        return this.isGroup ? this.lyCheckBoxGroup.value : this.value;
      },
      set(val) {
        this.isGroup
          ? this.lyCheckBoxGroup.$emit("input", val)
          : this.$emit("input", val);
      }
    }
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    onChange(e) {
      let { checked, value } = e.target;
      if (this.isGroup) {
        this.setGroupValue(value, checked);
      } else {
        this.setSelfValue(value, checked);
      }
    },
    setGroupValue(value, checked) {
      this.model = checked
        ? [...this.model, value]
        : this.model.filter(item => item !== value);
    },
    setSelfValue(value, checked) {
      if (this.hasLabel) {
        this.model = checked
          ? this.hasTrueValue
            ? this.trueValue
            : this.label
          : this.hasFalseValue
          ? this.falseValue
          : typeOf(this.label) === "string"
          ? ""
          : false;
        return;
      }
      this.model = checked
        ? this.hasTrueValue
          ? this.trueValue
          : true
        : this.hasFalseValue
        ? this.falseValue
        : false;
    },
    includes(values, targetValue) {
      return values.includes(targetValue);
    }
  }
};
</script>
<style scoped>
.ly-checkbox-wrap {
  display: inline-block;
}
.ly-ck-abled,
.ly-ck-abled .ly-ck-input {
  cursor: pointer;
}
.ly-ck-disabled,
.ly-ck-disabled .ly-ck-input {
  cursor: not-allowed;
}
.ly-ck-input {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  opacity: 0;
}
.ly-ck-icon-box {
  position: relative;
  height: 24px;
  width: 24px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
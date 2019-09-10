<template>
  <div class="ly-checkbox-wrap">
    <label class="ly-ck-label">
      <span class="ly-ck-icon-box">
        <input
          class="ly-ck-input"
          type="checkbox"
          :disabled="disabled"
          :checked="checked"
          :name="name"
          :value="label"
          :v-model="value"
          :id="inputId"
          @click="onChange"
        >
        <Icon
          fill="#2196F3"
          :type="iconType"
        ></Icon>
      </span>
      <slot>
        <span>{{value}}</span>
      </slot>
    </label>
  </div>
</template>
<script>
import Icon from "../icon";
import { typeOf } from "../utils/utils";
export default {
  name: "LyCheckbox",
  components: { Icon },
  props: {
    label: [Boolean, String, Number],
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
    trueValue: {
      type: [Boolean, String, Number],
      default: true
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  data() {
    return {
      iconType: "icon-no-checked",
      isGroup: this.isValueArray(),
      checked: false
    };
  },
  mounted() {
    // console.log(this);
    this.initIconType();
  },
  methods: {
    getValue(value) {
      return value;
      // if(typeOf(value) === 'array'){
      //   if(this.arrayIncludes(value,'测试')){
      //     return '测试'
      //   }
      //   return value;
      // }
    },
    includes(values, targetValue) {
      return values.includes(targetValue);
    },
    groupValueChange(checked, value) {
      if (checked) {
        if (!this.includes(this.value, value)) {
          this.$emit("input", [...this.value.map(item => item), value]);
        }
      } else {
        this.$emit("input", this.value.filter(item => item !== value));
      }
    },
    // booleanValueChange(checked) {
    //   if(checked){
    //     checked = this.trueValue;
    //   }else{
    //     checked = this.falseValue;
    //   }
    //   this.$emit("input", checked);
    // },
    isValueBoolean() {
      return typeOf(this.value) === "boolean";
    },
    isValueArray() {
      return typeOf(this.value) === "array";
    },
    onChange(e) {
      let { checked, value } = e.target;
      this.checked = checked;
      this.setIconType(checked);
      if (this.isGroup) {
        this.groupValueChange(checked, value);
      } else {
        let ck = checked;
        if (checked) {
          ck = this.trueValue;
        } else {
          ck = this.falseValue;
        }
        this.$emit("input", ck);
      }
      // if (this.isValueBoolean()) {
      //   this.booleanValueChange(checked);
      // } else if (this.isGroup) {
      //   this.arrayValueChange(checked, value);
      // } else {
      //   this.$emit("input", value);
      // }
    },
    initIconType() {
      if (this.isGroup) {
        if (this.includes(this.value, this.label)) {
          this.checked = true;
        }
      } else {
        // if(this.isValueBoolean()&&this.value){
        //   console.log(this.value)
        //   this.checked = true;
        // }
        if (this.value && this.value === this.trueValue) {
          this.checked = true;
        }
      }
      this.setIconType(this.checked);
    },
    setIconType(checked) {
      if (checked) {
        this.iconType = "icon-checked";
      } else {
        this.iconType = "icon-no-checked";
      }
    }
  }
};
</script>
<style scoped>
.ly-checkbox-wrap {
  display: inline-block;
}
.ly-ck-label {
  cursor: pointer;
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
  cursor: pointer;
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
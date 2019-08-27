<template>
  <div>
    <div>
      <LySelect v-model="value">
        <LyOption
          v-for="(item,index) in data"
          :key="index"
          :value="item.value"
        >
          {{item.text}}
        </LyOption>
      </LySelect>
    </div>
    <LySelect v-model="value">
      <LyOption
          v-for="(item,index) in data"
          :key="index"
          :value="item.value"
        >
          {{item.text}}
        </LyOption>
    </LySelect>
  </div>
</template>
<script>
export default {
  data() {
    return {
        value:'2',
      data: [
        {
          value: "1",
          text: "text-1"
        },
        {
          value: "2",
          text: "text-2"
        }
      ]
    };
  }
};
</script>


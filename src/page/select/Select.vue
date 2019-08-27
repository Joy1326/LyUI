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
      {{'value='+value}}
    </div>
    <LySelect v-model="value2">
      <LyOption
        v-for="(item,index) in data"
        :key="index"
        :value="item.value"
      >
        {{item.text}}
      </LyOption>
    </LySelect>
    {{'value2='+value2}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "2",
      value2: "",
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


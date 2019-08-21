<template>
  <div>
    <LyButton
      disabled
      @click="handler"
    >按钮</LyButton>
    <LyButton @click="handler">button按钮</LyButton>
  </div>
</template>
<script>
export default {
  methods: {
    handler() {
      console.log("gg");
    }
  }
};
</script>


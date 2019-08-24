<template>
  <div class="box">
      <LyDraggable>
        <LyButton>移动</LyButton>
      </LyDraggable>
      <LyDraggable :handle="handle">
        <div style="padding:10px;">
          <LyButton ref="handle">移动句柄</LyButton>
        </div>
      </LyDraggable>
  </div>
</template>
<script>
export default {
  methods: {
    handle() {
      return this.$refs.handle.$el;
    }
  }
};
</script>
<style scoped>
.box {
  padding: 50px;
}
.box > div {
  /* position: relative; */
  height: 50px;
}
</style>



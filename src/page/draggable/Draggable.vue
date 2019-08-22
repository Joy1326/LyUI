<template>
  <div class="box">
    <div>
      <LyDraggable :handle="handle">
        <LyButton ref="handle">移动句柄</LyButton>
      </LyDraggable>
    </div>
    <div>
      <LyDraggable>
        <LyButton>移动</LyButton>
      </LyDraggable>
    </div>
    <div>
      <LyDraggable :handle="handle2">
        <div style="padding:10px;">
          <LyButton ref="handle2">移动句柄2</LyButton>
        </div>
      </LyDraggable>
    </div>

  </div>
</template>
<script>
export default {
  methods: {
    handle() {
      return this.$refs.handle.$el;
    },
    handle2() {
      return this.$refs.handle2.$el;
    }
  }
};
</script>
<style scoped>
.box {
  padding: 50px;
}
.box > div {
  position: relative;
  height: 50px;
}
</style>



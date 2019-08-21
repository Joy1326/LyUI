<template>
  <div>
    <div class="header">
      <div
        v-for="(item,index) in list"
        :key="index"
      >
        <router-link :to="item.to">{{item.text}}</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          to: "/layout/base",
          text: "base layout"
        },
        {
          to: "/button",
          text: "button"
        },
        {
          to: "/dialog",
          text: "dialog"
        }
      ]
    };
  }
};
</script>
<style scoped>
.header {
  position: absolute;
  left: 0;
  width: 200px;
  background-color: skyblue;
}
.content {
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #efedeb;
}
</style>



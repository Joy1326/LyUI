<template>
  <LyLayout fit>
    <LyLayoutPanel slot="left" style="background:linear-gradient(45deg, #d4bfbe, transparent);width:200px;padding:10px;">
      <div
        v-for="(item,index) in list"
        :key="index"
        style="margin:5px;"
      >
        <router-link :to="item.path">
          <LyButton style="width:100%;">{{item.text}}</LyButton>
        </router-link>
      </div>
    </LyLayoutPanel>
    <LyLayoutPanel style="padding:10px;">
      <router-view></router-view>
    </LyLayoutPanel>
  </LyLayout>
</template>
<script>
import { routes } from "@/router";
export default {
  data() {
    return {
      list: routes
    };
  }
};
</script>


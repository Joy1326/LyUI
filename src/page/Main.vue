<template>
  <LyLayout fit>
    <LyLayoutPanel slot="left" width="200" style="background:#2f2f2f;">
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
    <LyLayoutPanel>
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


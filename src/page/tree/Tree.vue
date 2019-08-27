<template>
  <LyTree :data="list"></LyTree>
</template>

<script>
import list from './data';
export default {
  data() {
    return {
      list: this.getList()
    };
  },
  methods: {
    getList() {
      return list;
    }
  }
};
</script>

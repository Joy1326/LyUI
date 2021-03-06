import Vue from 'vue';
import App from './App.vue';
import router from './router';

import LyUI from '@/components';

Vue.config.productionTip = false;
Vue.use(LyUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import Router from 'vue-router';

import BaseLayout from '@/page/layout/BaseLayout.vue';
import Button from '@/page/button/Button.vue';
import Dialog from '@/page/dialog/Dialog.vue';
Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/layout/base',
            component: BaseLayout
        }, {
            path: '/button',
            component: Button
        },{
            path: '/dialog',
            component: Dialog
        }
    ]
});

export default router;

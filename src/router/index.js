import Vue from 'vue';
import Router from 'vue-router';

import BaseLayout from '@/page/layout/BaseLayout.vue';
import Button from '@/page/button/Button.vue';
import Dialog from '@/page/dialog/Dialog.vue';
import Draggable from '@/page/draggable/Draggable.vue';
import Resizable from '@/page/resizable/Resizable.vue';
import Table from '@/page/table/Table.vue';
import CenterBox from '@/page/centerbox/CenterBox.vue';
import Tree from '@/page/tree/Tree.vue';
Vue.use(Router);
const routes = [
    {
        path: '/layout',
        component: BaseLayout,
        text:'Layout'
    }, {
        path: '/button',
        component: Button,
        text:'Button'
    }, {
        path: '/dialog',
        component: Dialog,
        text:"Dialog"
    }, {
        path: '/draggable',
        component: Draggable,
        text:"Draggable"
    }, {
        path: '/resizable',
        component: Resizable,
        text:'Resizable'
    }, {
        path: '/centerbox',
        component: CenterBox,
        text:'CenterBox'
    }, {
        path: '/table',
        component: Table,
        text:'Table'
    }, {
        path: '/tree',
        component: Tree,
        text:'Tree'
    }
];
export { routes };
const router = new Router({
    routes: routes
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';

import BaseLayout from '@/page/layout/BaseLayout.vue';
import Button from '@/page/button/Button.vue';
import Dialog from '@/page/dialog/Dialog.vue';
import Draggable from '@/page/draggable/Draggable.vue';
import Resizable from '@/page/resizable/Resizable.vue';
import Table from '@/page/table/Table.vue';
import CenterBox from '@/page/centerbox/CenterBox.vue';
import Input from '@/page/input/Input.vue';
import Select from '@/page/select/Select.vue';
import Tree from '@/page/tree/Tree.vue';
import ComboTree from '@/page/combotree/ComboTree';
import Icon from '@/page/icon/Icon.vue';
import CheckBox from '@/page/checkbox/CheckBox.vue';
import Radio from '@/page/radio/Radio.vue';
import Card from '@/page/card/Card.vue';
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
        path: '/input',
        component: Input,
        text:'Input'
    }, {
        path: '/select',
        component: Select,
        text:'Select'
    },{
        path: '/tree',
        component: Tree,
        text:'Tree'
    }, {
        path: '/combo-tree',
        component: ComboTree,
        text:'ComboTree'
    }, {
        path: '/icon',
        component: Icon,
        text:'Icon'
    }, {
        path: '/checkbox',
        component: CheckBox,
        text:'CheckBox'
    }, {
        path: '/radio',
        component: Radio,
        text:'Radio'
    }, {
        path: '/card',
        component: Card,
        text:'Card'
    }
];
export { routes };
const router = new Router({
    routes: routes
});

export default router;

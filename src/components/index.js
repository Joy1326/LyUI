import Layout from './layout';
import Button from './button';
import Dialog from './dialog';
import Draggable from './draggable';
import Resizable from './resizable';
import Table from './table';
import CenterBox from './centerbox';
const LyUI = {
    install: function (Vue) {
        Vue.component('LyLayout', Layout);
        Vue.component('LyLayout.Panel', Layout.Panel);
        Vue.component('LyLayoutPanel', Layout.Panel);
        Vue.component('LyButton', Button);
        Vue.component('LyDialog', Dialog);
        Vue.component('LyDraggable', Draggable);
        Vue.component('LyResizable', Resizable);
        Vue.component('LyTable', Table);
        Vue.component('LyCenterBox', CenterBox);
    }
};
export default LyUI;
import '../assets/iconfont';
import Layout from './layout';
import Button from './button';
import Dialog from './dialog';
import Draggable from './draggable';
import Resizable from './resizable';
import Table from './table';
import CenterBox from './centerbox';
import Input from './input';
import Select from './select';
import Tree from './tree';
import ComboTree from './combotree';
import Icon from './icon';
import CheckBox from './checkbox';
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
        Vue.component('LyInput', Input);
        Vue.component('LySelect', Select);
        Vue.component('LySelect.Option', Select.Option);
        Vue.component('LyOption', Select.Option);
        Vue.component('LyTree', Tree);
        Vue.component('LyComboTree', ComboTree);
        Vue.component('LyIcon', Icon);
        Vue.component('LyCheckBox', CheckBox);
    }
};
export default LyUI;
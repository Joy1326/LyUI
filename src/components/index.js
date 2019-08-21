import Layout from './layout';
import Button from './button';
import Dialog from './dialog';
const LyUI = {
    install: function (Vue) {
        Vue.component('LyLayout', Layout);
        Vue.component('LyLayout.Panel', Layout.Panel);
        Vue.component('LyLayoutPanel', Layout.Panel);
        Vue.component('LyButton', Button);
        Vue.component('LyDialog', Dialog);
    }
};
export default LyUI;
export default {

    directives: {
        clickOutside: {
            inserted(el, bind) {
                let onOutsideClick = bind.value;
                function documentHandler(e) {
                    // console.log(e)
                    if (el.contains(e.target)) {
                        return false;
                    }
                    if (onOutsideClick && typeof onOutsideClick === 'function') {
                        onOutsideClick(e);
                    }
                }
                el.__vueClickOutside__ = documentHandler;
                document.addEventListener('click', documentHandler);
            },
            unbind(el) {
                document.removeEventListener('click', el.__vueClickOutside__);
                delete el.__vueClickOutside__;
            }
        }
    }
};
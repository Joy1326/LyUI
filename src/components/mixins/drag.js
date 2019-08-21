export default {
    directives: {
        drag: {
            // 指令的定义
            inserted(el, bind) {
                let { onDrag, onDragEnd, targetEl } = bind.value && bind.value || {};
                let disX = 0;
                let disY = 0;
                let nEl = el;
                if (targetEl && typeof targetEl === 'function') {
                    nEl = targetEl();
                }
                let tmpEl = null;
                function onmousedown(event) {
                    if (!tmpEl) {
                        tmpEl = nEl;
                    }
                    disX = event.pageX - tmpEl.offsetLeft;
                    disY = event.pageY - tmpEl.offsetTop;
                    // console.log(disX, disY)
                    document.addEventListener('mousemove',mouseMove);
                    document.addEventListener('mouseup', mouseUp);
                }
                function mouseMove(event) {
                    let mX = event.pageX - disX;
                    let mY = event.pageY - disY;
                    tmpEl.style.left = mX + "px";
                    tmpEl.style.top = mY + "px";
                    if (onDrag && typeof onDrag === 'function') {
                        onDrag(mX, mY);
                    }
                    // console.log(mX, mY);
                }
                function mouseUp(event) {
                    document.removeEventListener('mousemove', mouseMove);
                    document.removeEventListener('mouseup', mouseUp);
                    tmpEl = null;
                    if (onDragEnd && typeof onDragEnd === 'function') {
                        onDragEnd(event);
                    }
                }
                el.onmousedown = onmousedown;
            },
            unbind(el) {
                el.onmousedown = null;
            }
        }
    },
};
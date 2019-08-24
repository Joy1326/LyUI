export default {
    directives: {
        // 指令的定义
        draggable: {
            inserted(el, bind) {
                let { onDragStart, onDrag, onDragEnd, handle,position="absolute" } = bind.value && bind.value || {};
                let disX = 0;
                let disY = 0;
                let sPageX = 0;
                let sPageY = 0;
                let nEl = el;
                let hasSetPos = false;
                try {
                    if (handle && typeof handle === 'function') {
                        nEl = handle();
                    }
                    nEl.onmousedown = mousedownFn;
                } catch (error) {
                    // eslint-disable-next-line no-console
                    console.error(error);
                }

                function mousedownFn(event) {
                    let { pageX, pageY } = event;
                    sPageX = pageX;
                    sPageY = pageY;
                    if (onDragStart && typeof onDragStart === 'function') {
                        onDragStart(event);
                    }
                    disX = pageX - el.offsetLeft;
                    disY = pageY - el.offsetTop;
                    document.addEventListener('mousemove', mouseMoveFn);
                    document.addEventListener('mouseup', mouseUpFn);
                }
                function mouseMoveFn(event) {
                    if (!hasSetPos) {
                        el.style.position = position;
                        hasSetPos = true;
                    }
                    let { pageX, pageY } = event;
                    el.style.left = pageX - disX + 'px';
                    el.style.top = pageY - disY + 'px';
                    if (onDrag && typeof onDrag === 'function') {
                        onDrag(event, {
                            disX, disY,
                            mX: pageX - sPageX,
                            mY: pageY - sPageY
                        });
                    }
                }
                function mouseUpFn(event) {
                    document.removeEventListener('mousemove', mouseMoveFn);
                    document.removeEventListener('mouseup', mouseUpFn);
                    if (onDragEnd && typeof onDragEnd === 'function') {
                        onDragEnd(event);
                    }
                }
            },
            unbind(el, bind) {
                try {
                    let { handle } = bind.value && bind.value || {};
                    if (el.onmousedown) {
                        el.onmousedown = null;
                    }
                    if (handle && typeof handle === 'function' && handle() && handle().onmousedown) {
                        handle().onmousedown = null;
                    }
                } catch (error) {
                    // eslint-disable-next-line no-console
                    console.error(error);
                }
            }
        }
    }
}
(function() {
    // 防抖函数
    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // 监听复制事件
    document.addEventListener("copy", debounce(function() {
        new Vue({
            data: function() {
                this.$notify({
                    title: "哎嘿！复制成功🍬",
                    message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
                    position: "top-left",
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
                return {};
            }
        });
    }, 300));

    // 监听按键事件
    const debouncedKeyHandler = debounce(function() {
        new Vue({
            data: function() {
                this.$notify({
                    title: "你已被发现😜",
                    message: "小伙子，扒源随便😎😎😎",
                    position: "top-left",
                    offset: 50,
                    showClose: true,
                    type: "warning",
                    duration: 5000
                });
                return {};
            }
        });
    }, 300);

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 123 || // F12 key
            (e.ctrlKey && e.shiftKey && (e.keyCode === 74 || e.keyCode === 73 || e.keyCode === 67)) || // Ctrl+Shift+J/I/C
            (e.ctrlKey && e.keyCode === 85)) { // Ctrl+U
            console.log('Detected keydown event:', e); // 添加日志
            debouncedKeyHandler();
        }
    });

    // 添加一个页面加载完成的事件监听器
    window.addEventListener('load', function() {
        console.log('Page fully loaded');
    });
})();

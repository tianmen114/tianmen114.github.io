// 分享本页
function share_() {
    let url = window.location.origin + window.location.pathname;
    try {
        // 截取标题
        var title = document.title;
        var subTitle = title.endsWith("| tianmen🥝") ? title.substring(0, title.length - 14) : title;
        navigator.clipboard.writeText('tianmen15🥝的站内分享\n标题：' + subTitle + '\n链接：' + url + '\n欢迎来访！🍭🍭🍭');
        new Vue({
            data: function () {
                this.$notify({
                    title: "成功复制分享信息🎉",
                    message: "您现在可以通过粘贴直接跟小伙伴分享了！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success", 
                    duration: 5000
                });
            }
        });
    } catch (err) {
        console.error('复制失败！', err);
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    };
}

// 带有防抖功能的分享函数
function share() {
    debounce(share_, 300)();
}

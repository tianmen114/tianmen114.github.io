document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var words = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    var wordIndex = 0;

    body.addEventListener('click', function (e) {
        var word = document.createElement('div');
        word.className = 'word-effect';
        word.textContent = words[wordIndex];
        word.style.left = e.pageX + 'px';
        word.style.top = e.pageY + 'px';
        word.style.color = getRandomColor();
        body.appendChild(word);

        wordIndex = (wordIndex + 1) % words.length;

        setTimeout(function () {
            word.remove();
        }, 1000); // 消失延迟时间，单位毫秒
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

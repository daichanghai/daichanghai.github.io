var getRandomColor = function() {

    return (function(m, s, c) {
        return (c ? arguments.callee(m, s, c - 1) : '#') +
            s[m.floor(m.random() * 16)]
    })(Math, '0123456789abcdef', 5)
};
setInterval(function () {
    let blink = document.getElementsByClassName('blink')[0];
    let blink_1 = document.getElementsByClassName('blink_1')[0];
    blink.style.color=getRandomColor();
    blink_1.style.color=getRandomColor();
},10);
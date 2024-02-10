let moveBack = $('background');
moveBack.left = $('buildingNum').offsetLeft;
moveBack.onLeft = true;
moveBack.style.left = $('buildingNum').offsetLeft + 'px';
moveBack.style.top = ($('buildingNum').offsetTop) + 'px';
setTimeout(function() {
    moveBack.style.top = ($('buildingNum').offsetTop) + 'px';
},10)

function moveTo(type) {
    let speed = 60;
    let move = 11;
    let times = 14;
    if (type == 1 && moveBack.onLeft == false) return;
    if (type == -1 && moveBack.onLeft == true) return;
    moveBack.onLeft = type == 1 ? false : true;

    let toStop = setInterval(function() {
        times--;
        moveBack.left += (move * type);
        moveBack.style.left = moveBack.left + 'px';

        if (times == 0) clearInterval(toStop);
    },1000/speed)
}
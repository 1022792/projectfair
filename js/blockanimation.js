var deb = false;

document.addEventListener('scroll', handle);

function handle() {

    var scrollHeight = window.scrollY;
    var expertiseHeight = document.querySelector('.expertise').scrollHeight;
    var servicesHeight = document.querySelector('.services').scrollHeight;

    if (scrollHeight > expertiseHeight) {
        if (deb === false) {
            deb = true;
            animation();
        }
    }
}

function animation() {
    var blocksleft = document.querySelectorAll('.expertise__block--left');
    var blocksright = document.querySelectorAll('.expertise__block--right');
    var blockscontent = document.querySelectorAll('.expertise__block');

    for (var i = 0; i < blockscontent.length; i++) {
        blockscontent[i].style.animationDuration = "5s";
    }
    for (var k = 0; k < blocksleft.length; k++) {
        blocksleft[k].style.animationName = "slideleft";
    }
    for (var l = 0; l < blocksright.length; l++) {
        blocksright[l].style.animationName = "slideright";
    }
}



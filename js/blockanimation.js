var deb = false;
var debline = false;
document.addEventListener('scroll', handle);

function handle() {

    var scrollHeight = window.scrollY;
    var expertiseHeight = document.querySelector('.expertise').scrollHeight;
    var purposeHeight = document.querySelector('.purpose').scrollHeight;
    var servicesHeight = document.querySelector('.services').scrollHeight;

    console.log('scroll: ' + scrollHeight);
    console.log('purpose: ' + purposeHeight);
    if (scrollHeight > purposeHeight) {
        if (debline === false) {
            debline = true;
            draw();
        }
    }
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

function draw() {
    document.querySelector('.purpose__text').style.animation = "borders 3s ease 1 forwards";
}

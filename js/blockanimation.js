var deb = false;
var debline = false;
document.addEventListener('scroll', handle);

function handle() {

    var scroll = window.scrollY;
    var aboutHeight = document.querySelector('.about').offsetTop;
    var purposeHeight = document.querySelector('.purpose').offsetTop;
    var servicesHeight = document.querySelector('.services').offsetTop;

    if (scroll > purposeHeight) {
        if (debline === false) {
            debline = true; //animation for line
            draw();
        }
    }
    if (scroll > aboutHeight && scroll < servicesHeight) {
        if (deb === false) {
            console.log('deb is now true, activating animation');
            deb = true;
            animation();
        }
    } else {
        if (deb === true) {
            console.log('deb is now false, removing animation');
            deb = false;
            clear();
        }
    }
}

function animation() {
    var blocksleft = document.querySelectorAll('.expertise__block--left');
    var blocksright = document.querySelectorAll('.expertise__block--right');
    var blockscontent = document.querySelectorAll('.expertise__block');

    for (var k = 0; k < blocksleft.length; k++) {
        blocksleft[k].style.animationDuration = "5s";
        blocksleft[k].style.animationName = "slideleft";
    }
    for (var l = 0; l < blocksright.length; l++) {
        blocksright[l].style.animationDuration = "5s";
        blocksright[l].style.animationName = "slideright";
    }
}

function clear() {
    var blocksleft = document.querySelectorAll('.expertise__block--left');
    var blocksright = document.querySelectorAll('.expertise__block--right');

    for (var k = 0; k < blocksleft.length; k++) {
        blocksleft[k].style.animationName = "";
        blocksleft[k].style.animationDuration = "";
    }
    for (var l = 0; l < blocksright.length; l++) {
        blocksright[l].style.animationName = "";
        blocksright[l].style.animationDuration = "";
    }
}

function draw() {
    document.querySelector('.purpose__text').style.animation = "borders 3s ease 1 forwards";
}
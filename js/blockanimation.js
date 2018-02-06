document.addEventListener('scroll', handle);

function handle() {


    var scrollHeight = window.scrollY;
    var expertiseHeight = document.querySelector('.expertise').scrollHeight;
    var servicesHeight = document.querySelector('.services').scrollHeight;
    console.log('scrollheight: '+scrollHeight);
    console.log('expertiseHeight: '+expertiseHeight);
    console.log('servicesHeight: '+servicesHeight);

    if (scrollHeight > expertiseHeight) {
        animation();
        //setTimeout(clear, 6000);
    }
    if (scrollHeight > servicesHeight && scrollHeight < expertiseHeight){
        clear();
    }
}

function animation() {
    //TODO: activate this function when scrolled and you got focus on the blocks
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
    //TODO: activate clear when scrolled away from the blocks
    console.log("You scrolled");
}

function clear() {
    var blocksleft = document.querySelectorAll('.expertise__block--left');
    var blocksright = document.querySelectorAll('.expertise__block--right');
    var blockscontent = document.querySelectorAll('.expertise__block');

    for (var i = 0; i < blockscontent.length; i++) {
        blockscontent[i].style.animationDuration = "";
    }
    for (var k = 0; k < blocksleft.length; k++) {
        blocksleft[k].style.animationName = "";
    }
    for (var l = 0; l < blocksright.length; l++) {
        blocksright[l].style.animationName = "";
    }
}




document.addEventListener('scroll', animation);


function handle() {

}
function animation() {
    //TODO: activate this function when scrolled and you got focus on the blocks
    var blocksleft = document.getElementsByClassName('expertise__slideleft');
    var blocksright = document.getElementsByClassName('expertise__slideright');
    var blockscontent = document.getElementsByClassName('expertise__content');

    for (var i = 0; i<blockscontent.length;i++){
        blockscontent[i].style.animationDuration = "5s";
    }
    for (var k = 0; k<blocksleft.length;k++){
        blocksleft[k].style.animationName = "slideleft";
    }
    for (var l = 0; l<blocksright.length;l++){
        blocksright[l].style.animationName = "slideright";
    }
    setTimeout(clear,6000);
    //TODO: activate clear when scrolled away from the blocks
    console.log("You scrolled");
}

function clear() {
    var blocksleft = document.getElementsByClassName('expertise__slideleft');
    var blocksright = document.getElementsByClassName('expertise__slideright');
    var blockscontent = document.getElementsByClassName('expertise__content');

    for (var i = 0; i<blockscontent.length;i++){
        blockscontent[i].style.animationDuration = "";
    }
    for (var k = 0; k<blocksleft.length;k++){
        blocksleft[k].style.animationName = "";
    }
    for (var l = 0; l<blocksright.length;l++){
        blocksright[l].style.animationName = "";
    }}



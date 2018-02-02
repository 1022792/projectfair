var blocks = document.getElementsByClassName('resources__content');
console.log(blocks.length);
    if (blocks.length >= 6){
        for(var x = 6; x < blocks.length; x++){
            blocks[x].style="display:none;";
        }
    }

function more() {
    for (var z = 6; z < blocks.length; z++){
        blocks[z].style="";
    }
}
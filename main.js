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
var deb = false;

document.addEventListener('scroll', handle);

function handle() {

    var scrollHeight = window.scrollY;
    var expertiseHeight = document.querySelector('.expertise').scrollHeight;
    var servicesHeight = document.querySelector('.services').scrollHeight;

    if (scrollHeight > expertiseHeight) {
        if (deb === false) {
            deb = true;
            console.log("BIEM");
            animation();
        } else console.log("is false");
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



window.onload=function(){
    document.getElementById("button").addEventListener("click", showBoxes);
};

function showBoxes() {

    var hiddenBoxes = document.getElementsByClassName("hidden");

    if (hiddenBoxes[0].style.display === "none") {

        for (i = 0; i < hiddenBoxes.length; i++){
            hiddenBoxes[i].style.display = "inline-block";
        }
        button.innerHTML = "Show less"
    }
    else {
        for (i = 0; i < hiddenBoxes.length; i++){
            hiddenBoxes[i].style.display = "none";
        }
        button.innerHTML = "Show more"
    }
}
'use strict';
function verify() {
    var contactName = document.getElementById('contactName').value;
    var contactEmail = document.getElementById('contactEmail').value;

    var namePattern = new RegExp(/[a-zA-Z]/);
    var mailPattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i);

    var verifiedEmail = contactEmail.match(mailPattern);
    var verifiedName = contactName.match(namePattern);

    if (verifiedEmail !== null && verifiedName !== null){
        alert('Verified!');
    } else {
        alert('Not verified!');
    }
}
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

var listItems = document.querySelectorAll('.goTo');

for (var i = 0; i < listItems.length; i++) {

    listItems[i].addEventListener('click', jumpToSection);
}

function jumpToSection() {

    if(this.dataset.scroll === "top"){
        window.scrollTo({behavior : "smooth", top : 0 });
    }
    else{
        var className = '.'+ this.dataset.scroll;

        document.querySelector(className).scrollIntoView({behavior: "smooth"});
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
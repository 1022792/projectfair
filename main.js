var blocks = document.getElementsByClassName('resources__content');
function more() {
     if (blocks.length >= 6){
        for(var x = 6; x < blocks.length; x++){
            blocks[x].style="display:none;";
        }
    }
  }

document.addEventListener('scroll', animation);

function animation() {
    document.getElementById('animationStyles').innerHTML = '';
    document.getElementById('animationStyles').innerHTML = "@keyframes slideleft{ from { margin-left: 1500px; } to { margin-left: 400px; } }";
    document.getElementById('animationStyles').innerHTML += "@keyframes slideright{ from { margin-left:-1500px; } to { margin-left:900px; } }";
    console.log("You scrolled");
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
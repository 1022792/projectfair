
document.addEventListener('scroll', animation);

function animation() {
    if (document.getElementById('animationStyles').innerHTML !== ''){
        document.getElementById('animationStyles').innerHTML = '';
    }
    document.getElementById('animationStyles').innerHTML = "@keyframes slideleft{ from { margin-left: 1500px; } to { margin-left: 400px; } }";
    document.getElementById('animationStyles').innerHTML += "@keyframes slideright{ from { margin-left:-1500px; } to { margin-left:900px; } }";
    console.log("You scrolled");
}




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
var listItems = document.querySelectorAll('.menu__link');
console.log(listItems.length);

for (var i = 0; i < listItems.length; i++) {

    listItems[i].addEventListener('click', jumpToSection);
}

function jumpToSection() {

    var className = '.'+ this.dataset.test;

    document.querySelector(className).scrollIntoView({behavior: "smooth"});

}
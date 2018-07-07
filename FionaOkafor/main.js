var slides = document.getElementsByClassName("slide");
var tabs = document.querySelectorAll(".tabs");
var backTabs = document.getElementsByClassName("back-button");



function setScreen(num) {


    // Move slides
    let change = (num-1) * -100;

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(" + change + "%)";
    }
}







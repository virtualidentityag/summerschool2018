
var myVar = setInterval(setColor, 300); 
var count =0;
function setColor() {
  var x = document.getElementById("dumdumdamdam");
  x.style.backgroundColor = x.style.backgroundColor == "rgb(10, 50, 30)" ? "rgb(40, 50, 90)" : "rgb(10, 50, 30)";
  count++;	
  if (count==7){
  clearInterval(myVar);
  }
}

//To the application
var myVar2 = setInterval(movElement, 300); 
var count2 =0;
function movElement() {
  var x2 = document.getElementById("btn-application");
	if(x2.className == "icono godown active"){
		x2.className = "icono"+ " godown"+" reverse"; 
	}else{
		x2.className = "icono"+ " godown"+" active"; 
	}
  	count2++;	
  	if (count2==7){
  	clearInterval(myVar2);
  }
}


function onClick(picture) {
  document.getElementById("picture").src = picture.src;
  document.getElementById("picalldisplayed").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = picture.alt;
}

window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavBar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "barexpand" + " animate-top" + " backgreen" + " bar";
    } else {
        navbar.className = navbar.className.replace(" animate-top backgreen bar", "");
    }
}
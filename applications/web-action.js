
$("body").delay(100).animate({"opacity": "1"}, 700);


/* IF MOBILE SIZE SEND TO PAGE 2*/

function myFunction(x) {
    if (x.matches) { // If media query matches

        loading();
    }
}

var x = window.matchMedia("(max-width: 412px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



var start = true;

/* SPEECH BUBBLE */
var bubble1 = document.getElementById("pixel-bubble_part1");
var bubble2 = document.getElementById("pixel-bubble_part2");
var bubble3 = document.getElementById("pixel-bubble_part3");


window.setInterval(function(){

    if(start == true){ 
        if (bubble1.style.visibility == "visible"){

            bubble1.style.visibility = "hidden";
            bubble2.style.visibility = "visible";
        }else{

            bubble1.style.visibility = "visible";
            bubble2.style.visibility = "hidden";
        }
    }

},3000);


/* Superman animation */

var p0 = document.getElementById("part0");
var p1 = document.getElementById("part1");
var p2 = document.getElementById("part2");
var p3 = document.getElementById("part3");
var p4 = document.getElementById("part4");
var p5 = document.getElementById("part5");
var p6 = document.getElementById("part6");
var final = document.getElementById("final");

p1.style.visibility = "hidden";
p2.style.visibility = "hidden";
p3.style.visibility = "hidden";
p4.style.visibility = "hidden";
p5.style.visibility = "hidden";
p6.style.visibility = "hidden";
final.style.visibilty = "hidden";

function avatar_waving(){

    window.setTimeout(function(){
        p0.style.visibility = "hidden";
        p1.style.visibility = "visible";

    },1000);

    window.setTimeout(function(){
            
        p1.style.visibility = "hidden";
        p2.style.visibility = "visible";

    },1100);

    window.setTimeout(function(){
            
        p2.style.visibility = "hidden";
        p3.style.visibility = "visible";

    },1200);

    window.setTimeout(function(){
            
        p3.style.visibility = "hidden";
        p4.style.visibility = "visible";

    },1300);


    window.setTimeout(function(){
            
        p4.style.visibility = "hidden";
        p5.style.visibility = "visible";

    },1400);

    window.setTimeout(function(){
            
        p5.style.visibility = "hidden";
        p6.style.visibility = "visible";

    },1500);

    window.setTimeout(function(){
            
        p6.style.visibility = "hidden";
        p5.style.visibility = "visible";

    },1600);

    window.setTimeout(function(){
            
        p5.style.visibility = "hidden";
        p6.style.visibility = "visible";

    },1700);

    window.setTimeout(function(){
            
        p6.style.visibility = "hidden";
        final.style.visibility = "visible";
    },1900);
}

avatar_waving();

function avatar_bye_waving(){

    window.setTimeout(function(){
            
        p0.style.visibility = "hidden";
        p1.style.visibility = "visible";

    },0);

    window.setTimeout(function(){
            
        p1.style.visibility = "hidden";
        p2.style.visibility = "visible";

    },100);

    window.setTimeout(function(){
            
        p2.style.visibility = "hidden";
        p3.style.visibility = "visible";

    },200);

    window.setTimeout(function(){
            
        p3.style.visibility = "hidden";
        p4.style.visibility = "visible";

    },300);


    window.setTimeout(function(){
            
        p4.style.visibility = "hidden";
        p5.style.visibility = "visible";

    },400);

    window.setTimeout(function(){
            
        p5.style.visibility = "hidden";
        p6.style.visibility = "visible";

    },500);

    window.setTimeout(function(){
            
        p6.style.visibility = "hidden";
        p5.style.visibility = "visible";

    },600);

    window.setTimeout(function(){
            
        p5.style.visibility = "hidden";
        p6.style.visibility = "visible";

    },700);

    window.setTimeout(function(){
            
        p6.style.visibility = "hidden";
        final.style.visibility = "visible";

    },900); 

}

/* Superman animation END */

/*---------------------------------------------------------*/

/* bird 1 animation */

var bird0 = document.getElementById("pixel-bird_0");
var bird1 = document.getElementById("pixel-bird_1");

bird0.style.visibility = "visible";
bird1.style.visibility = "hidden";

window.setInterval(function(){

    if(bird1.style.visibility == "hidden"){
        bird1.style.visibility = "visible";
        bird0.style.visibility = "hidden";
    }else{
        bird1.style.visibility = "hidden";
        bird0.style.visibility = "visible";
    }   

},500);



/* bird 2 animation */

var bird2 = document.getElementById("pixel-bird2_0");
var bird3 = document.getElementById("pixel-bird2_1");
bird2.style.visibility = "visible";
bird3.style.visibility = "hidden";

window.setInterval(function(){

    if(bird3.style.visibility == "hidden"){
        bird3.style.visibility = "visible";
        bird2.style.visibility = "hidden";
    }else{
        bird3.style.visibility = "hidden";
        bird2.style.visibility = "visible";
    }

},500);

/* bird animations end */


/*------------------------------------------------------------------------------------------------*/

/*toggle switch action 

var switch_button = document.getElementById("toggle");
var pixel_body = document.getElementById("pbody");

switch_button.onclick = function(){
    if (switch_button.checked) {
        $("body").delay(100).animate({"opacity": "0"}, 700);
    };

    setTimeout(function () {
       window.location.href = "page/index.html"; //will redirect to your blog page (an ex: blog.html)
    }, 1200); //will call the function after 2 secs.
} */






/* My alert function*/

function MyAlert(){

    alert("Work in progress! Please be patient")
}

/* My alert function end */





/*--------------------------------------------------------------------------*/




/* menu selection functions */

function Starthover(element) {
  element.setAttribute('src', 'img/start1.png');
}

function Startunhover(element) {
  element.setAttribute('src', 'img/start0.png');
}

function hover(element) {
  element.setAttribute('src', 'img/resume1.png');
}

function unhover(element) {
  element.setAttribute('src', 'img/resume0.png');
}

function QuitHover(element) {
  element.setAttribute('src', 'img/quit1.png');
}

function QuitUnHover(element) {
  element.setAttribute('src', 'img/quit0.png');
}

/* menu selection functions end */




/*------------------------------------------------------------------------------*/





/* LOADING SCREEN */

function loading(){

    $("#loading_screen").css("display","block");
    $("#loading_box").css("display","block");
    $("#loading_box_fill").css("display","block");
    $("#loading_message").css("display","block");

    $(function(){
        $('#loading_box_fill').animate({
            width: '100%'
        }, 5000)
    })

    window.setTimeout(function(){

        window.open("page/index.html","_self");

    },5100);
}

/* LOADING SCREEN end*/






/*------------------------------------------------------------------------------*/








/* SOCIAL MEDIA FUNCTIONS */



function fb_link(){

    window.open("https://www.facebook.com/nj.jn54","_self");
}

function git_link(){

    window.open("https://github.com/bdikici","_self");
}

function linkedin_link(){

    window.open("https://www.linkedin.com/in/berk-dikici-91ab6b136?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Be2O%2BVALJSQKpyKcRqSEozA%3D%3D","_self");
}



/* SOCIAL MEDIA FUNCTIONS END end*/






/*------------------------------------------------------------------------------*/


//Quitegame button enable after avatar animation

window.setTimeout(function(){

    document.getElementById("quitgame").setAttribute("onclick","leaving();");
},1910);



/* LEAVING WEBPAGE ANIMATION */

var white_screen = document.getElementById("white_screen");
var dark_screen = document.getElementById("dark_screen");


function leaving(){

    start = false;

    final.style.visibility = "hidden";
    bubble1.style.visibility = "hidden";
    bubble2.style.visibility = "hidden";
    bubble3.style.visibility = "visible";


    avatar_bye_waving();

    //block quitegame button to be pressed multiple times
    $("#quitgame").attr("onclick","");

    window.setTimeout(function(){
        $("#dark_screen").css("display","block");
        $("#white_screen").css("display","block");
        
        $('#white_screen').animate({
            //51% for chrome
            top: "49%"
        }, {duration: 200, queue: false});

        $('#white_screen').animate({
            //51% for chrome
            height: "0.2%"
        }, {duration: 200, queue: true});

    },1100);


    window.setTimeout(function(){

        $('#white_screen').animate({
            //51% for chrome
            width: "0%"
        }, {duration: 100, queue: false});

        $('#white_screen').animate({
            //51% for chrome
            left: "49%"
        }, {duration: 100, queue: false});

    },1400);

    window.setTimeout(function(){

        window.open("https://www.google.de","_self");
    }, 1900);

}

/* LEAVING WEBPAGE ANIMATION END*/
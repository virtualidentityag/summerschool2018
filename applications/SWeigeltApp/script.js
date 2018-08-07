/**
 * Created by PC 10 on 25.07.2018.
 */
/*Menu*/
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/*fade-in fade-out*/
var TIME = 2000;
function fade(elementName) {
    //current element
    var element = document.getElementById(elementName);

    //element contains displayNone
    if (element.classList.contains("displayNone")){
        var nodes = document.querySelectorAll('main > section'); //sections

        for(var i = 0 ; i < nodes.length ; i++){

            //section contains not display displayNone
            if (!nodes[i].classList.contains('displayNone')){

                //remove fade-in if exist
                if (nodes[i].classList.contains('fade-in')){
                    nodes[i].classList.remove('fade-in');
                }

                nodes[i].classList.add('fade-out'); //current element fade-out
                setTimeout(changeOpacity, TIME, nodes[i], element);

                function changeOpacity(node, element) {
                    node.classList.add('displayNone'); //current element add displayNone
                    node.classList.remove('fade-out'); //current element remove fade-out

                    element.style.opacity = 0; //new element opaccity 00
                    element.classList.remove('displayNone'); //new element remove display none
                    element.classList.add('fade-in'); //new element fade in

                    setTimeout(function () {
                        element.style.opacity = 1; //new element opacitz 1
                    },TIME)
                }
            }
        }
    }
}
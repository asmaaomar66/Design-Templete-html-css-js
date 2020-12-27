function HoverButton (){
    document.getElementById("btn").style.backgroundColor = "#96dac8" ;
}
function Hover (){
    document.getElementById("btn").style.backgroundColor = "#00BC8A" ; 
}
function show() {
    document.getElementById("btn1").style.visibility = "visible" ;
}
function hide() {
    document.getElementById("btn1").style.visibility = "hidden" ;
}
var n = 0 ; 
var v = 0 ; 
var r = 0 ; 

function Hovered () {
    n = n+1 ; 
    document.getElementById("img1").innerHTML = n ;
}
function Hover () {
    v = v+1 ; 
    document.getElementById("img2").innerHTML = v ;
}
function Hove () {
    r = r+1 ; 
    document.getElementById("img3").innerHTML = r ;
}
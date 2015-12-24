/*

   Author:  matt delashaw
   Date:    4/30/15

*/

function getStyle(object, styleName) {
   if (window.getComputedStyle) {
      return document.defaultView.getComputedStyle(object, null).getPropertyValue(styleName);
   } else if (object.currentStyle) {
	   return object.currentStyle[styleName];
   }
}

var scrollButton, diffX;
//window.onload = setup;

function setup(){
	scrollButton = document.getElementById("button");
	scrollButton.style.top = getStyle(scrollButton, "top");
	scrollButton.style.left = getStyle(scrollButton, "left");
	scrollButton.style.cursor = getStyle(scrollButton, "pointer");
	scrollButton.addEventListener("mousedown", grabIt);
}

function grabIt(e){
	var evt = e || window.event;
	var mouseX = evt.clientX;
	diffX = parseInt(scrollButton.style.left) - mouseX;
	scrollButton.addEventListener("mousemove", moveIt);
	scrollButton.addEventListener("mousedown", dropIt);
}

function moveIt(e){
	var evt = e || window.event;
	var mouseX = evt.clientX;
	var buttonPosX = mouseX + diffX;
	showSlide(buttonPosX);
}

function showSlide(x){
	if(x < 20){
		x = 0;
	}else if(x > 60){
		x = 60;
	}
	scrollButton.style.left = x+"px";
	var i = Math.floor(x/12);
	document.getElementById("photo").src = "images/house_"+i+".JPG";
}

function dropIt(){
	scrollButton.removeEventListener("mousedown", moveIt)
}

/*

   Author:  matt delashaw 
   Date:     4/30/15

*/	

//window.onload = rolloverinit;

function rolloverinit(){
	var slides = document.getElementsByClassName("slide");
	for(var i=0; i < slides.length; i++){
		createRollover(slides[i]);
	}
}

function createRollover(thumb){
	thumb.over = new Image();;
	thumb.out = new Image();
	thumb.over.src = thumb.src.replace(/_orig/, "_next");
	thumb.onmouseover = function(){
		thumb.src = thumb.over.src;
	}
	thumb.out.src = thumb.src;
	thumb.onmouseout = function(){
		thumb.src = thumb.out.src;
	}
}

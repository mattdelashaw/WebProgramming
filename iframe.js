/*

   Author:  matt delashaw
   Date:    5/2/15

*/

//window.onload = setupFrame;

function setupFrame(){
	var allAreas = document.getElementsByTagName("area");
	for(var i = 0; i < allAreas.length; i++){
		allAreas[i].index = i;
		allAreas[i].onmouseover = writeFrame;
		allAreas[i].onmouseout = clearFrame;
	}
}

function writeFrame(){
	var areaIndex = this.index;
	var frameWin = document.getElementById("places").contentWindow;
	var frameDoc = frameWin.document;
	frameDoc.getElementById("docTitle").innerHTML = title[areaIndex];
	frameDoc.getElementById("docSummary").innerHTML = summary[areaIndex];
}

function clearFrame(){
	var areaIndex = this.index;
	var frameWin = document.getElementById("places").contentWindow;
	var frameDoc = frameWin.document;
	frameDoc.getElementById("docTitle").innerHTML = "";
	frameDoc.getElementById("docSummary").innerHTML = "";	
}

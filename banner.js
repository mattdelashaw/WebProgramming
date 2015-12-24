/*

   Author: matt delashaw
   Date:   5/2/15

*/

var nextAd;

//window.onload = makeBannerAds;

function makeBannerAds(){
	var bannerBox = document.createElement("div");
	bannerBox.id = "bannerBox";
	for(var i = 0; i < adURLs.length; i++){
		var bannerAd = document.createElement("div");
		bannerAd.className = "bannerAd";
		var aLink = document.createElement("a");
		aLink.href = adURLs[i];
		var adImage = document.createElement("img");
		adImage.src = "images/banner"+i+".png";
		bannerAd.style.zIndex = i;
		aLink.appendChild(adImage);
		bannerAd.appendChild(aLink);
		bannerBox.appendChild(bannerAd);
	}
	document.body.appendChild(bannerBox);
	setInterval("changeBannerAd()", 5000);
}

function changeBannerAd() {
	var allAds = document.getElementById("bannerBox").childNodes;
   	for (var i = 0; i < allAds.length; i++) {
      	if (allAds[i].style.zIndex == 0) {
        	 allAds[i].style.top = "-50px";
        	 nextAd = allAds[i];
      	}
  	}
  	for (var i = 0; i < allAds.length; i++) {
   	 	allAds[i].style.zIndex--;
    	if (allAds[i].style.zIndex < 0) allAds[i].style.zIndex = allAds.length - 1;
   	}
   	var timeDelay = 0;
	for (var i = -50; i <= 0; i++){
		setTimeout("moveNextAd(" + i + ")", timeDelay);
		timeDelay +=15;
	}
}

function moveNextAd(top){
	nextAd.style.top = top+"px";
}

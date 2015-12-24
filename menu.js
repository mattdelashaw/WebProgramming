/*

   Author: Matt Delashaw   
   Date:  4/30/2015    

*/
//window.onload = setTabs;
var currentTab = null;
var maxZ = 1;

function setTabs(){
	var menuTabs = [];
	var allElements = document.getElementsByTagName('*');
	for(var i = 0; i < allElements.length; i++){
		if(allElements[i].className == "tab"){
			menuTabs.push(allElements[i]);
		}
	}
	currentTab = menuTabs[0];
	for(var ii = 0; ii < menuTabs.length; ii++){
		menuTabs[ii].onmouseover = showTab;
	}
}

function showTab(){
	maxZ++;
	var tabList = this.getElementsByTagName('ul')[0];
	tabList.style.zIndex = maxZ;
	currentTab = tabList;
}

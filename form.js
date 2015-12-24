/*
	author: matt delashaw
	date: 5/2/15
*/

function initPage(){
	document.forms["register"].onsubmit = validateForm;
}

function validateForm(){
	var name = /\d+/g;
	var age = /\D+/g;
	var sym = /\W+/g;
	var x = document.forms["register"]["name"].value;
	    if (x == null || x == "") {
	        alert("Name must be filled out");
	        return false;
	    } else if (name.test(x) || sym.test(x)){
	    	alert("Name must have letters");
			return false;
	    }

	var y = document.forms["register"]["age"].value;
		if (y == null || y == "") {
		    alert("Age must be filled out");
		    return false;
		}else if (age.test(y) || sym.test(y)){
			alert("Age must be numbers, don't care how old");
			//I could make it check for certain ages but ill do that later if i have time
			return false;
		}
}

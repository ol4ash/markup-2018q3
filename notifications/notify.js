

setTimeout(function(){show();}, 0);

var show = function() {
    return document.getElementById("mydiv").className = "notificationVisible"
    }
var hide = function() {
    return document.getElementById("mydiv").className = "notification"
    }
var check = function(){
	document.getElementById("check").className = "checkon"
	return  setTimeout(function(){hide();}, 200);
}


let idArr=["circle1","circle2","circle3","circle4","circle5"]

var previous = function(){
	let active = document.querySelector('.circleon').id;
	let a=idArr.indexOf(active);
	for (let i=0; i<idArr.length; i++){
		document.getElementById(idArr[i]).className = "circle"
	}
	if (a===0){document.getElementById(idArr[0]).className = "circleon"}
	else {document.getElementById(idArr[a-1]).className = "circleon"
		  document.getElementById("text").innerHTML = arr[a-1];}

}

var next = function(){
	let active = document.querySelector('.circleon').id;
	let a=idArr.indexOf(active);
	for (let i=0; i<idArr.length; i++){
		document.getElementById(idArr[i]).className = "circle"
	}
	if (a===4){document.getElementById(idArr[4]).className = "circleon"}
	else {document.getElementById(idArr[a+1]).className = "circleon";
	      document.getElementById("text").innerHTML = arr[a+1];}
}



// let ids = document.getElementsByClassName("circle");
// let idsarr=

// // var ids = [].map.call(vehicles, function(elem) {
// //   return elem.id;  
// // });
// //console.log(arrCircles);
// console.log(ids);
// console.log(idsarr);


var select = function(selected_id) {
	for (let i=0; i<idArr.length; i++){
		document.getElementById(idArr[i]).className = "circle"
	}
	document.getElementById(selected_id).className = "circleon"
	var a=idArr.indexOf(selected_id);
	document.getElementById("text").innerHTML = arr[a];
}






	//return ("circle1").className = "circleon"







var arr = [
"Ten little Indian boys went out to dine;<br>One choked his little self and then there were nine.Nine little Indian boys sat up very late;<br>One overslept himself and then there were eight.",
"Eight little Indian boys travelling in Devon; <br>One said he'd stay there and then there were seven.Seven little Indian boys chopping up sticks;<br>One chopped himself in halves and then there were six.",
"Six little Indian boys playing with a hive;<br>A bumblebee stung one of them and then there were five.Five little Indian boys going in for law;<br>One got in Chancery and then there were four.",
"Four little Indian boys going out to sea;<br>A red herring swallowed one and then there were three.Three little Indian boys walking in the zoo;<br>A big bear hugged one and then there were two.",
"Two little Indian boys sitting in the sun;<br>One got all frizzled up and then there was one.One little Indian boy left all alone;<br>He went and hanged himself and then there were none."
]
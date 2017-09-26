/*for(var i = 0; i < 101; i++){
	if(i % 15 == 0){
		document.body.innerHTML +="FizzBuzz";
	} else if( i % 3 == 0){
		document.body.innerHTML +="Fizz";
	} else if( i % 5 == 0){
		document.body.innerHTML +="Buzz";
	} else document.body.innerHTML += i;
	document.innerHTML += "<br>"
}*/

/*var wut = document.getElementsByName("a");
var btn = document.getElementById("btn");
var b = true;
btn.onclick = function(){
	console.log(wut);
	for(var i = 0; i < wut.length; i++){
		wut[i].className = 'wut';
	}
}
btn.onclick = function(){
	var input = document.getElementById('input');
	input.setAttribute('type', 'button');
	input.onclick = function(){input.setAttribute('value', 'Kot zdycha na dachu');}
	wut.forEach(zmien);
	if (b) b=false;
	else b = true;
}

function zmien(element){
	if(b){element.className = 'wut'; b = false;}
	else {element.className = 'wut2'; b=true;}
}

var lista = document.getElementsByTagName('ol')[0];
var first = lista.firstElementChild;
first.setAttribute('class', 'wut3');*/

var div = document.getElementById("block");
var namea = document.getElementById("name");
var surname = document.getElementById("surname");
var login = document.getElementById("login");
var email = document.getElementById("email");
var email2 = document.getElementById("email2");
var pass = document.getElementById("pass");
var pass2 = document.getElementById("pass2");
var box = document.getElementById("box");

/*window.onload = function(){
	alert("nie powinieneś żyć");
}*/

namea.addEventListener("blur", sth);

function sth(){
	console.log("ss");
	email.disabled = true;
}

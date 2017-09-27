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
var result = document.getElementById("result");
var namea = document.getElementById("name");
var surname = document.getElementById("surname");
var login = document.getElementById("login");
var email = document.getElementById("email");
var email2 = document.getElementById("email2");
var pass = document.getElementById("pass");
var pass2 = document.getElementById("pass2");
var box = document.getElementById("box");
var date = document.getElementById("date");
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var fieldset = document.getElementById("fieldset");
var filled = 0;

namea.onblur = function(){
	if(namea.value.length < 2) div.textContent = "wpisz poprawne imie";
	else{
		namea.disabled = true;
		div.textContent="";
		filled++;
	}
}
surname.onblur = function(){
	if(surname.value.length < 2) div.textContent = "wpisz poprawne nazwisko";
	else{
		surname.disabled = true;
		div.textContent="";
		filled++;
	}
}
login.onblur = function(){
	if(login.value.length < 2) div.textContent = "wpisz poprawny login";
	else{
		login.disabled = true;
		div.textContent="";
		filled++;
	}
}
email.onblur = function(){
	if(email.value.length < 2) div.textContent = "wpisz poprawny email";
	else{
		email.disabled = true;
		div.textContent="";
		filled++;
	}
}
pass.onblur = function(){
	if(pass.value.length < 5) div.textContent = "wpisz poprawne hasło";
	else{
		pass.disabled = true;
		div.textContent="";
		filled++;
	}
}
box.onchange = function(){
	if(box.checked) btn.disabled = false;
	else btn.disabled = true;
}
btn2.onclick = function(){
	var block = document.getElementsByTagName('input');
	for(var i = 0; i < block.length; i++ ){
		if(block[i].disabled == true){
			block[i].disabled = false;
			block[i].value = "";
			filled--;
		}
	}
}
btn.onclick = function(){
	console.log(filled);
	if(filled != 5){
		div.textContent = "wypełnij wszystkie pola";
	}else{
		fieldset.style.display = "none";
		result.innerHTML += "imie: " +namea.value + "<br>";
		result.innerHTML += "nazwisko: " +surname.value + "<br>";
		result.innerHTML += "login: " +login.value + "<br>";
		result.innerHTML += "email: " +email.value + "<br>";
		result.innerHTML += "hasło: " +pass.value;
	}
}


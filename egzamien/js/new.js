var a = document.getElementById("one");
var b = document.getElementById("two");

function empty(){
	if(a.value == "" || b.value == "")
		alert("Proszę uzupełnić obie liczby.")
	else return true;
}

function plus(){
	if(empty()){
		var wynik = Number(a.value) + Number( b.value);
		alert("wynik: "+ wynik);
	}
}

function minus(){
	if(empty()){
		var wynik = Number(a.value) - Number( b.value);
		alert("wynik: "+ wynik);
	}
}

function sqrt(){
	if(empty()){
		var wynik = Math.pow(Number(a.value),Number( b.value));
		alert("wynik: "+ wynik);
	}

}

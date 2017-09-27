var car = document.getElementById("car");
var result = document.getElementById("res");

car.onchange = function(){
	result.innerHTML = car.value;
}

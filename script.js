let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let removalButtons = document.querySelectorAll(".removalButton")
let resultValue = document.querySelector(".result");
let currentOperation = document.querySelector(".currentOperation");

const operation = {
	add: (a, b)  => Math.round( (a + b) * 100  ) / 100,
	substract: (a, b) => Math.round( (a - b) * 100  ) / 100,
	multiply: (a,b) => Math.round( (a * b) * 100  ) / 100,
	divide: (a,b) => Math.round( (a / b) * 100  ) / 100,
}
const calculator = {
	allClear: function(){
		resultValue.innerHTML = "";
		currentOperation.innerHTML = "";
	} , 
	backspace: function(){
		const newStr = currentOperation.innerHTML.slice(0, -1); 
		currentOperation.innerHTML = newStr;

	} ,
	appendNumber: function(number){
 
		if( currentOperation.innerHTML ==  "" && number == ".") {
			currentOperation.innerHTML = "0."
			
		} else if(number == "." && currentOperation.innerHTML.includes(".")) {
			return
		} else {
			currentOperation.innerHTML += number;
		}
		//currentOperation.innerHTML += number;
	} ,
 
}

// resultValue.addEventListener("click",function(){
// 	resultValue.innerHTML = "asdsa"
// 	currentOperation.innerHTML = "1234"
// })
removalButtons.forEach(function(e){
	e.addEventListener("click", function(){
		if(e.querySelector("p").innerHTML == "AC") {
			calculator.allClear()
		} else {
			calculator.backspace()
		}
	})
})
digits.forEach(function(digit){
	digit.addEventListener("click", function(){
 		calculator.appendNumber(digit.querySelector("p").innerHTML)
 	})
});




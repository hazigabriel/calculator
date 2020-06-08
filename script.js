let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let resultValue = document.querySelector(".result");
let currentOperation = document.querySelector(".currentOperation");
let clearAll = document.querySelector(".clearAll");
let backspace = document.querySelector(".backspace");

let operation = {
	add: (a, b)  => Math.round( (a + b) * 100  ) / 100,
	substract: (a, b) => Math.round( (a - b) * 100  ) / 100,
	multiply: (a,b) => Math.round( (a * b) * 100  ) / 100,
	divide: (a,b) => Math.round( (a / b) * 100  ) / 100,
}


// resultValue.addEventListener("click",function(){
// 	resultValue.innerHTML = "asdsa"
// 	currentOperation.innerHTML = "1234"
// })

// digits.forEach(function(digit){
// 	digit.addEventListener("click", function(){
// 		currentOperation.innerHTML +=  digit.querySelector("p").innerHTML
// 	})
// });

// operators.forEach(function(operator){
// 	operator.addEventListener("click", function(){
// 		let currentOperator = operator.querySelector("p").innerHTML;
// 		if(currentOperator == "/") {
// 			resultValue.innerHTML = divide	(parseInt(resultValue.innerHTML), parseInt(currentOperation.innerHTML));
// 			currentOperation.innerHTML = ""
// 		} else if(currentOperator == "x"){
// 			if(currentOperation.innerHTML == "") {
// 				resultValue.innerHTML += currentOperator;
// 			} else {
// 				resultValue.innerHTML = multiply(parseInt(resultValue.innerHTML), parseInt(currentOperation.innerHTML));
// 				currentOperation.innerHTML = ""
// 			}
		
// 		} else if(currentOperator == "+") {
// 			resultValue.innerHTML = add(parseInt(resultValue.innerHTML), parseInt(currentOperation.innerHTML));
// 			currentOperation.innerHTML = ""
		 
// 		} else if(currentOperator == "-") {
// 			resultValue.innerHTML = substract(parseInt(resultValue.innerHTML), parseInt(currentOperation.innerHTML));
// 			currentOperation.innerHTML = ""
// 		} else if(currentOperator == "."){
// 			alert(" punct")
// 		} else {
// 			alert(" egal")
// 		}
// 	})
// })


// function add(a,b) {
// 	return a+b;
// }
// function substract(a, b) {
// 	return a-b
// //	toAdd.reduce((total,currentDigit) =>  {return total + currentDigit}, 0)
// }
// function multiply(a,b) {
// 	return a * b 
// }
// function divide(a,b) {
// 	return a / b 
// }
// let operate = function(operator, a, b) {
	 


// }
//  
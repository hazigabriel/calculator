let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let removalButtons = document.querySelectorAll(".removalButton")
let resultValue = document.querySelector(".result");
let currentOperationValue = document.querySelector(".currentOperationValue");
let currentOperatorDisplayed = document.querySelector(".currentOperatorDisplayed");

resultValue.innerHTML = ""
const operate = {
	add: (a, b)  => Math.round( (a + b) * 100  ) / 100,
	substract: (a, b) => Math.round( (a - b) * 100  ) / 100,
	multiply: (a,b) => Math.round( (a * b) * 100  ) / 100,
	divide: (a,b) => Math.round( (a / b) * 100  ) / 100,
}
const calculator = {
	allClear: function(){
		resultValue.innerHTML = "";
		currentOperationValue.innerHTML = "";
		currentOperatorDisplayed.innerHTML = ""
	} , 
	backspace: function(){
		if(currentOperationValue.innerHTML == "")  {
			const newStr = resultValue.innerHTML.slice(0, -1); 
			resultValue.innerHTML = newStr;
		} else {
			const newStr = currentOperationValue.innerHTML.slice(0, -1); 
			currentOperationValue.innerHTML = newStr;
		}

	} ,
	appendNumber: function(number){
 
		if( currentOperationValue.innerHTML ==  "" && number == ".") {
			currentOperationValue.innerHTML = "0."
			
		} else if(number == "." && currentOperationValue.innerHTML.includes(".")) {
			return //detects if there is a dot within the current number, and stops the function
		} else if(currentOperatorDisplayed.innerHTML == "") {
			resultValue.innerHTML += number
		} else { 
			currentOperationValue.innerHTML += number;
		}
		
	} ,

 
}
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
operators.forEach(function(currentOp){
	currentOp.addEventListener("click", function(){

		
		let chosenOperator = currentOp.querySelector("p").innerHTML;
		switch(currentOperatorDisplayed.innerHTML) {
			case "/": 
				if(currentOperationValue.innerHTML !== ""){
					resultValue.innerHTML = operate.divide(resultValue.innerHTML, currentOperationValue.innerHTML);
					currentOperatorDisplayed.innerHTML = chosenOperator;
					currentOperationValue.innerHTML = ""
					
				} else {
					currentOperatorDisplayed.innerHTML = chosenOperator
				}
				break;
			case "x":
				if(currentOperationValue.innerHTML !== ""){
					resultValue.innerHTML = operate.multiply(resultValue.innerHTML, currentOperationValue.innerHTML);
					currentOperatorDisplayed.innerHTML = chosenOperator;
					currentOperationValue.innerHTML = ""
				} else {
					currentOperatorDisplayed.innerHTML = chosenOperator
				}
				break;
			case "+":
				if(currentOperationValue.innerHTML !== ""){
					resultValue.innerHTML = operate.add(parseInt(resultValue.innerHTML), parseInt(currentOperationValue.innerHTML));
					currentOperatorDisplayed.innerHTML = chosenOperator
					currentOperationValue.innerHTML = "";
				} else {
					currentOperatorDisplayed.innerHTML = chosenOperator
				}
				break;
			case "-":
				if(currentOperationValue.innerHTML !== ""){
					resultValue.innerHTML = operate.substract(resultValue.innerHTML, currentOperationValue.innerHTML);
					currentOperatorDisplayed.innerHTML = chosenOperator;
					currentOperationValue.innerHTML = ""
				} else {
					currentOperatorDisplayed.innerHTML = chosenOperator
				}
				break;
			default: 
				break
		}

		switch(chosenOperator) {
			case "/": 
				currentOperatorDisplayed.innerHTML = chosenOperator;
				break;
			case "x":
				currentOperatorDisplayed.innerHTML = chosenOperator;
				break;
			case "+":
				currentOperatorDisplayed.innerHTML = chosenOperator;
				break;
			case "-":
				currentOperatorDisplayed.innerHTML = chosenOperator;
				break;
			default: 
				break
		}



	})
})


//resultValue.innerText = parseInt(currentOperationValue.innerText) + parseInt(resultValue.innerText) 
//resultValue.innerText = parseInt(resultValue.innerText) / parseInt(currentOperationValue.innerText)
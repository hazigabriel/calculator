let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let removalButtons = document.querySelectorAll(".removalButton")
let resultValue = document.querySelector(".result");
let currentOperationValue = document.querySelector(".currentOperationValue");
let currentOperatorDisplayed = document.querySelector(".currentOperatorDisplayed");
let shouldWeDel = 1; //with the backspace function, if we have values assigned to both
//currentOperation & resultOperation, and we remove all digits from the currentOperation
//the function starts removing digits from the result value, which should not be modified
//if it's the result of an operation. using this toggle, after an operator is assigned to result we are unable to delete digits

const operate = {
	add: (a, b)  => Math.round( (a + b) * 100  ) / 100 , 
	substract: (a, b) => Math.round( (a - b) * 100  ) / 100,
	multiply: (a,b) => Math.round( (a * b) * 100  ) / 100,
	divide: (a,b) => Math.round( (a / b) * 100  ) / 100, // by running this ecuation on our function
													    // the number returned has max of 2 decimals
}
const calculator = {
	allClear: function(){
		resultValue.innerHTML = "";
		currentOperationValue.innerHTML = "";
		currentOperatorDisplayed.innerHTML = "";
		shouldWeDel = 1;
	} , 
	backspace: function(){
		if(currentOperationValue.innerHTML == "")  {
			if(shouldWeDel == 1) {
				const newStr = resultValue.innerHTML.slice(0, -1); 
				resultValue.innerHTML = newStr;
			} else {
				 return
			}
		} else {
			const newStr = currentOperationValue.innerHTML.slice(0, -1); 
			currentOperationValue.innerHTML = newStr;
		}

	} ,
	appendNumber: function(number){
		// the following code handles where should the number and dot be assigned
        if(currentOperationValue.innerHTML == "" ){

        	if( resultValue.innerHTML ==  "" && number == ".") {
				resultValue.innerHTML = "0."
			
			} else if(number == "." && resultValue.innerHTML.includes(".") ) {
				return //detects if there is a dot within the current number, and stops the function
			} else if(currentOperatorDisplayed.innerHTML == "") {
				resultValue.innerHTML += number
			} else { 
				currentOperationValue.innerHTML += number;
			}
        } else {
        	if( number == "." && currentOperationValue.innerHTML ==  "" ) {
				currentOperationValue.innerHTML = "0."
			
			} else if(number == "." && currentOperationValue.innerHTML.includes(".") ) {
				return //detects if there is a dot within the current number, and stops the function
			} else if(currentOperatorDisplayed.innerHTML == "") {
				resultValue.innerHTML += number
			} else { 
				currentOperationValue.innerHTML += number;
			}

        }
	} ,

 
}
calculator.allClear();
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
		if(resultValue.innerHTML !=- "") {  //if we do not have any value inputed, we cannot assign and display an operator
			switch(currentOperatorDisplayed.innerHTML) {
				case "/": 
					if(currentOperationValue.innerHTML !== ""){
						resultValue.innerHTML = operate.divide(resultValue.innerHTML, currentOperationValue.innerHTML);
						currentOperationValue.innerHTML = ""
						
					} else {
						currentOperatorDisplayed.innerHTML = chosenOperator
					}
					break;
				case "x":
					if(currentOperationValue.innerHTML !== ""){
						resultValue.innerHTML = operate.multiply(resultValue.innerHTML, currentOperationValue.innerHTML); 
						currentOperationValue.innerHTML = ""
					} else {
						currentOperatorDisplayed.innerHTML = chosenOperator
					}
					break;
				case "+":
					if(currentOperationValue.innerHTML !== ""){
						resultValue.innerHTML = operate.add(parseInt(resultValue.innerHTML), parseInt(currentOperationValue.innerHTML)); 
						currentOperationValue.innerHTML = "";
					} else {
						currentOperatorDisplayed.innerHTML = chosenOperator
					}
					break;
				case "-":
					if(currentOperationValue.innerHTML !== ""){
						resultValue.innerHTML = operate.substract(resultValue.innerHTML, currentOperationValue.innerHTML);
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
					shouldWeDel = 0;
					currentOperatorDisplayed.innerHTML = chosenOperator;
					break;
				case "x":
					shouldWeDel = 0;
					currentOperatorDisplayed.innerHTML = chosenOperator;
					break;
				case "+":
					shouldWeDel = 0;
					currentOperatorDisplayed.innerHTML = chosenOperator;
					break;
				case "-":
					shouldWeDel = 0;
					currentOperatorDisplayed.innerHTML = chosenOperator;
					break;
				case "=":
					currentOperatorDisplayed.innerHTML = ""
				default: 
					break
			}
		} else {
			return
		}
	})
})
///bugs to fix:
// when pressing DOt, if we do not have any value assigned to currentOperationValue we should start the line with "0.", instead of just "."
//
//
//
 
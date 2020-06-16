let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let removalButtons = document.querySelectorAll(".removalButton")
let resultValue = document.querySelector(".result");
let currentOperationValue = document.querySelector(".currentOperationValue");
let currentOperatorDisplayed = document.querySelector(".currentOperatorDisplayed");
let shouldWeDel = 1; //with the backspace function, if we have values assigned to both
let wasEqualsPressed = 0; //if = was pressed, we should not add any digits to the current/result value, until an operator is selected
//currentOperation & resultOperation, and we remove all digits from the currentOperation
//the function starts removing digits from the result value, which should not be modified
//if it's the result of an operation. using this toggle, after an operator is assigned to result we are unable to delete digits

const operate = {
	add: (a, b)  => Math.round( (a + b) * 100  ) / 100, 
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
		wasEqualsPressed = 0;
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

//the following two function handle if the dot should be assigned 
//to any of the two displayed values
      	function assignDotToResultVal(){
      		if( resultValue.innerHTML.includes(".") ) {
      			return
      		} else {
      			resultValue.innerHTML += number;
      		}
      	}	

      	function assignDotToCurrentVal(){
      		if( currentOperationValue.innerHTML.includes(".") ) {
      			return
      		} else {
      			currentOperationValue.innerHTML += number;
      		}
      	}
 			//if = was pressed, we should not add any digits to the current/result value, until an operator is selected
 			//the next "if" verify if equals was pressed(1 = true) and if so, stops the appendNumber function
 			if(wasEqualsPressed == 1 ) {  
 				return
 			} else if(number == ".") {

      			if(resultValue.innerHTML == ""){
      				resultValue.innerHTML = "0."
      			} else if(resultValue.innerHTML != "" && currentOperatorDisplayed.innerHTML == "" ){
      				assignDotToResultVal()
      			} else if(currentOperationValue.innerHTML == "" && currentOperatorDisplayed.innerHTML != "") {
      				currentOperationValue.innerHTML = "0."
      			} else {
      				assignDotToCurrentVal()
      			};

      		} else {
      		
	        	if(currentOperatorDisplayed.innerHTML == "") {
					resultValue.innerHTML += number
				} else { 
					currentOperationValue.innerHTML += number;
				}
      		}



    }

 
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
		if(resultValue.innerHTML != "") {  //if we do not have any value inputed, we cannot assign and display an operator
			switch(currentOperatorDisplayed.innerHTML) {
				case "/": 
					if(currentOperationValue.innerHTML !== ""){
						if(currentOperationValue.innerHTML == "0") {
							alert("The calculator broke after trying to divide with 0, we must reload the page :(");
							calculator.allClear();
							wasEqualsPressed = 1;
							currentOperatorDisplayed = "";
						} else {
							resultValue.innerHTML = operate.divide(parseFloat(resultValue.innerHTML), parseFloat(currentOperationValue.innerHTML));
							currentOperationValue.innerHTML = ""
						}
						
					} else {
						currentOperatorDisplayed.innerHTML = chosenOperator
					}
					break;
				case "x":
					if(currentOperationValue.innerHTML !== ""){
						resultValue.innerHTML = operate.multiply(parseFloat(resultValue.innerHTML), parseFloat(currentOperationValue.innerHTML)); 
						currentOperationValue.innerHTML = ""
					} else {
						currentOperatorDisplayed.innerHTML = chosenOperator
					}
					break;
				case "+":
					if(currentOperationValue.innerHTML !== ""){
						resultValue.innerHTML = operate.add(parseFloat(resultValue.innerHTML), parseFloat(currentOperationValue.innerHTML)); 
						currentOperationValue.innerHTML = "";
					} else {
						currentOperatorDisplayed.innerHTML = chosenOperator
					}
					break;
				case "-":
					if(currentOperationValue.innerHTML !== ""){
						resultValue.innerHTML = operate.substract(parseFloat(resultValue.innerHTML), parseFloat(currentOperationValue.innerHTML));
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
					wasEqualsPressed = 0;
					currentOperatorDisplayed.innerHTML = chosenOperator;
					break;
				case "x":
					shouldWeDel = 0;
					wasEqualsPressed = 0;
					currentOperatorDisplayed.innerHTML = chosenOperator;
					break;
				case "+":
					shouldWeDel = 0;
					wasEqualsPressed = 0;
					currentOperatorDisplayed.innerHTML = chosenOperator;
					break;
				case "-":
					shouldWeDel = 0;
					wasEqualsPressed = 0;
					currentOperatorDisplayed.innerHTML = chosenOperator;
					break;
				case "=":
					wasEqualsPressed = 1;
					currentOperatorDisplayed.innerHTML = "";
					break;
				default: 
					break
			}
		} else {
			return
		}
	})
})
///bugs to fix:
// 
// 
// 
//
//if we execute an operation trigger by "=", and we do not selct an operator
//any digit would be assigned to the result value
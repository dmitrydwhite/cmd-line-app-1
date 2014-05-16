var toNum = function(inputString) {
	var nowNum = inputString.parseInt;
	return nowNum;
};

module.exports.add = function(inputArray) {
	var newSum = 0;
	inputArray.forEach(function(n) {
		newSum = newSum + parseFloat(n);
	})
	return newSum;
};



// module.exports.checkOperator = function(oprtr) {
// 	checkVal = oprtr;
// 	switch (checkVal) {
// 		case checkVal === "+":
// 		case checkVal === "-":
// 		case checkVal === "*":
// 		case checkVal === "/":
// 			return checkVal;
// 			break;
// 	};
// };

// module.exports.performOp  = function(num1, num2, oprtr) {
// 	if (oprtr = "+") {return parseInt(num1) + parseInt(num2)}
// 	else if (oprtr = "-") {return parseInt(num1) - parseInt(num2)}
// 	else if (oprtr = "*") {return parseInt(num1) * parseInt(num2)}
// 	else if (oprtr = "/") {return parseInt(num1) / parseInt(num2)}
// };

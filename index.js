

module.exports.add = function(inputArray) {
	var newSum = 0;
	inputArray.forEach(function(n) {
		newSum = newSum + parseFloat(n);
	});
	return newSum;
};

module.exports.subtract = function(inputArray) {
	var diff = inputArray[0] - inputArray[1];
	if (inputArray[2] !== undefined) {
		diff = 'This program can only subtract one number from another' +
		'and will subtract the second from the first.';
	}
	return diff;
};

module.exports.multifly = function(inputArray) {
	var newProd = 1;
	inputArray.forEach(function(n) {
		newProd = newProd * parseFloat(n);
	});
	return newProd;
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



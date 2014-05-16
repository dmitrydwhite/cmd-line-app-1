

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
		diff = 'This program can only subtract one number from another ' +
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

module.exports.divide = function(inputArray) {
	var divdnd = inputArray[0] / inputArray[1];
	if (inputArray[2] !== undefined) {
		divdnd = 'This program can only divide two numbers ' +
		'and will divide the first number entered by the second.';
	}
	return divdnd;
};

module.exports.pert = function(inputArray) {
	var intRate = parseFloat(inputArray[1]) * .01;
	var totalAmount = parseFloat(inputArray[0]) *
		(Math.pow(Math.E, (intRate * parseFloat(inputArray[2]))));
	if (inputArray[3] !== undefined) {
		totalAmount = 'To calculate continously compounding interest, enter ' +
			'the principal in dollars, the interest rate in percent, and the ' +
			'time in years.';
	}
	return totalAmount;
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



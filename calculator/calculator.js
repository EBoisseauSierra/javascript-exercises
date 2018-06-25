function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total, item) => {
		return total + item;
	}, 0);
}

function multiply (array) {
	return array.reduce((total, item) => {
		return total * item;
	}, 1);
}

function power(number, power) {
	if (power < 0) throw new Error("`power` doesn't handle numbers lower than 1");
	let total = 1;
	for (let i = 0; i < power; i++) total *= number;
	return total;
}

function factorial(number) {
	let total = 1;
	for (let i = 1; i <= number; i++) total *= i;
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

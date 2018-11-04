function add (a,b) {
	return a+b;
}

console.log(add(12,65))

function subtract (a,b) {
	return a-b;
}

//computes the sum of the elements of an array
function sum (array) {
	
	return array.reduce(((total, currentValue) => total + currentValue),0);

}

//computes the multiplication of the elements of an array
function multiply (array) {
	return array.reduce(((total, currentValue) => total * currentValue),1);
}

//should return the result of number1 power number 2
function power(number1,number2) {
	return Math.pow(number1,number2);
}

function factorial(input) {
	if (!input) return 1;

	let result=1;
	for (i=input;i>0;i--){
		result*=i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
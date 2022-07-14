// Professional

// All checks are handled simpler and more efficiently
const numberToAccountingStringLogic = (number) => {
	if (number == null) return
	if (number < 0) return `(${Math.abs(number)})`
	return number.toString();
}

console.log(numberToAccountingStringLogic(undefined));
console.log(numberToAccountingStringLogic(-10));
console.log(numberToAccountingStringLogic(0));
console.log(numberToAccountingStringLogic(20));

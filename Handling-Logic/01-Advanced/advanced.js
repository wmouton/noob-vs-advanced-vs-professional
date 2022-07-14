// Advanced
// Function name makes more sense and number variable name good
const numberToAccountingStringLogic = (number) => {
	if (number != null) {
		if (number < 0) {
			return `(${Math.abs(number)})` // Using a template literal (template string) is better than concatenation
		} else {
			return number.toString()
		}
	}
}

console.log(numberToAccountingStringLogic(undefined));
console.log(numberToAccountingStringLogic(-10));
console.log(numberToAccountingStringLogic(0));
console.log(numberToAccountingStringLogic(20));


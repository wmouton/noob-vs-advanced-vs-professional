// Noob
// Function name is vague and n variable is abstract
const toAccountingLogic = (n) => {
	if (n < 0) {
		return '(' + Math.abs(n) + ')'
	} else if (n >= 0) {
		return n.toString();
	}
}

// console.log(numberToAccountingStringLogic(undefined)); // Throws error on undefined type
console.log(toAccountingLogic(-10));
console.log(toAccountingLogic(0));
console.log(toAccountingLogic(20));

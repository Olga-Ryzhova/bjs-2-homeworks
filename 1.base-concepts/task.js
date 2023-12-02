"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;
	arr.push(discriminant);

	if (discriminant < 0) {
		arr = [];
	} else if (discriminant === 0) {
		arr = [-b / (2 * a)];
	} else if (discriminant > 0) {
		arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
	}

	return arr;
}
solveEquation();


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let bodyCredit = amount - contribution;
	let countForFormula = countMonths;

	let percNew = (percent / 100);
	let percentMonths = 1 / 12 * percNew;

	let payment = bodyCredit * (percentMonths + (percentMonths / (((1 + percentMonths) ** countForFormula) - 1)));

	let sum = payment * countMonths;
	
	return Math.round(sum * 100) / 100;
}

calculateTotalMortgage();
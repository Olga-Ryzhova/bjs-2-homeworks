function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);

	result = (arr.reduce((currentSum, currentNumber) => currentSum + currentNumber, 0) / arr.length);
	avg = +(result.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

getArrayParams(1, 2, 3, -100, 10);

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	return arr.reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);
}

summElementsWorker(10, 10, 11, 20, 10);


function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);

	return max - min;
}

differenceMaxMinWorker(10, 10, 11, 20, 10);

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17);

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}

	return sumEvenElement / countEvenElement;
}

averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));
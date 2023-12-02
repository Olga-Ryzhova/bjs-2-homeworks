function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}

		sum += arr[i];
		result = (sum / arr.length);
		avg = +(result.toFixed(2));
	}

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = arr.reduce(function(currentSum, currentNumber) {
		return currentSum + currentNumber;
	}, 0)

	return sum;
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
		func.push(...arrOfArr);
	}

	const arr = func;

	if (arr > maxWorkerResult) {
		maxWorkerResult = arr;
	}

	return maxWorkerResult;
}

makeWork(arr, summElementsWorker);

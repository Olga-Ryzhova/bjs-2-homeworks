// Задача 1

function parseCount(number) {
	if (Number.isNaN(Number.parseFloat(number))) {
		throw new Error('Невалидное значение');
	} else {
		return Number.parseFloat(number);
	}
	
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}

}

// Задача 2

class Triangle {
	constructor(firstSide, secondSide, thirdSide) {
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.thirdSide = thirdSide;
		if ((firstSide + secondSide < thirdSide) || (firstSide + thirdSide < secondSide) || (secondSide + thirdSide < firstSide)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	get perimeter() {
		let perimetrCount = this.firstSide + this.secondSide + this.thirdSide;
		return perimetrCount;
	}

	get area() {
		let halfPerimetr = this.perimeter * 0.5;
		let areaCount = Math.sqrt(halfPerimetr * (halfPerimetr - this.firstSide) * (halfPerimetr - this.secondSide) * (halfPerimetr - this.thirdSide));
		return +(areaCount.toFixed(3));
	}
}

function getTriangle(firstLength, secondLength, thirdLength) {
	try {
		return new Triangle(firstLength, secondLength, thirdLength);
	} catch (error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}



class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.find(number => number.time === time)) {
			console.warn('Уже присутствует звонок на это же время');

		}

		this.alarmCollection.push({
			callback,
			time,
			canCall: true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((element) => {
			if (element.time !== time) {
				return true;
			}
		});
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0, -3);
	}

	start() {
		if (this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((item) => {
				if (item.time === this.getCurrentFormattedTime() && item.canCall) {
					item.canCall = false;
					item.callback();
				}
			})
		}, 1000);
	}

	stop() {
		clearInterval();
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((element) => {
			element.canCall = true;
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}


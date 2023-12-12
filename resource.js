class Resource {

	constructor(price, cpu, type) {
		this.price = price;
		this.cpu = cpu;
		this.type = type;
		this.taskRunning = [];
	}


	setPrice(price) {
		this.price = price;
	}

	setCPU(cpu) {
		this.cpu = cpu;
	}

	setType(type) {
		this.type = type;
	}


	getPrice() {
		return this.price;
	}

	getCPU() {
		return this.cpu;
	}

	getType() {
		return this.type;
	}

}

module.exports = Resource;

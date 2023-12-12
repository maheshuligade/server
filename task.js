class Task {

	constructor(status = 'free', startTime = 0, endTime = 0, resource = null) {
		this.status = status;
		this.startTime = startTime;
		this.endTime = endTime;
		this.allocatedResource = resource;
	}


	getStatus() {
		return this.status;
	}

	getStartTime() {
		return this.startTime;
	}

	getEndTime() {
		return this.endTime;
	}

	getAllocatedResource() {
		return this.allocatedResource;
	}

}

module.exports = Task;

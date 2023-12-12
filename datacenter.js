const _ = require('lodash');
const { AllocationCriteria } = require('./enumuration/allocationcriteria');

class DataCenter {

	constructor(location) {
		this.location = location;
		this.resources = new Set();
	}

	setLocation(location) {
		this.location = location;
	}


	getLocation() {
		return this.location;
	}

	addResource(resource) {
		this.resources.add(resource);
	}

	deleteResource(resource) {
		this.resources.delete(resource);
	}


	getResourcesByFilter(resourceType, filterType = null, filterValue = null) {
		let filteredResources = new Set();
		this.resources.forEach(resource => {
			if (filterType == null || filterType == undefined) {
				if (resource.type === resourceType) {
					filteredResources.add(resource);
				}
			}
			else if (filterType == 'cpu') {
					if (resource.type === resourceType && resource.cpu === filterValue) {
						filteredResources.add(resource);
					}

			} else if (filterType == 'price') {
				if (resource.type === resourceType && resource.price === filterValue) {
					filteredResources.add(resource);
				}
			}
		});

		return filteredResources;

	}

	getAllocatableResource(criteria) {
		let allocatableResourceCPU = -1;
		let allocatableResourcePrice = 10000000000000000000;
		let allocatableResource;
		if (criteria === AllocationCriteria.LEAST_PRICE) {
			this.resources.forEach(resource => {
				if (resource.price < allocatableResourcePrice) {
					allocatableResource = resource;
					allocatableResourcePrice = resource.price;
				}
			});
			return allocatableResource;
		} else if (criteria === AllocationCriteria.BEST_EXECUTION) {
			// let sortedResources = _.sortBy(this.resources, [ 'cpu' ]);
			// sortedResources.forEach(sortedResource => {
			// 	// if (resource.price < minPrice && resource.) {
			// 	// 	return
			// 	// }
			// });

			this.resources.forEach(resource => {
				if (resource.cpu > allocatableResourceCPU) {
					allocatableResource = resource;
					allocatableResourceCPU = resource.cpu;
				}
			});
			return allocatableResource;
		}
	}

	// getAllResources(resourceType, filterType = null, filterValue = null) {
	// 	return this.resources;
	// }

}

module.exports = DataCenter;

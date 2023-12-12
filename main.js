const DataCenter = require('./datacenter');
const Resource = require('./resource');
// const Task = require('./task');
const { AllocationCriteria } = require('./enumuration/allocationcriteria');


function main() {
	const dataCenter = new DataCenter('mumbai');
	const resource1 = new Resource(8, 8, 'SERVER_INSTANCE');
	const resource2 = new Resource(11, 9, 'SERVER_INSTANCE');
	const resource3 = new Resource(12, 9, 'SERVER_INSTANCE');


	// Provide an interface to add/delete different types of the resources to the data center.
	// add resource to data center
	console.log('all resources before add', dataCenter.getResourcesByFilter('SERVER_INSTANCE'));
	dataCenter.addResource(resource1);
	dataCenter.addResource(resource2);
	dataCenter.addResource(resource3);

	console.log('all resources after add', dataCenter.getResourcesByFilter('SERVER_INSTANCE'));

	// delete resource
	dataCenter.deleteResource(resource2);
	console.log('all resources after delete', dataCenter.getResourcesByFilter('SERVER_INSTANCE'));


	// Provide an interface to see all the available resources based on the resource type and resource type specific configuration filter. e.g. SERVER_INSTANCE, 8 (cpu)
	console.log('get resources for SERVER_INSTANCE, 8 cpu', dataCenter.getResourcesByFilter('SERVER_INSTANCE', 'cpu' , 8));


	//Provide an interface to see all the allocated resources based on the resource type. e.g. SERVER_INSTANCE
	console.log('get resources for SERVER_INSTANCE, 8 cpu', dataCenter.getResourcesByFilter('SERVER_INSTANCE'));


	//For a given task, allocate the single resource and execute the task on the resource.
	// Resource Allocate
	console.log('getAllocatableResource', dataCenter.getAllocatableResource(AllocationCriteria.LEAST_PRICE))
	console.log('getAllocatableResource', dataCenter.getAllocatableResource(AllocationCriteria.BEST_EXECUTION))


	// Resource execute



	console.log('getAllocatableResource', dataCenter.getAllocatableResource(AllocationCriteria.BEST_EXECUTION))
}

main()

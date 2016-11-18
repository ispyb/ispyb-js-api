function ShippingDataAdapter(args){
	DataAdapter.call(this, args);
}

ShippingDataAdapter.prototype.get = DataAdapter.prototype.get;
ShippingDataAdapter.prototype.post = DataAdapter.prototype.post;
ShippingDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

ShippingDataAdapter.prototype.getShippings = function(){
	this.get('/{token}/proposal/{proposal}/shipping/list');
};

ShippingDataAdapter.prototype.getShipment = function(shippingId){
	this.get('/{token}/proposal/{proposal}/shipping/{0}/get'.format([shippingId]));
};

ShippingDataAdapter.prototype.getDewarsByShipmentId = function(shippingId){
	this.get('/{token}/proposal/{proposal}/shipping/{0}/dewar/list'.format([shippingId]));
};

ShippingDataAdapter.prototype.getLabContacts = function(){
	alert("This method has been moved to labcontactDataAdapter");
};

ShippingDataAdapter.prototype.getScientists = function(){
	alert("This method has been moved to labcontactDataAdapter");
};

ShippingDataAdapter.prototype.getLabContactById = function(labContactId){
	alert("This method has been moved to labcontactDataAdapter");
};

ShippingDataAdapter.prototype.saveLabContact = function(labcontact){
   	alert("This method has been moved to labcontactDataAdapter");
};

ShippingDataAdapter.prototype.saveShipment = function(shipment ){
	this.post('/{token}/proposal/{proposal}/shipping/save', shipment);
};

ShippingDataAdapter.prototype.addPuck = function(shippingId, dewarId){
	this.get('/{token}/proposal/{proposal}/shipping/{0}/dewar/{1}/puck/add'.format([shippingId, dewarId]));
};

ShippingDataAdapter.prototype.addContainer = function(shippingId, dewarId, containerType, capacity){
	this.get('/{token}/proposal/{proposal}/shipping/{0}/dewar/{1}/container/add'.format([shippingId, dewarId, containerType, capacity]));
};

ShippingDataAdapter.prototype.updateStatus = function(shippingId, status){	
    this.get('/{token}/proposal/{proposal}/shipping/{0}/status/{1}/update'.format([shippingId, status]));   
};


ShippingDataAdapter.prototype.getContainerById = function(shippingId, dewarId, containerId){
	this.get('/{token}/proposal/{proposal}/shipping/{0}/dewar/{1}/puck/{2}/get'.format([shippingId, dewarId, containerId]));
};

ShippingDataAdapter.prototype.removeContainerById = function(shippingId, dewarId, containerId){
	this.get('/{token}/proposal/{proposal}/shipping/{0}/dewar/{1}/puck/{2}/remove'.format([shippingId, dewarId, containerId]));
};

ShippingDataAdapter.prototype.saveContainer = function(shippingId, dewarId, containerId, puck){
    var url = ('/{token}/proposal/{proposal}/shipping/{0}/dewar/{1}/puck/{2}/save'.format([shippingId, dewarId, containerId]));
	this.post(url, {
		puck : JSON.stringify(puck)
	});
};


ShippingDataAdapter.prototype.getDewarLabelURL = function(shippingId, dewarId){
	return this.getUrl('/{token}/proposal/{proposal}/shipping/{0}/dewar/{1}/labels'.format([ shippingId, dewarId]));
};


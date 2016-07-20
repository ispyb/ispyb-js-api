function DewarDataAdapter(args){
	DataAdapter.call(this, args);
}

DewarDataAdapter.prototype.get = DataAdapter.prototype.get;
DewarDataAdapter.prototype.post = DataAdapter.prototype.post;
DewarDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

DewarDataAdapter.prototype.saveDewar= function(shippingId, dewar){
	this.post( ('/{token}/proposal/{proposal}/shipping/{0}/dewar/save'.format( [shippingId])), dewar);
};

DewarDataAdapter.prototype.removeDewar= function(shippingId, dewarId){
	this.get(('/{token}/proposal/{proposal}/shipping/{0}/dewar/{1}/remove'.format( [shippingId, dewarId])));
};

DewarDataAdapter.prototype.addDewar= function(shippingId){
   this.saveDewar(shippingId, {});
};

DewarDataAdapter.prototype.getDewarsByProposal = function(){
	this.get('/{token}/proposal/{proposal}/dewar/list');
};

DewarDataAdapter.prototype.getDewarsByStatus = function(status){
	this.get(('/{token}/proposal/{proposal}/dewar/status/{0}/list'.format( [status])));
};

DewarDataAdapter.prototype.getDewarsBySessionId = function(sessionId){
	this.get('/{token}/proposal/{proposal}/dewar/session/{0}/list'.format( [sessionId]));
};

DewarDataAdapter.prototype.updateSampleLocation = function(containerIdList, beamlineList, sampleLocation){
	this.get('/{token}/proposal/{proposal}/container/{0}/beamline/{1}/samplechangerlocation/{2}/update'.format( [containerIdList,beamlineList,sampleLocation]));
};




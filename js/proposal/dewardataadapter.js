function DewarDataAdapter(args){
	DataAdapter.call(this, args);
}

DewarDataAdapter.prototype.get = DataAdapter.prototype.get;
DewarDataAdapter.prototype.post = DataAdapter.prototype.post;
DewarDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

DewarDataAdapter.prototype.saveDewar= function(shippingId, dewar){
    var url = ('/{token}/proposal/{proposal}/shipping/{0}/dewar/save'.format( [shippingId]));
	this.post(url, dewar);
};

DewarDataAdapter.prototype.removeDewar= function(shippingId, dewarId){
	var url = ('/{token}/proposal/{proposal}/shipping/{0}/dewar/{1}/remove'.format( [shippingId, dewarId]));
	this.get(url);
};

DewarDataAdapter.prototype.addDewar= function(shippingId){
   this.saveDewar(shippingId, {});
};


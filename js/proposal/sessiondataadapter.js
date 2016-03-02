function SessionDataAdapter(args){
	DataAdapter.call(this, args);
}

SessionDataAdapter.prototype.get = DataAdapter.prototype.get;
SessionDataAdapter.prototype.post = DataAdapter.prototype.post;
SessionDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

SessionDataAdapter.prototype.getSessions = function(){
	this.get('/{token}/proposal/{proposal}/session/list');
};



SessionDataAdapter.prototype.getSessionsByDate = function(startDate, endDate){
	this.get('/{token}/proposal/session/list?startdate={0}&enddate={1}'.format([startDate, endDate]));
};
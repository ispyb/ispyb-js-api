function SessionDataAdapter(args){
	DataAdapter.call(this, args);
}

SessionDataAdapter.prototype.get = DataAdapter.prototype.get;
SessionDataAdapter.prototype.post = DataAdapter.prototype.post;
SessionDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

SessionDataAdapter.prototype.getSessions = function(){
	this.get('/{token}/proposal/{proposal}/session/list');
};

SessionDataAdapter.prototype.getSessionsByProposal = function(proposal){ 
	this.get('/{token}/proposal/{0}/session/list'.format([proposal]));
};
 
SessionDataAdapter.prototype.getSessionByProposalSessionId = function(proposal, sessionId){
	this.get('/{token}/proposal/{0}/session/sessionId/{1}/list'.format([proposal, sessionId]));
};

SessionDataAdapter.prototype.getSessionsByDate = function(startDate, endDate){
	this.get('/{token}/proposal/session/date/{0}/{1}/list'.format([startDate, endDate]));
};

SessionDataAdapter.prototype.getSessionsByDateAndBeamline = function(startDate, endDate, beamline){
	this.get('/{token}/proposal/session/date/{0}/{1}/list?beamline={2}'.format([startDate, endDate, beamline]));
};

SessionDataAdapter.prototype.getSessionsByProposalAndDate = function(startDate, endDate, proposal){
	this.get('/{token}/proposal/{0}/session/date/{1}/{2}/list'.format([proposal, startDate, endDate]));
};

SessionDataAdapter.prototype.getSessionsByBeamlineOperator = function(beamlineOperator){
	this.get('/{token}/proposal/session/beamlineoperator/{0}/list'.format([beamlineOperator]));
};

SessionDataAdapter.prototype.saveComments = function(sessionId, comments){
    var url = '/{token}/proposal/{proposal}/mx/session/{0}/comments/save"'.format( [sessionId]);
    this.post(url, {comments : comments});
};
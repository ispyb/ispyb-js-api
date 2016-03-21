function ExperimentSaxsDataAdapter(args){
	DataAdapter.call(this, args);
}

ExperimentSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
ExperimentSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
ExperimentSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

ExperimentSaxsDataAdapter.prototype.getByExperimentByKey= function(key, value){
	this.get('/{token}/proposal/{proposal}/saxs/experiment/{0}/{1}/list'.format( [key.toString(), value.toString()]));
};

ExperimentSaxsDataAdapter.prototype.getExperiments= function(){
	this.get('/{token}/proposal/{proposal}/saxs/experiment/list');
};

ExperimentSaxsDataAdapter.prototype.getExperimentById= function(experimentId){
	this.get('/{token}/proposal/{proposal}/saxs/experiment/{0}/get'.format( [experimentId]));
};

ExperimentSaxsDataAdapter.prototype.getExperimentsBySessionId= function(sessionId){
	this.get('/{token}/proposal/{proposal}/saxs/experiment/session/{0}/list'.format( [ sessionId]));
};

ExperimentSaxsDataAdapter.prototype.getByExperimentId= function(experimentIds){
	this.get('/{token}/proposal/{proposal}/saxs/experiment/experimentId/{0}/list'.format( [ experimentIds]));
};

ExperimentSaxsDataAdapter.prototype.saveExperiment = function(experimentId, name, comments ){
    var url = ('/{token}/proposal/{proposal}/saxs/experiment/{0}/save'.format([experimentId]));
	this.post(url, {
						name : name,
						comments : comments
	});
};
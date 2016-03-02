function FrameSaxsDataAdapter(args){
	DataAdapter.call(this, args);
}

FrameSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
FrameSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
FrameSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

FrameSaxsDataAdapter.prototype.getFramesByAverageId= function(averageId){
	this.get('/{0}/saxs/{1}/frame/average/{0}/list'.format( [averageId.toString()]));
};

FrameSaxsDataAdapter.prototype.getFramesURL = function(frames, averages, subtractions,sampleaverages, bufferaverages, models){
	if (frames == null){
		frames = [];
	}
	if (averages == null){
		averages = [];
	}
	if (subtractions == null){
		subtractions = [];
	}
	if (sampleaverages == null){
		sampleaverages = [];
	}
	if (bufferaverages == null){
		bufferaverages = [];
	}
	
	if (models == null){
		models = [];
	}
	
	var connection = EXI.credentialManager.getConnections()[0];
	return connection.url + ('/{0}/proposal/{1}/saxs/frame/datplot?frame={2}&average={3}&subtracted={4}&sampleaverage={5}&bufferaverage={6}&models={7}'.format([ connection.token,connection.user, frames.toString(), averages.toString(),subtractions.toString(), sampleaverages.toString(), bufferaverages.toString(), models.toString() ]));
};

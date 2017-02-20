function FrameSaxsDataAdapter(args){
	DataAdapter.call(this, args);
}

FrameSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
FrameSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
FrameSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

FrameSaxsDataAdapter.prototype.getFramesByAverageId= function(averageId){
	this.get('/{token}/proposal/{proposal}/saxs/frame/average/{0}/bean'.format( [averageId.toString()]));
};

FrameSaxsDataAdapter.prototype.downloadFramesByAverageIdList= function(averageIdList){
	return this.getUrl('/{token}/proposal/{proposal}/saxs/frame/{0}/zip'.format( [averageIdList.toString()]));
};

FrameSaxsDataAdapter.prototype.getFramesURL = function(frames, averages, subtractions,sampleaverages, bufferaverages, models, operation){
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

	if (operation == null){
		operation = "LOG";
	}
	
	var connection = EXI.credentialManager.getConnections()[0];
	return connection.url + ('/{0}/proposal/{1}/saxs/frame/datplot?frame={2}&average={3}&subtracted={4}&sampleaverage={5}&bufferaverage={6}&models={7}&operation={8}'.format([ connection.token,connection.user, frames.toString(), averages.toString(),subtractions.toString(), sampleaverages.toString(), bufferaverages.toString(), models.toString(), operation ]));
};

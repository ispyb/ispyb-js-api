function HPLCSaxsDataAdapter(args){
	 DataAdapter.call(this, args);
}

HPLCSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
HPLCSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
HPLCSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

HPLCSaxsDataAdapter.prototype.getHPLCOverviewByExperimentId= function(experimentId){
	this.get('/{token}/proposal/{proposal}/saxs/experiment/{0}/hplc/overview'.format( [experimentId]));
};

HPLCSaxsDataAdapter.prototype.getHPLCFramesScatteringURL= function(experimentId, frameIdList){
	return this.getUrl('/{token}/proposal/{proposal}/saxs/experiment/{0}/hplc/frame/{1}/get?operation=log'.format( [experimentId, frameIdList.toString()]));
};

HPLCSaxsDataAdapter.prototype.getDownloadHDF5URL= function(experimentId){
	return this.getUrl('/{token}/proposal/{proposal}/saxs/experiment/{0}/hplc/download'.format( [experimentId]));
};

HPLCSaxsDataAdapter.prototype.getDownloadHDF5FramesURL= function(experimentId, start, end){
	return this.getUrl('/{token}/proposal/{proposal}/saxs/experiment/{0}/hplc/frame/{1}/{2}/zip'.format( [experimentId,start,end]));
};

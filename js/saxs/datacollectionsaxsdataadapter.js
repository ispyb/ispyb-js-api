function DataCollectionSaxsDataAdapter(args){
	DataAdapter.call(this, args);
}

DataCollectionSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
DataCollectionSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
DataCollectionSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

DataCollectionSaxsDataAdapter.prototype.getDataCollectionsByMacromoleculeAcronym= function(macromoleculeAcronym){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/macromoleculeAcronym/{0}/list'.format( [ macromoleculeAcronym]));
};

DataCollectionSaxsDataAdapter.prototype.getDataCollectionsByKey= function(key, value){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/{0}/{1}/list'.format( [ key, value.toString()]));
};

DataCollectionSaxsDataAdapter.prototype.getDataCollectionsByDataCollectionId= function(dataCollectionIds){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/dataCollectionId/{0}/bean'.format( [ dataCollectionIds]));
};

DataCollectionSaxsDataAdapter.prototype.getDataCollectionsByIdList= function(dataCollectionIds){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/{0}/list'.format( [ dataCollectionIds]));
};

DataCollectionSaxsDataAdapter.prototype.getDataCollectionsByExperimentId= function(experimentId){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/experimentId/{0}/list'.format( [ experimentId]));
};

/** To be replaced by getDataCollectionsByExperimentId */
DataCollectionSaxsDataAdapter.prototype.getDataCollectionsByExperiment= function(experimentId){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/experiment/{0}/list'.format( [ experimentId]));
};

DataCollectionSaxsDataAdapter.prototype.getDataCollectionsBySessionId= function(sessionId){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/session/{0}/list'.format( [ sessionId]));
};

DataCollectionSaxsDataAdapter.prototype.getDataCollectionsByMacromoleculeId= function(macromoleculeId){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/macromolecule/{0}/list'.format( [ sessionId]));
};

DataCollectionSaxsDataAdapter.prototype.getDataCollectionsById= function(dataCollectionIds){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/{0}/list'.format( [ dataCollectionIds.toString()]));
};
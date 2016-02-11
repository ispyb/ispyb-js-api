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
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/dataCollectionId/{0}/list'.format( [ dataCollectionIds]));
};

DataCollectionSaxsDataAdapter.prototype.getDataCollectionsByIdList= function(dataCollectionIds){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/{0}/list'.format( [ dataCollectionIds]));
};

DataCollectionSaxsDataAdapter.prototype.getDataCollectionsByExperimentId= function(experimentId){
	this.get('/{token}/proposal/{proposal}/saxs/datacollection/experimentId/{0}/list'.format( [ experimentId]));
};



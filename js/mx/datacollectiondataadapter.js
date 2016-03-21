function DataCollectionDataAdapter(args){
	DataAdapter.call(this, args);
}

DataCollectionDataAdapter.prototype.get = DataAdapter.prototype.get;
DataCollectionDataAdapter.prototype.post = DataAdapter.prototype.post;
DataCollectionDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

DataCollectionDataAdapter.prototype.getBySessionsId= function(sessionsId){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/session/{0}/list'.format( [sessionsId.toString()]));
};

DataCollectionDataAdapter.prototype.getByDataCollectionId= function(dataColletionIds){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/{0}/get'.format( [dataColletionIds.toString()]));
};


DataCollectionDataAdapter.prototype.getByAcronymList= function(acronymList){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/protein_acronym/{0}/view'.format( [acronymList.toString()]));
};

DataCollectionDataAdapter.prototype.getDataCollectionViewBySessionId= function(sessionId){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/session/{0}/view'.format( [sessionId.toString()]));
};

DataCollectionDataAdapter.prototype.getThumbNailById= function(imageId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/image/{0}/thumbnail'.format([ imageId]));
};

DataCollectionDataAdapter.prototype.getImageById= function(imageId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/image/{0}/get'.format([ imageId]));
};

DataCollectionDataAdapter.prototype.getWilsonPlot= function(dataCollectionId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/datacollection/{0}/wilson'.format([ dataCollectionId]));
};


DataCollectionDataAdapter.prototype.getCrystalSnapshotByDataCollectionId= function(dataCollectionId, id){
	return this.getUrl('/{token}/proposal/{proposal}/mx/datacollection/{0}/crystalsnaphot/{1}/get'.format([ dataCollectionId, id]));
};










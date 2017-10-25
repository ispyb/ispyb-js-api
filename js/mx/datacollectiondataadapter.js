/**
* @class DataCollectionDataAdapter
* @constructor
*/
function DataCollectionDataAdapter(args){
	DataAdapter.call(this, args);
}

DataCollectionDataAdapter.prototype.get = DataAdapter.prototype.get;
DataCollectionDataAdapter.prototype.post = DataAdapter.prototype.post;
DataCollectionDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;


/**
* @method getBySessionsId
*/
DataCollectionDataAdapter.prototype.getBySessionsId= function(sessionsId){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/session/{0}/list'.format( [sessionsId.toString()]));
};

/**
* @method getByDataCollectionId
*/
DataCollectionDataAdapter.prototype.getByDataCollectionId= function(dataColletionIds){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/{0}/list'.format( [dataColletionIds.toString()]));
};

/**
* @method getByAcronymList
*/
DataCollectionDataAdapter.prototype.getByAcronymList= function(acronymList){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/protein_acronym/{0}/list'.format( [acronymList.toString()]));
};

/**
* @method getDataCollectionViewBySessionId
*/
DataCollectionDataAdapter.prototype.getDataCollectionViewBySessionId= function(sessionId){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/session/{0}/list'.format( [sessionId.toString()]));
};

/**
* @method getThumbNailById
*/
DataCollectionDataAdapter.prototype.getThumbNailById= function(imageId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/image/{0}/thumbnail'.format([ imageId]));
};

/**
* @method getImageById
*/
DataCollectionDataAdapter.prototype.getImageById= function(imageId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/image/{0}/get'.format([ imageId]));
};

/**
* @method getWilsonPlot
*/
DataCollectionDataAdapter.prototype.getWilsonPlot= function(dataCollectionId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/datacollection/{0}/wilson'.format([ dataCollectionId]));
};

/**
* @method getWilsonPlot
*/
DataCollectionDataAdapter.prototype.getQualityIndicatorPlot= function(dataCollectionId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/datacollection/{0}/qualityindicatorplot'.format([ dataCollectionId]));
};


/**
* @method getCrystalSnapshotByDataCollectionId
*/
DataCollectionDataAdapter.prototype.getCrystalSnapshotByDataCollectionId= function(dataCollectionId, id){
	return this.getUrl('/{token}/proposal/{proposal}/mx/datacollection/{0}/crystalsnaphot/{1}/get'.format([ dataCollectionId, id]));
};


/**
* @method getDataCollectionByDataCollectionGroupId 
*/
DataCollectionDataAdapter.prototype.getDataCollectionsByDataCollectionGroupId = function(datacollectiongroupid){	
    this.get('/{token}/proposal/{proposal}/mx/datacollection/datacollectiongroupid/{0}/list'.format([ datacollectiongroupid.toString()]));
};

/**
* This method updates the comments for a dataCollection
* @method saveComments
*/
DataCollectionDataAdapter.prototype.saveComments = function(dataCollectionId,comments){
    var url = ('/{token}/proposal/{proposal}/mx/datacollection/{0}/comments/save'.format([dataCollectionId]));
	this.post(url, {
		comments : comments
	});
};

/**
* This method updates the comments for a dataCollection
* @method saveComments
*/
DataCollectionDataAdapter.prototype.getReportURLBySessionId = function(sessionId){
   return this.getUrl('/{token}/proposal/{proposal}/mx/datacollection/session/{0}/report/100000/pdf'.format([sessionId]));
	this.post(url, {
		comments : comments
	});
};






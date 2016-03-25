/**
* Interface implementing the API for phasing
*
* @class PhasingDataAdapter
* @constructor
*/
function PhasingDataAdapter(args){
	DataAdapter.call(this, args);
}

PhasingDataAdapter.prototype.get = DataAdapter.prototype.get;
PhasingDataAdapter.prototype.post = DataAdapter.prototype.post;
PhasingDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

/**
* It retrieves the phasing view from ISPyB
* @method getViewByDataCollectionId
* @param {String} dataCollectionId It may be a comma-separated list of data collection ids
*/
PhasingDataAdapter.prototype.getViewByDataCollectionId= function(dataCollectionId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/datacollection/{0}/view'.format( [dataCollectionId]));
};

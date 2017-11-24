/**
* @class DataCollectionGroupDataAdapter
* @constructor
*/
function DataCollectionGroupDataAdapter(args){
	DataAdapter.call(this, args);
}

DataCollectionGroupDataAdapter.prototype.get = DataAdapter.prototype.get;
DataCollectionGroupDataAdapter.prototype.post = DataAdapter.prototype.post;
DataCollectionGroupDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

/**
* This method updates the comments for a dataCollection
* @method saveComments
*/
DataCollectionGroupDataAdapter.prototype.saveComments = function(dataCollectionGroupId,comments){
    var url = ('/{token}/proposal/{proposal}/mx/datacollectiongroup/{0}/comments/save'.format([dataCollectionGroupId]));
	this.post(url, {
		comments : comments
	});
};


DataCollectionGroupDataAdapter.prototype.getXtalThumbnail = function(dataCollectionGroupId){
   return this.getUrl('/{token}/proposal/{proposal}/mx/datacollectiongroup/{0}/xtal/thumbnail'.format([dataCollectionGroupId]));
};
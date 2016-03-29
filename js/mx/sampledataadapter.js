/**
* DataAdDapter read/write information about sample
*
* @class SampleDataAdapter
* @constructor
*/
function SampleDataAdapter(args){
	DataAdapter.call(this, args);
}

SampleDataAdapter.prototype.get = DataAdapter.prototype.get;
SampleDataAdapter.prototype.post = DataAdapter.prototype.post;
SampleDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

/**
* This method retrieves all the samples by crystal id

* @method getSamplesByCrystalId
*/
SampleDataAdapter.prototype.getSamplesByCrystalId = function(crystalId){
	 this.get('/{token}/proposal/{proposal}/mx/sample/crystalId/{0}/list'.format( [crystalId.toString()]));
};













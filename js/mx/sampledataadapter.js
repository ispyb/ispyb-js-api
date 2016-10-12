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

SampleDataAdapter.prototype.getSampleInfoByCrystalId = function(crystalId){
	 this.get('/{token}/proposal/{proposal}/mx/sampleinfo/crystalId/{0}/list'.format( [crystalId.toString()]));
};

SampleDataAdapter.prototype.getSampleInfoByProposalId = function(){
	 this.get('/{token}/proposal/{proposal}/mx/sample/list');
};

SampleDataAdapter.prototype.getSamplesByDewarId = function(dewarId){
	 this.get('/{token}/proposal/{proposal}/mx/sample/dewarid/{0}/list'.format( [dewarId]));
};

SampleDataAdapter.prototype.getSamplesByContainerId = function(containerid){
	 this.get('/{token}/proposal/{proposal}/mx/sample/containerid/{0}/list'.format( [containerid]));
};

SampleDataAdapter.prototype.getSamplesBySessionId = function(sessionid){
	 this.get('/{token}/proposal/{proposal}/mx/sample/sessionid/{0}/list'.format( [sessionid]));
};

SampleDataAdapter.prototype.getSamplesByShipmentId = function(shipmentid){
	 this.get('/{token}/proposal/{proposal}/mx/sample/shipmentid/{0}/list'.format( [shipmentid]));
};









/**
* API for EnergyScanDataAdapter
*
* @class EnergyScanDataAdapter
* @constructor
*/
function EnergyScanDataAdapter(args){
	DataAdapter.call(this, args);
}

EnergyScanDataAdapter.prototype.get = DataAdapter.prototype.get;
EnergyScanDataAdapter.prototype.post = DataAdapter.prototype.post;
EnergyScanDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

/**
* @method get the energy scan by sessionId and proposalId
*/
EnergyScanDataAdapter.prototype.getEnergyScanListBySessionId = function(sessionId){
	 this.get('/{token}/proposal/{proposal}/mx/energyscan/session/{0}/list'.format([sessionId]));
};

/**
* @method get the URL to retrieve the Jpef produced by Chooch
*/
EnergyScanDataAdapter.prototype.getChoochJpegByEnergyScanId = function(energyScanId){
	 return this.getUrl('/{token}/proposal/{proposal}/mx/energyscan/energyscanId/{0}/jpegchooch'.format( [energyScanId.toString()]));
};

/**
* @method get the URL to retrieve the raw data produced by Chooch
*/
EnergyScanDataAdapter.prototype.getChoochFileByEnergyScanId = function(energyScanId){
	 return this.getUrl('/{token}/proposal/{proposal}/mx/energyscan/energyscanId/{0}/chooch'.format( [energyScanId.toString()]));
};

/**
* @method get the URL to retrieve the scan file. It is empty currently!!
*/
EnergyScanDataAdapter.prototype.getScanFileByEnergyScanId = function(energyScanId){
	 return this.getUrl('/{token}/proposal/{proposal}/mx/energyscan/energyscanId/{0}/scanfile'.format( [energyScanId.toString()]));
};








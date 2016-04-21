/**
* API for protein
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
* @method getProteinByProposalId
*/
EnergyScanDataAdapter.prototype.getEnergyScanBySessionId = function(sessionId){
	 this.get('/{token}/proposal/{proposal}/mx/energyscan/session/{0}/list'.format([sessionId]));
};










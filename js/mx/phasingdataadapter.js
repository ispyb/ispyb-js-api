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
* It retrieves the phasing view
* @method getPhasingViewByAutoProcIntegrationId
* @param {String} autoprocIntegrationId It may be a comma-separated list of autoprocIntegrationId
*/
PhasingDataAdapter.prototype.getPhasingViewByAutoProcIntegrationId = function(autoprocIntegrationId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/autoprocIntegrationId/{0}/list'.format( [autoprocIntegrationId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewByDataCollectionId
* @param {String} dataCollectionId It may be a comma-separated list of data collections
*/
PhasingDataAdapter.prototype.getPhasingViewByDataCollectionId = function(dataCollectionId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/dataCollectionId/{0}/list'.format( [dataCollectionId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewBySampleId
* @param {String} sampleId It may be a comma-separated list of sample ids
*/
PhasingDataAdapter.prototype.getPhasingViewBySampleId = function(sampleId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/sampleId/{0}/list'.format( [sampleId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewByProteinId
* @param {String} proteinId It may be a comma-separated list of protein ids
*/
PhasingDataAdapter.prototype.getPhasingViewByProteinId = function(proteinId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/proteinId/{0}/list'.format( [proteinId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewBySessionId
* @param {String} sessionId It may be a comma-separated list of session ids
*/
PhasingDataAdapter.prototype.getPhasingViewBySessionId = function(sessionId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/sessionId/{0}/list'.format( [sessionId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewByPhasingStepId
* @param {String} phasingStepId It may be a comma-separated list of session ids
*/
PhasingDataAdapter.prototype.getPhasingViewByPhasingStepId = function(phasingStepId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/phasingStepId/{0}/list'.format( [phasingStepId]));
};


/**
* It retrieves the phasing files by phasing step
* @method getPhasingFilesByPhasingStepId
* @param {String} phasingStepId It may be a comma-separated list of session ids
*/
PhasingDataAdapter.prototype.getPhasingFilesByPhasingStepId = function(phasingStepId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/phasingStepId/{0}/files'.format( [phasingStepId]));
};
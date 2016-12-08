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
* It retrieves the phasing png image of the model building displaying the PDB
* @method getPhasingFilesByPhasingProgramAttachmentIdAsImage
* @param {phasingAttachmentId} aphasingAttachmentId
*/
PhasingDataAdapter.prototype.getPhasingFilesByPhasingProgramAttachmentIdAsImage = function(phasingAttachmentId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/phasing/phasingprogramattachmentid/{0}/image'.format( [phasingAttachmentId]));                                                    
};



/**
* It retrieves the phasing view
* @method getPhasingViewByAutoProcIntegrationId
* @param {String} autoprocIntegrationId It may be a comma-separated list of autoprocIntegrationId
*/
PhasingDataAdapter.prototype.getPhasingViewByAutoProcIntegrationId = function(autoprocIntegrationId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/autoprocintegrationid/{0}/list'.format( [autoprocIntegrationId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewByDataCollectionId
* @param {String} dataCollectionId It may be a comma-separated list of data collections
*/
PhasingDataAdapter.prototype.getPhasingViewByDataCollectionId = function(dataCollectionId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/datacollectionid/{0}/list'.format( [dataCollectionId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewByDataCollectionId
* @param {String} dataCollectionGroupId It may be a comma-separated list of data dataCollection Group
*/
PhasingDataAdapter.prototype.getPhasingViewByDataCollectionGroupId = function(dataCollectionGroupId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/datacollectiongroupid/{0}/list'.format( [dataCollectionGroupId]));
};


/**
* It retrieves the phasing view
* @method getPhasingViewBySampleId
* @param {String} sampleId It may be a comma-separated list of sample ids
*/
PhasingDataAdapter.prototype.getPhasingViewBySampleId = function(sampleId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/sampleid/{0}/list'.format( [sampleId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewByProteinId
* @param {String} proteinId It may be a comma-separated list of protein ids
*/
PhasingDataAdapter.prototype.getPhasingViewByProteinId = function(proteinId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/proteinid/{0}/list'.format( [proteinId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewBySessionId
* @param {String} sessionId It may be a comma-separated list of session ids
*/
PhasingDataAdapter.prototype.getPhasingViewBySessionId = function(sessionId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/sessionid/{0}/list'.format( [sessionId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewByPhasingStepId
* @param {String} phasingStepId It may be a comma-separated list of session ids
*/
PhasingDataAdapter.prototype.getPhasingViewByPhasingStepId = function(phasingStepId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/phasingstepid/{0}/list'.format( [phasingStepId]));
};

/**
* It retrieves the phasing view
* @method getPhasingViewByPhasingStepId
* @param {String} phasingStepId It may be a comma-separated list of session ids
*/
PhasingDataAdapter.prototype.getDownloadFilesByPhasingStepIdURL = function(phasingStepId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/phasing/phasingstepid/{0}/download'.format( [phasingStepId]));
};

/**
* It retrieves the phasing files by phasing step
* @method getPhasingFilesByPhasingStepId
* @param {String} phasingStepId It may be a comma-separated list of session ids
*/
PhasingDataAdapter.prototype.getPhasingFilesByPhasingStepId = function(phasingStepId){
	this.get('/{token}/proposal/{proposal}/mx/phasing/phasingstepid/{0}/files'.format( [phasingStepId]));
};

/**
* It downloads a phasing file by phasing step attachment id
* @method getPhasingFilesByPhasingStepId
* @param {String} phasingStepId It may be a comma-separated list of session ids
*/
PhasingDataAdapter.prototype.downloadPhasingFilesByPhasingAttachmentId = function(phasingAttachmentId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/phasing/phasingprogramattachmentid/{0}/download'.format( [phasingAttachmentId]));
};

/**
* It downloads a csv file by phasing step attachment id
* @method getPhasingFilesByPhasingStepId
* @param {String} phasingStepId It may be a comma-separated list of session ids
*/
PhasingDataAdapter.prototype.getCSVPhasingFilesByPhasingAttachmentIdURL = function(phasingAttachmentId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/phasing/phasingprogramattachmentid/{0}/csv'.format( [phasingAttachmentId]));
};
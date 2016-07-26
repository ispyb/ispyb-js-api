/**
* API for AutoProcIntegration
*
* @class AutoProcIntegrationDataAdapter
* @constructor
*/
function AutoProcIntegrationDataAdapter(args){
	DataAdapter.call(this, args);
}

AutoProcIntegrationDataAdapter.prototype.get = DataAdapter.prototype.get;
AutoProcIntegrationDataAdapter.prototype.post = DataAdapter.prototype.post;
AutoProcIntegrationDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

/**
* It retrieves the autoprocessing view from ISPyB
* @method getViewByDataCollectionId
* @param {String} dataCollectionId It may be a comma-separated list of data collection ids
*/
AutoProcIntegrationDataAdapter.prototype.getViewByDataCollectionId= function(dataCollectionId){
	this.get('/{token}/proposal/{proposal}/mx/autoprocintegration/datacollection/{0}/view'.format( [dataCollectionId]));
};

/**
* It retrieves the URL of autoprocessing view from ISPyB
* @method getViewByDataCollectionId
* @param {String} dataCollectionId It may be a comma-separated list of data collection ids
*/
AutoProcIntegrationDataAdapter.prototype.getViewByDataCollectionURL= function(dataCollectionId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/autoprocintegration/datacollection/{0}/view'.format( [dataCollectionId]));
};


/**
* @method getByDataCollectionId
*/
AutoProcIntegrationDataAdapter.prototype.getByDataCollectionId= function(dataCollectionId){
	this.get('/{token}/proposal/{proposal}/mx/autoprocintegration/datacollection/{0}/list'.format( [dataCollectionId]));
};

/**
* It gets the URL for getting the completeness of XScale by a list autoprocintegration Id
* @method getXScaleCompleteness
*/
AutoProcIntegrationDataAdapter.prototype.getXScaleCompleteness= function(autoProcIntegrationIdList){
	return this.getUrl('/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/completeness'.format( [autoProcIntegrationIdList.toString()]));
};

/**
* It gets the URL for getting the RFactor of XScale by a list autoprocintegration Id
* @method getXScaleRfactor
*/
AutoProcIntegrationDataAdapter.prototype.getXScaleRfactor= function(autoProcIntegrationIdList){
	return this.getUrl('/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/rfactor'.format( [autoProcIntegrationIdList.toString()]));
};

/**
* It gets the URL for getting the ISigma of XScale by a list autoprocintegration Id
* @method getXScaleISigma
*/
AutoProcIntegrationDataAdapter.prototype.getXScaleISigma= function(autoProcIntegrationIdList){
	return this.getUrl('/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/isigma'.format( [autoProcIntegrationIdList.toString()]));
};

/**
* It gets the URL for getting the CC2 of XScale by a list autoprocintegration Id
* @method getXScaleCC2
*/
AutoProcIntegrationDataAdapter.prototype.getXScaleCC2= function(autoProcIntegrationIdList){
	return this.getUrl('/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/cc2'.format( [autoProcIntegrationIdList.toString()]));
};

/**
* It gets the URL for getting the SigmaAnp of XScale by a list autoprocintegration Id
* @method getXScaleSigmaAno
*/
AutoProcIntegrationDataAdapter.prototype.getXScaleSigmaAno= function(autoProcIntegrationIdList){
	return this.getUrl( '/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/sigmaano'.format( [autoProcIntegrationIdList.toString()]));
};

/**
* It gets the URL for getting the Wilson of XScale by a list autoprocintegration Id
* @method getXScaleWilson
*/
AutoProcIntegrationDataAdapter.prototype.getXScaleWilson= function(autoProcIntegrationIdList){
	return this.getUrl( '/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/wilson'.format( [autoProcIntegrationIdList.toString()]));
};

/**
* It gets the URL for getting the AnnoCorrection of XScale by a list autoprocintegration Id
* @method getXScaleAnnoCorrection
*/
AutoProcIntegrationDataAdapter.prototype.getXScaleAnnoCorrection= function(autoProcIntegrationIdList){
	return this.getUrl( '/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/anomcorr'.format( [autoProcIntegrationIdList.toString()]));
};

/**
* It gets the URL for downloading an attachement from an autoProcAttachmentId
* @method getDownloadAttachmentUrl
*/
AutoProcIntegrationDataAdapter.prototype.getDownloadAttachmentUrl= function(autoProcAttachmentId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/autoprocintegration/autoprocattachmentid/{0}/download'.format( [autoProcAttachmentId.toString()]));
};

/**
* It gets the list of attachments linked to a list of autoProcPrograms id
* @method getDownloadAttachmentUrl
*/
AutoProcIntegrationDataAdapter.prototype.getAttachmentListByautoProcProgramsIdList = function(autoProcProgramId){
	return this.get('/{token}/proposal/{proposal}/mx/autoprocintegration/attachment/autoprocprogramid/{0}/list'.format( [autoProcProgramId.toString()]));
};

/**
* It gets the URL of the list of attachments linked to a list of autoProcPrograms id
* @method getDownloadAttachmentUrl
*/
AutoProcIntegrationDataAdapter.prototype.getAttachmentListByautoProcProgramsIdListURL = function(autoProcProgramId){
	return this.getUrl('/{token}/proposal/{proposal}/mx/autoprocintegration/attachment/autoprocprogramid/{0}/list'.format( [autoProcProgramId.toString()]));
};


/**
* It gets the phasing data by autoProccesingListId
* @method getPhasingByAutoproccesingIds
*/
AutoProcIntegrationDataAdapter.prototype.getPhasingByAutoproccesingIds = function(autoProcListId){
	 this.get('/{token}/proposal/{proposal}/mx/autoprocintegration/autoprocintegrationid/{0}/phasing'.format( [autoProcListId.toString()]));
};


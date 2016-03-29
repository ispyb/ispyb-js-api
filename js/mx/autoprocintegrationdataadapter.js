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
	return this.getUrl('/{token}/proposal/{proposal}/mx/autoproc/autoprocattachmentid/{0}/download'.format( [autoProcAttachmentId.toString()]));
};

/**
* It gets the phasing data by autoProcListId
* @deprecated Use PhasingDataAdapter
* @method getPhasingByAutoprocIds
*/
AutoProcIntegrationDataAdapter.prototype.getPhasingByAutoprocIds= function(autoProcListId){
	 this.get('/{token}/proposal/{proposal}/mx/phasing/autoprocid/{0}/list'.format( [autoProcListId.toString()]));
};

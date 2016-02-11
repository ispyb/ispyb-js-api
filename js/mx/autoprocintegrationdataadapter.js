function AutoProcIntegrationDataAdapter(args){
	DataAdapter.call(this, args);
}

AutoProcIntegrationDataAdapter.prototype.get = DataAdapter.prototype.get;
AutoProcIntegrationDataAdapter.prototype.post = DataAdapter.prototype.post;
AutoProcIntegrationDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

AutoProcIntegrationDataAdapter.prototype.getByDataCollectionId= function(dataCollectionId){
	this.get('/{token}/proposal/{proposal}/mx/autoprocintegration/datacollection/{0}/list'.format( [dataCollectionId]));
};


AutoProcIntegrationDataAdapter.prototype.getXScaleCompleteness= function(autoProcIntegrationIdList){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, '/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/completeness'.format( [autoProcIntegrationIdList.toString()]));
};

AutoProcIntegrationDataAdapter.prototype.getXScaleRfactor= function(autoProcIntegrationIdList){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, '/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/rfactor'.format( [autoProcIntegrationIdList.toString()]));
};


AutoProcIntegrationDataAdapter.prototype.getXScaleISigma= function(autoProcIntegrationIdList){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, '/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/isigma'.format( [autoProcIntegrationIdList.toString()]));
};

AutoProcIntegrationDataAdapter.prototype.getXScaleCC2= function(autoProcIntegrationIdList){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, '/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/cc2'.format( [autoProcIntegrationIdList.toString()]));
};

AutoProcIntegrationDataAdapter.prototype.getXScaleSigmaAno= function(autoProcIntegrationIdList){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, '/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/sigmaano'.format( [autoProcIntegrationIdList.toString()]));
};

AutoProcIntegrationDataAdapter.prototype.getXScaleWilson= function(autoProcIntegrationIdList){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, '/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/wilson'.format( [autoProcIntegrationIdList.toString()]));
};

AutoProcIntegrationDataAdapter.prototype.getXScaleAnnoCorrection= function(autoProcIntegrationIdList){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, '/{token}/proposal/{proposal}/mx/autoprocintegration/{0}/xscale/anomcorr'.format( [autoProcIntegrationIdList.toString()]));
};

AutoProcIntegrationDataAdapter.prototype.getDownloadAttachmentUrl= function(autoProcAttachmentId){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, '/{token}/proposal/{proposal}/mx/autoproc/autoprocattachmentid/{0}/download'.format( [autoProcAttachmentId.toString()]));
};


AutoProcIntegrationDataAdapter.prototype.getPhasingByAutoprocIds= function(autoProcListId){
	 this.get('/{token}/proposal/{proposal}/mx/phasing/autoprocid/{0}/list'.format( [autoProcListId.toString()]));
};

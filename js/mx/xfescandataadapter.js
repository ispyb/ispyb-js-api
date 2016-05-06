/**
* API for XFEScanDataAdapter
*
* @class XFEScanDataAdapter
* @constructor
*/
function XFEScanDataAdapter(args){
	DataAdapter.call(this, args);
}

XFEScanDataAdapter.prototype.get = DataAdapter.prototype.get;
XFEScanDataAdapter.prototype.post = DataAdapter.prototype.post;
XFEScanDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

/**
* @method get the xrf scan by sessionId and proposalId
*/
XFEScanDataAdapter.prototype.getXFEScanListBySessionId = function(sessionId){
	 this.get('/{token}/proposal/{proposal}/mx/xrfscan/session/{0}/list'.format([sessionId]));
};

/**
* @method get the URL to retrieve the Jpef dynamacally
*/
XFEScanDataAdapter.prototype.getXFEJpegByScanId = function(xfeScanId){
	 return this.getImage(xfeScanId, 'jpegScanFileFullPath');
};

XFEScanDataAdapter.prototype.getImage = function(xfeScanId, imageType){
	 return this.getUrl('/{token}/proposal/{proposal}/mx/xrfscan/xrfscanId/{0}/image/{1}/get'.format( [xfeScanId.toString(), imageType.toString()]));
};


XFEScanDataAdapter.prototype.getScanFileScanId = function(xfeScanId){
	 return this.getFile(xfeScanId, 'scanFileFullPath');
};

XFEScanDataAdapter.prototype.getFile = function(xfeScanId, imageType){
	 return this.getUrl('/{token}/proposal/{proposal}/mx/xrfscan/xrfscanId/{0}/file/{1}}/get'.format( [xfeScanId.toString(), imageType.toString()]));
};

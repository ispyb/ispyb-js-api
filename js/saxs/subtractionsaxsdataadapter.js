function SubtractionSaxsDataAdapter(args){
	DataAdapter.call(this, args);
}

SubtractionSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
SubtractionSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
SubtractionSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

SubtractionSaxsDataAdapter.prototype.getSubtractionsBySubtractionIdList= function(subtractionIdList){
	this.get('/{token}/proposal/{proposal}/saxs/subtraction/{0}/list'.format( [subtractionIdList.toString()]));
};

//SubtractionSaxsDataAdapter.prototype.getFramesBySubtractionId= function(subtractionId){
//	this.get('/{0}/saxs/{1}/frame/subtraction/{2}/list'.format( [subtractionId.toString()]));
//};

//SubtractionSaxsDataAdapter.prototype.getFramesMergeURL = function(subtractionIdList, from, to, scale){
//	var tokens = exiSAXS.localExtorage.tokenManager.getTokens();
//	return tokens[0].url +  ('/{0}/saxs/{1}/frame/subtractionId/{2}/datplotmerge?from={3}&to={4}&scale={5}'.format([tokens[0].token, tokens[0].user, subtractionIdList.toString(), from.toString(),to.toString(), scale.toString() ]));
//};

//SubtractionSaxsDataAdapter.prototype.getMergeURL = function(subtractionIdList, from, to, scale){
//	var tokens = exiSAXS.localExtorage.tokenManager.getTokens();
//	return tokens[0].url + ('/{0}/saxs/{1}/frame/subtractionId/{2}/merge?from={3}&to={4}&scale={5}'.format([ tokens[0].token, tokens[0].user,subtractionIdList.toString(), from.toString(),to.toString(), scale.toString() ]));
//};


SubtractionSaxsDataAdapter.prototype.getImage = function(subtractionId, imageType){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, ('/{token}/proposal/{proposal}/saxs/subtraction/{0}/image/{1}'.format([ subtractionId, imageType])));
};

SubtractionSaxsDataAdapter.prototype.getZip = function(subtractionId){
	var connection = EXI.credentialManager.getConnections()[0];
//	return connection.url + ('/{token}/proposal/{proposal}/saxs/subtraction/{0}/zip'.format([ subtractionId]));
	return this.getUrl(connection, ('/{token}/proposal/{proposal}/saxs/subtraction/{0}/zip'.format([ subtractionId])));
};
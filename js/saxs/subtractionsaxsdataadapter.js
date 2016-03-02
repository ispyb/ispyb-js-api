function SubtractionSaxsDataAdapter(args){
	DataAdapter.call(this, args);
}

SubtractionSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
SubtractionSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
SubtractionSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

SubtractionSaxsDataAdapter.prototype.getSubtractionsBySubtractionIdList= function(subtractionIdList){
	this.get('/{token}/proposal/{proposal}/saxs/subtraction/{0}/list'.format( [subtractionIdList.toString()]));
};

SubtractionSaxsDataAdapter.prototype.getImage = function(subtractionId, imageType){
	return this.getUrl('/{token}/proposal/{proposal}/saxs/subtraction/{0}/image/{1}'.format([ subtractionId, imageType]));
};

SubtractionSaxsDataAdapter.prototype.getZip = function(subtractionId){
	return this.getUrl('/{token}/proposal/{proposal}/saxs/subtraction/{0}/zip'.format([ subtractionId]));
};

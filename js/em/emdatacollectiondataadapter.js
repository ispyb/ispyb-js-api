/**
* @class EmDataCollectionDataAdapter
* @constructor
*/
function EmDataCollectionDataAdapter(args){
	DataAdapter.call(this, args);
}

EmDataCollectionDataAdapter.prototype.get = DataAdapter.prototype.get;
EmDataCollectionDataAdapter.prototype.post = DataAdapter.prototype.post;
EmDataCollectionDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;



EmDataCollectionDataAdapter.prototype.getMoviesDataByDataCollectionId = function(dataCollectionId){
   return this.get('/{token}/proposal/{proposal}/em/datacollection/{0}/movie/all'.format([dataCollectionId]));
};


EmDataCollectionDataAdapter.prototype.getMicrographThumbnailURL = function(dataCollectionId, movieId){
   return this.getUrl('/{token}/proposal/{proposal}/em/datacollection/{0}/movie/{1}/thumbnail'.format([dataCollectionId, movieId]));
};

EmDataCollectionDataAdapter.prototype.getMRCURL = function(dataCollectionId, movieId){
   return this.getUrl('/{token}/proposal/{proposal}/em/datacollection/{0}/movie/{1}/mrc'.format([dataCollectionId, movieId]));
};


EmDataCollectionDataAdapter.prototype.getMovieMetadataXMLURL = function(dataCollectionId, movieId){
   return this.getUrl('/{token}/proposal/{proposal}/em/datacollection/{0}/movie/{1}/metadata/xml'.format([dataCollectionId, movieId]));
};

EmDataCollectionDataAdapter.prototype.getMotionCorrectionDriftURL = function(dataCollectionId, movieId){
   return this.getUrl('/{token}/proposal/{proposal}/em/datacollection/{0}/movie/{1}/motioncorrection/drift'.format([dataCollectionId, movieId]));
};

EmDataCollectionDataAdapter.prototype.getMotionCorrectionThumbnailURL = function(dataCollectionId, movieId){
   return this.getUrl('/{token}/proposal/{proposal}/em/datacollection/{0}/movie/{1}/motioncorrection/thumbnail'.format([dataCollectionId, movieId]));
};


EmDataCollectionDataAdapter.prototype.geCTFThumbnailURL = function(dataCollectionId, movieId){
   return this.getUrl('/{token}/proposal/{proposal}/em/datacollection/{0}/movie/{1}/ctf/thumbnail'.format([dataCollectionId, movieId]));
};

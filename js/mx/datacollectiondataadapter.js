function DataCollectionDataAdapter(args){
	DataAdapter.call(this, args);
}

DataCollectionDataAdapter.prototype.get = DataAdapter.prototype.get;
DataCollectionDataAdapter.prototype.post = DataAdapter.prototype.post;
DataCollectionDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

DataCollectionDataAdapter.prototype.getBySessionsId= function(sessionsId){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/session/{0}/list'.format( [sessionsId.toString()]));
};

DataCollectionDataAdapter.prototype.getByDataCollectionId= function(dataColletionIds){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/{0}/get'.format( [dataColletionIds.toString()]));
};


DataCollectionDataAdapter.prototype.getByAcronymList= function(acronymList){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/acronyms/{0}/list'.format( [acronymList.toString()]));
};

DataCollectionDataAdapter.prototype.getDataCollectionViewBySessionId= function(sessionId){
	 this.get('/{token}/proposal/{proposal}/mx/datacollection/session/{0}/view'.format( [sessionId.toString()]));
};



DataCollectionDataAdapter.prototype.getThumbNailById= function(imageId){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, ('/{token}/proposal/{proposal}/mx/image/{0}/thumbnail'.format([ imageId])));
};

DataCollectionDataAdapter.prototype.getImageById= function(imageId){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, ('/{token}/proposal/{proposal}/mx/image/{0}/get'.format([ imageId])));
};


DataCollectionDataAdapter.prototype.getCrystalSnapshotByDataCollectionId= function(dataCollectionId, id){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, ('/{token}/proposal/{proposal}/mx/datacollection/{0}/crystalsnaphot/{1}/get'.format([ dataCollectionId, id])));
};

DataCollectionDataAdapter.prototype.test= function(imageId){
	  var url = ('/{token}/proposal/{proposal}/mx/save');
	  
	  var spaceGroup = {
			  "spaceGroupNumber":1,
			  "spaceGroupShortName":"TEST",
			  "spaceGroupName":"P TEST",
			  "bravaisLattice":"aP",
			  "bravaisLatticeName":null,
			  "pointGroup":null,
			  "mxUsed":1
	  };
	  
	  var run = {
			  "phasingCommandLine":null,
			  "phasingPrograms":"test",
			  "phasingStatus":null,
			  "phasingMessage":null,
			  "phasingStartTime":"Feb 14, 2014 4:46:34 PM",
			  "phasingEndTime":"Feb 14, 2014 4:46:35 PM",
			  "phasingEnvironment":null
	     };
	  
	  var phasingStep = {
			  "previousPhasingStepId":null,
			  "autoProcScalingId":1,
			  "phasingStepType":"PREPARE",
			  "method":"null",
			  "solventContent":'22',
			  "enantiomorph":'enam',
			  "lowRes":'5.4',
			  "highRes":'8.5',
	      };
	  
	  var attachments = [
	                     {"fileType":"Logfile","fileName":"test22.mtz","filePath":"testtesttest","recordTimeStamp":"Mar 2, 2010 3:21:03 PM"},
	                     {"fileType":"Logfile","fileName":"test33.mtz","filePath":"testtesttest","recordTimeStamp":"Mar 2, 2010 3:21:03 PM"}
	                     
	                     ];
	  this.post(url, 
	  {
		  phasingStep :JSON.stringify(phasingStep),
		  spaceGroup : JSON.stringify(spaceGroup),
	      run: JSON.stringify(run),
	      attachments : JSON.stringify(attachments)
	     
	  }
	  );
};










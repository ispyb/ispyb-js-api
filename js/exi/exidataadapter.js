function ExiDataAdapter(args){
	this.async = true;
	this.onSuccess = new Event(this);
	this.onError = new Event(this);
	
	if (args != null) {
		if (args.async != null) {
			this.async = args.async;
		}
		if (args.onSuccess != null) {
			this.onSuccess.attach(args.onSuccess);
		}
		if (args.onError != null) {
			this.onError.attach(args.onError);
		}
	}

}

ExiDataAdapter.prototype.getUrl = function(url){
	var connection = EXI.credentialManager.getConnections()[0];
	return connection.exiUrl + url.replace("{token}", connection.token).replace("{username}", connection.username);
};


ExiDataAdapter.prototype.call = function(url){
	var _this = this;
//	var connections = EXI.credentialManager.getConnections();

	$.ajax({
		  url: this.getUrl(url),
		  type: 'get',
		  success: function(data){ 
			  _this.onSuccess.notify(data);
			  if (exiSAXS != null){
				  exiSAXS.setLoading(false);
			  }
		  },
		  error: function(error){
			  _this.onError.notify(error);
			  if (exiSAXS != null){
				  exiSAXS.setError(error);
			  }
		  }
	});

};

ExiDataAdapter.prototype.postcall = function(url, data){
	var _this = this;
	var connections = EXI.credentialManager.getConnections();
	
	$.ajax({
		  url: connections[0].exiUrl + url,
		  type: 'post',
		  data : data,
		  success: function(data){ 
			  _this.onSuccess.notify(data);
			  if (exiSAXS != null){
				  exiSAXS.setLoading(false);
			  }
		  },
		  error: function(error){
			  _this.onError.notify(error);
			  if (exiSAXS != null){
				  exiSAXS.setError(error);
			  }
		  }
	});

};

ExiDataAdapter.prototype.getToolUrl = function(){
	return this.getUrl('/{token}/tool');
};

ExiDataAdapter.prototype.authenticate = function(){
	this.call('/{token}/user/{username}/authenticate');
};

ExiDataAdapter.prototype.getProject = function(){
	this.call('/{token}/project/list');
};

ExiDataAdapter.prototype.getRuns = function(projectId){
	this.call('/{token}/project/{0}/run/list'.format([ projectId]));
};

ExiDataAdapter.prototype.save = function(user){
	this.postcall('/{token}/user/save'.format([ tokens[0].token]), {user : JSON.stringify(user)});
};

ExiDataAdapter.prototype.getFileContent = function(fileId){
	this.call('/file/{0}/content'.format([ fileId]));
};

ExiDataAdapter.prototype.getFileImage = function(fileId){
	return this.getUrl('/file/{0}/image'.format([ fileId]));
};


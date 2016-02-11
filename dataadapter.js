/**
 * Super class for all the data adapters
 * Based on $ and Event it will make a GET/POST call to an given URL
 * if success then onSuccess will be notified otherwise on Error will be notified
 * 
 * Example:
 * 
 * function successed (sender, data){
 * 	alert("It worked");
 * }
 * var adapter = new DataAdapter({async : true, onSuccess: successed }).get("http://example.com/get")
 * 
 * 
**/
function DataAdapter( args) {
	this.async = true;
	
	this.url = null;
	this.token = null;
	this.proposal = null;
	this.username = null;
	
	this.onSuccess = new Event(this);
	this.onError = new Event(this);
	
	
	if (args != null) {
		if (args.username != null) {
			this.username = args.username;
		}
		if (args.onSuccess != null) {
			this.onSuccess.attach(args.onSuccess);
		}
		if (args.onError != null) {
			this.onError.attach(args.onError);
		}
		if (args.url != null) {
			this.url = args.url;
		}
		if (args.token != null) {
			this.token = args.token;
		}
		if (args.proposal != null) {
			this.proposal = args.proposal;
		}
	}
	
}

/**
 * Input: url = "http://server.com/{token}/proposal/{proposal}/shipment/list"
 * Output will be the url with the strings {token} and {proposal} replaced by the values connection.token and connection.proposal
 */
DataAdapter.prototype.getUrl = function(connection, url){
	return this.url + url.replace("{token}", this.token).replace("{proposal}", this.proposal).replace("{username}", this.username);
};


DataAdapter.prototype.get = function(url){
	var _this = this;

	if (EXI != null){
		EXI.setLoading();
	}

	var connections = EXI.credentialManager.getConnections();
	if (connections.length == 1){
		$.ajax({
			  url: this.getUrl(connections[0], url),
			  type: 'get',
			  async : this.async,
			  statusCode: {
		            400 : function(){
		                BUI.showError('400 : bad request');
		            },
		            401 : function(){
		                EXI.setError('401 : Unauthorized. Your session is not valid or may have expired');
		            },
		            403 : function(){
		                BUI.showError('403 : forbidden');
		            },
		            404 : function(){
		                BUI.showError('404 : not found');
		            },
		            415 : function(){
		                BUI.showError('415 : type not allowed');
		            },
		            500 : function(){
		                BUI.showError('500 : internal server error');
		            }
		        },
			  success: function(data){ 
				  if (EXI != null){
					  EXI.setLoading(false);
				  }
				  _this.onSuccess.notify(data);
			  },
			  error: function(error){
				  _this.onError.notify(error);
				   EXI.setError(error.responseText);
			  }
			});
	}
	else{
		BUI.showError("Number of connections > 1");
	}
	

//	if (connections.length == 2){
//		function success(dataset1, dataset2){
//			 _this.onSuccess.notify(dataset1[0].concat(dataset2[0]));
//			 if (exiSAXS != null){
//				  exiSAXS.setLoading(false);
//			 }
//		}
//		function error(error){
//			 _this.onError.notify(error);
//			  _this.onError.notify(error);
//			  if (exiSAXS != null){
//				  exiSAXS.setError(error.responseText);
//			  }
//		}
//		$.when( 
//				$.ajax({
//							url: connections[0].url + url.replace("%TOKEN%", connections[0].token).replace("%PROPOSAL%", connections[0].proposal).replace("%USER%", connections[0].username),
//							async : this.async,
//							type: 'get'
//						}), 
//			    $.ajax({
//			    	url: connections[1].url + url.replace("%TOKEN%", connections[1].token).replace("%PROPOSAL%", connections[1].proposal).replace("%USER%", connections[1].username),
//			    			async : this.async,
//			    			type: 'get'
//					 })
//			)
//		  .then( success, error);
//	}
};

DataAdapter.prototype.post = function(url, data){
	var _this = this;
	/** exiSAXS could be not defined yed **/
	if (EXI != null){
		EXI.setLoading();
	}
	var connections = EXI.credentialManager.getConnections();
	 url = this.getUrl(connections[0], url);
	 $.ajax({
		  type: "POST",
		  url: url,
		  data: data,
		  success: function(data){ 
			  _this.onSuccess.notify(data);
			  if (EXI != null){
				  EXI.setLoading(false);
			  }
		  },
		  error: function(error){
			  _this.onError.notify(error);
			  if (EXI != null){
				  EXI.setError(error);
			  }
		  }
	});
	 
};



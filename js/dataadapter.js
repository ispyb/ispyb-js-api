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
		if (args.async != null) {
			this.async = args.async;
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
DataAdapter.prototype.getUrl = function(url){
	return this.url + url.replace("{token}", this.token).replace("{proposal}", this.proposal).replace("{username}", this.username);
};

DataAdapter.prototype.get = function(url){
	var _this = this;

		$.ajax({
			  url: this.getUrl( url),
			  type: 'get',
			  async : this.async,
			  statusCode: {
		            404 : function(){
		            	_this.onError.notify('404 : not found');
		            },
		            415 : function(){
		                _this.onError.notify('415 : type not allowed');
		            },
		            500 : function(){
		                _this.onError.notify('500 : internal server error');
		            }
		        },
			  success: function(data){ 
				 
				  _this.onSuccess.notify(data);
			  },
			  error: function(error){

				  _this.onError.notify(error);
				   
			  }
			});
};

DataAdapter.prototype.post = function(url, data){
	var _this = this;
	
	 url = this.getUrl(url);
	 $.ajax({
		  type: "POST",
		  async : this.async,
		  url: url,
		  data: data,
		  success: function(data){ 
			  _this.onSuccess.notify(data);
			 
		  },
		  error: function(error){
			  _this.onError.notify(error);
			 
		  }
	});
	 
};



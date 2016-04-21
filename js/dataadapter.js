/**
* It makes all the calls to the webservices. Either by using get or post.
*
* @class DataAdapter
* @constructor
* @event onSuccess
*/
function DataAdapter( args) {
	/**
	 * By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need synchronous requests, set this option to false.
	 *
	 * @property async
	 * @type String
	 * @default "true"
	 */
	this.async = true;
	/**
	 * ISPyB instance that points to the restful webservices (i.e. http://ispyvalid.esrf.fr:8080/ispyb/ispyb-ws/rest)
	 *
	 * @property url
	 * @type String
	 * @default null
	 */
	this.url = null;
	/**
	 * Token that will authenticate the restfull calls on the server.
	 *
	 * @property token
	 * @type String
	 * @default null
	 */
	this.token = null;
	this.proposal = null;
	this.username = null;
	
	/**
	 * Fired when the get or post are succeed
	 *
	 * @event onSuccess
	 * @param {Object} the object which will fire the event
	 */
	this.onSuccess = new Event(this);
	/**
	 * Fired when the get or post produces an error
	 *
	 * @event onError
	 * @param {Object} the object which will fire the event
	 */
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
* This method manage the creation of correct the URL. It receices as URL the relative path to the resource and will add the URL to the ISPyB server instance as well as will replace the token, proposal and username automatically.
* @method getUrl
* @param {String} url Relative path to the resource to be access. For instance: "/{token}/proposal/{proposal}/saxs/buffer/list"
* @return {String} Returns the effetive URL to access to an ISPyB instance: http://ispyvalid.esrf.fr:8080/ispyb/ispyb-ws/rest/d337d511ecac7sd301407347d66965cb27cbfa6a/proposal/mx415/saxs/buffer/list
*/
DataAdapter.prototype.getUrl = function(url){
	return this.url + url.replace("{token}", this.token).replace("{proposal}", this.proposal).replace("{username}", this.username);
};

/**
* This method makes a ajax call of type GET

* @method get
* @param {String} url Relative path to the resource to be access. For instance: "/{token}/proposal/{proposal}/saxs/buffer/list"
*/
DataAdapter.prototype.get = function(url){
	var _this = this;
		$.ajax({
			  url: this.getUrl( url),
			  type: 'get',
			  async : this.async,
			  statusCode: {
                  
                   401 : function(){  
		            	_this.onError.notify('401 Unauthorized');
		            },
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

/**
* This method makes a ajax call of type POST

* @method post
* @param {String} url Relative path to the resource to be access. For instance: "/{token}/proposal/{proposal}/saxs/buffer/list"
* @param {String} data It is a string with the data to be sent within the POST call
*/
DataAdapter.prototype.post = function(url, data){
	var _this = this;
	
	 url = this.getUrl(url);
	 $.ajax({
		  type: "POST",
		  async : this.async,
           statusCode: {
                   401 : function(){                      
		            	_this.onError.notify('401 Unauthorized');
		            },
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



/**
* This allows to replace a subset of characters on a string
*/
String.prototype.format = function (args) {
    var str = this;
    return str.replace(String.prototype.format.regex, function(item) {
        var intVal = parseInt(item.substring(1, item.length - 1));
        var replace;
        if (intVal >= 0) {
            replace = args[intVal];
        } else if (intVal === -1) {
            replace = "{";
        } else if (intVal === -2) {
            replace = "}";
        } else {
            replace = "";
        }
        return replace;
    });
};
String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");



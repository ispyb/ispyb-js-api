function AuthenticationDataAdapter(args){
	DataAdapter.call(this, args);
}

AuthenticationDataAdapter.prototype.get = DataAdapter.prototype.get;
AuthenticationDataAdapter.prototype.post = DataAdapter.prototype.post;
AuthenticationDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;


AuthenticationDataAdapter.prototype.authenticate = function(user, password, url){
	var _this = this;
	
	var site = "ESRF";
	/** SITE **/
	if (url.indexOf("embl-hamburg") != -1){
		site = "EMBL";
	}
	if (url.indexOf("192.109.31.39") != -1){
		site = "EMBL";
	}
	
	
	$.ajax({
		  url: url + '/authenticate?site=' + site,
		  type: 'post',
		  data: {
			  		login : user,
			  		password : password
		  },
		  success: function(data){
			   _this.onSuccess.notify(data);
		  },
		  error: function(error){
			  _this.onError.notify(error);
		  }
	});
};

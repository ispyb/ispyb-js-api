/** Super class for testing **/
function Test(){
	this.token = null;
	this.credential = null;
}

Test.prototype.authenticate = function(username, password, url){
		var _this = this;

		if (password == null){
			alert("Password is null");
			return;
		}
		function onAuthenticated(sender, data){
			_this.token = data.token;
    		}
		var authenticationDataAdapter = new AuthenticationDataAdapter({
			onSuccess	: onAuthenticated,
			async	  	: false,
			url		:  url
	    	});
	    	authenticationDataAdapter.authenticate(username, password, url);


};

Test.prototype.init = function(){
	this.credential = Config.credentials[0];
	this.authenticate(this.credential.username, this.credential.password, this.credential.url);
	if (this.token != null){
		this.test(this.token);
	}
	else{
		alert("Authentication failed");
	}
};

Test.prototype.test = function(token){


};

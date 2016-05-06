function SessionTest(){
	Test.call(this);
}

SessionTest.prototype.init = Test.prototype.init;
SessionTest.prototype.authenticate = Test.prototype.authenticate;

SessionTest.prototype.getDataAdapter = function(token, callback){
	return new SessionDataAdapter({
            proposal 	: this.credential.proposal,
            token 	    : this.token,
            url 	    : this.credential.url,
	        async	    : false,
            onSuccess	: callback
        });
};

SessionTest.prototype.test = function(token){
	var _this = this;
	QUnit.test( "SessionDataAdapter:getSessions", function( assert ) {
		    function callback(sender, data){
                   
			    assert.ok((data.length>0), "SessionDataAdapter.getSessions(): There's at least one session.");
			}
        	_this.getDataAdapter(_this.token, callback).getSessions();
	});
    
    	QUnit.test( "SessionDataAdapter:getSessionsByDate", function( assert ) {
		    function callback2(sender, data){
                    
			    assert.ok((data.length>0), "SessionDataAdapter.getSessionsByDate():" + data.length + "There's at least one session.");
			}
        	_this.getDataAdapter(_this.token, callback2).getSessionsByDate('20150301','20160305');
	});
    
    
    	QUnit.test( "SessionDataAdapter:getSessionByProposalSessionId", function( assert ) {
		    function callback3(sender, data){
                    
			    assert.ok((data.length>0), "SessionDataAdapter.getSessionByProposalSessionId():" + data.length + "There's at least one session.");
			}
        	_this.getDataAdapter(_this.token, callback3).getSessionByProposalSessionId('mx415','44019');
	});
    
};


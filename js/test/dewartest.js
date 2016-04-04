function DewarTest(){
	Test.call(this);
}

DewarTest.prototype.init = Test.prototype.init;
DewarTest.prototype.authenticate = Test.prototype.authenticate;

DewarTest.prototype.getDataAdapter = function(token, callback){
	return new DewarDataAdapter({
            proposal 	: this.credential.proposal,
            token 	: this.token,
            url 	: this.credential.url,
	    async	: false,
            onSuccess	: callback
        });
};

DewarTest.prototype.test = function(token){
	var _this = this;
	QUnit.test( "DewarDataAdapter:getDewarsByProposal", function( assert ) {
		    	function callback(sender, data){
			    assert.ok((data.length>0), " DewarDataAdapter.getDewarsByProposal(): " + data.length  + " dewars");
			}
        	_this.getDataAdapter(_this.token, callback).getDewarsByProposal();
	});
    
    QUnit.test( "DewarDataAdapter:getDewarsByStatus", function( assert ) {
		    	function callback(sender, data){
			    assert.ok((data.length>0), " DewarDataAdapter.getDewarsByStatus(): " + data.length  + " dewars");
			}
        	_this.getDataAdapter(_this.token, callback).getDewarsByStatus("processing");
	});

};


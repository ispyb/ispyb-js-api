function BufferTest(){
	Test.call(this);
}

BufferTest.prototype.init = Test.prototype.init;
BufferTest.prototype.authenticate = Test.prototype.authenticate;

BufferTest.prototype.getDataAdapter = function(token, callback){
	return new BufferSaxsDataAdapter({
            proposal 	: proposal,
            token 	: token,
            url 	: url,
	    async	: false,
            onSuccess	: callback
        });
};

BufferTest.prototype.test = function(token){
	var _this = this;
	QUnit.test( "BufferTest:getBuffers", function( assert ) {
		    	function callback(sender, data){
			    assert.ok((data.length>0), "BufferSaxsDataAdapter.getBuffers(): There's at least one buffer.");
			};
        		_this.getDataAdapter(_this.token, callback).getBuffers();
	});

};


function MacromoleculeTest(){
	Test.call(this);
}

MacromoleculeTest.prototype.init = Test.prototype.init;
MacromoleculeTest.prototype.authenticate = Test.prototype.authenticate;

MacromoleculeTest.prototype.getDataAdapter = function(token, callback){
	return new MacromoleculeSaxsDataAdapter({
            proposal 	: proposal,
            token 	: token,
            url 	: url,
	    async	: false,
            onSuccess	: callback
        });
};

MacromoleculeTest.prototype.test = function(token){
	var _this = this;
	QUnit.test( "MacromoleculeTest:getMacromolecules", function( assert ) {
		    	function callback(sender, data){
			    assert.ok((data.length>0), "MacromoleculeSaxsDataAdapter.getMacromolecules(): There's at least one macromolecule.");
			};
        		_this.getDataAdapter(_this.token, callback).getMacromolecules();
	});
};


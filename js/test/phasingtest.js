function PhasingTest(){
	Test.call(this);
}

PhasingTest.prototype.init = Test.prototype.init;
PhasingTest.prototype.authenticate = Test.prototype.authenticate;

PhasingTest.prototype.getDataAdapter = function(token, callback){
	return new PhasingDataAdapter({
            proposal 	: this.credential.proposal,
            token 	    : this.token,
            url 	    : this.credential.url,
	        async	    : false,
            onSuccess	: callback
        });
};

PhasingTest.prototype.test = function(token){
	var _this = this;
    QUnit.module( "Phasing", function() {
            QUnit.test( "getPhasingViewByAutoProcIntegrationId", function( assert ) {
                        function callback(sender, data){                    
                        assert.ok((data.length>0), "getPhasingViewByAutoProcIntegrationId(): There's at least one buffer.");
                    }
                    
                    _this.getDataAdapter(_this.token, callback).getPhasingViewByAutoProcIntegrationId(395453);
            });
            
            QUnit.test( "getPhasingViewByDataCollectionId", function( assert ) {
                        function callback(sender, data){                    
                        assert.ok((data.length>0), "getPhasingViewByDataCollectionId(): There's at least one buffer.");
                    }
                    
                    _this.getDataAdapter(_this.token, callback).getPhasingViewByDataCollectionId(1192963);
            });
            
            QUnit.test( "getPhasingViewBySampleId", function( assert ) {
                        function callback(sender, data){                    
                        assert.ok((data.length>0), "getPhasingViewBySampleId(): There's at least one buffer.");
                    }
                    
                    _this.getDataAdapter(_this.token, callback).getPhasingViewBySampleId(326259);
            });
            
             QUnit.test( "getPhasingViewByProteinId", function( assert ) {
                        function callback(sender, data){                    
                        assert.ok((data.length>0), "getPhasingViewByProteinId(): There's at least one buffer.");
                    }
                    
                    _this.getDataAdapter(_this.token, callback).getPhasingViewByProteinId(303635);
            });
            
             QUnit.test( "getPhasingViewBySessionId", function( assert ) {
                        function callback(sender, data){                    
                        assert.ok((data.length>0), "getPhasingViewBySessionId(): There's at least one buffer.");
                    }
                    
                    _this.getDataAdapter(_this.token, callback).getPhasingViewBySessionId(1120);
            });
            
            QUnit.test( "getPhasingViewByPhasingStepId", function( assert ) {
                        function callback(sender, data){                    
                        assert.ok((data.length>0), "getPhasingViewByPhasingStepId(): There's at least one buffer.");
                    }
                    
                    _this.getDataAdapter(_this.token, callback).getPhasingViewByPhasingStepId(1120);
            });
            
                QUnit.test( "getPhasingFilesByPhasingStepId", function( assert ) {
                        function callback(sender, data){                    
                        assert.ok((data.length>0), "getPhasingFilesByPhasingStepId(): There's at least one buffer.");
                    }
                    
                    _this.getDataAdapter(_this.token, callback).getPhasingFilesByPhasingStepId(1120);
            });
    });

};


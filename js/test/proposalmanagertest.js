function ProposalManagerTest(){
	Test.call(this);
	localStorage.setItem("proposals", JSON.stringify(Config.data.proposalManager.proposal));
	this.proposalManager = new ProposalManager();
}



ProposalManagerTest.prototype.init = function(){
	var _this = this;
	QUnit.test( "ProposalManager", function( assert ) {
			   assert.ok((_this.proposalManager != null), "Proposal Manager Exists");
	});
	QUnit.test( "ProposalManager.Macromolecules ", function( assert ) {
			   assert.ok((_this.proposalManager.getMacromolecules().length > 0), "Macromolecules.length " + _this.proposalManager.getMacromolecules().length );

			    _(_this.proposalManager.getMacromolecules()).forEach(function(value) {
  			 		 var m = _this.proposalManager.getMacromoleculeById(value.macromoleculeId);
			  		 assert.ok((m != null), "Macromolecule " + m.macromoleculeId +" found ");
			    });
			    _(_this.proposalManager.getMacromolecules()).forEach(function(value) {
  			 		 var m = _this.proposalManager.getMacromoleculeByAcronym(value.acronym);
			  		 assert.ok((m != null), "Macromolecule " + m.acronym +" found ");
			    });
			   var m = _this.proposalManager.getMacromoleculeById(Config.data.proposalManager.macromoleculeId);
			   assert.ok((m != null), "Macromolecule " + m.macromoleculeId +" found ");
			   m = _this.proposalManager.getMacromoleculeByAcronym(Config.data.proposalManager.acronym);
			   assert.ok((m != null), "Macromolecule " + m.acronym +" found ");
	});
	QUnit.test( "ProposalManager.StockSolutions", function( assert ) {
			   assert.ok((_this.proposalManager.getStockSolutions().length > 0), "StockSolutions.length " + _this.proposalManager.getStockSolutions().length );
			   var s = _this.proposalManager.getStockSolutionById(Config.data.proposalManager.stockSolutionId); 
			   assert.ok((s.stockSolutionId == Config.data.proposalManager.stockSolutionId ), "StockSolutions found id " + s.stockSolutionId );

			   _(_this.proposalManager.getStockSolutions()).forEach(function(value) {
  					var stockSolutions = _this.proposalManager.getStockSolutionsBySpecimen(value.macromoleculeId, value.bufferId);
					assert.ok((stockSolutions.length > 0  ), stockSolutions.length + " StockSolutions found for " +  value.macromoleculeId + " and " + value.bufferId);
			    });
	});
	QUnit.test( "ProposalManager.Plate Types", function( assert ) {
			   var plateTypes = _this.proposalManager.getPlateTypes();
			   assert.ok((plateTypes.length > 0 ), "Plate types length " + plateTypes.length );

			   _(plateTypes).forEach(function(value) {
  					var plateType = _this.proposalManager.getPlateTypeById(value.plateTypeId);
					assert.ok((plateType != null ), "Plate type  " + plateType.plateTypeId + " found" );
			    });
	});

	QUnit.test( "ProposalManager.Crystals", function( assert ) {
			   var crystals = _this.proposalManager.getCrystals();
			   assert.ok((crystals.length > 0), "Crystals.length " + crystals.length );
			   _(crystals).forEach(function(value) {
  					var crystals = _this.proposalManager.getCrystalsByAcronym(value.proteinVO.acronym);
					assert.ok((crystals.length > 0 ), "Crystal acronym  " + value.proteinVO.acronym + " found " +  crystals.length + " times");
			    });
	});

	QUnit.test( "ProposalManager.Proteins", function( assert ) {
			   var proteins = _this.proposalManager.getProteins();
			   assert.ok((proteins.length > 0), "Proteins.length " + proteins.length );
			   _(proteins).forEach(function(value) {
				
  					var proteins = _this.proposalManager.getProteinByAcronym(value.acronym);
					assert.ok((proteins.length > 0 ), "Protein acronym  " + value.acronym + " found " +  proteins.length + " times");
			    });
	});


};


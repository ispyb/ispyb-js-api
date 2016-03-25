
function ProposalManager() {

}

ProposalManager.prototype.get = function(forceUpdate) {
	if ((localStorage.getItem("proposals") == null)||(forceUpdate)){
		var onSuccess= function(sender, proposals){
			localStorage.setItem("proposals", JSON.stringify(proposals));
		};
		EXI.getDataAdapter({async : false, onSuccess : onSuccess}).proposal.proposal.getProposalsInfo();
	}	
	return JSON.parse(localStorage.getItem("proposals"));
};

ProposalManager.prototype.clear = function() {
	localStorage.removeItem('proposals');
};


ProposalManager.prototype.getSessions = function() {
	if (localStorage.getItem("sessions") == null){
		var onSuccess= function(sender, sessions){
			localStorage.setItem("sessions", JSON.stringify(sessions));
		};
		EXI.getDataAdapter({async : false, onSuccess : onSuccess}).proposal.session.getSessions();
	}
	return JSON.parse(localStorage.getItem("sessions"));
};

ProposalManager.prototype.getFutureSessions = function() {
	var sessions = this.getSessions();
	var today = moment();
	var futureSessions = [];
	for (var i = 0; i < sessions.length; i++) {
		if (today.diff(sessions[i].startDate) < 0){
			futureSessions.push(sessions[i]);
		}
	}
	return futureSessions;
};


ProposalManager.prototype.getBufferColors = function() {
	return [ "#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#2c7fb8", "#253494" ];
};

ProposalManager.prototype.getLabcontacts = function() {
	return this.get()[0].labcontacts;
};

ProposalManager.prototype.getLabcontactById = function(labContactId) {
	return _.find(this.getLabcontacts(), function(o) { return o.labContactId == labContactId; });
};

ProposalManager.prototype.getPlateTypeById = function(plateTypeId) {
	return _.find(this.getPlateTypes(), function(o) { return o.plateTypeId == plateTypeId; });
};

ProposalManager.prototype.getPlateTypes = function() {
	return this.get()[0].plateTypes;
};

ProposalManager.prototype.getPlateByFlavour = function() {
	return [ this.getPlateTypes()[0], this.getPlateTypes()[2], this.getPlateTypes()[3] ];
};

ProposalManager.prototype.getBufferById = function(bufferId) {
	var proposals = this.get();
	var f = function(o) { return o.bufferId == bufferId; };
	for (var i = 0; i < proposals.length; i++) {
		var found = _.find(proposals[i].buffers, f);
		if (found != null) {return found;}
	}
};

ProposalManager.prototype.getMacromoleculeById = function(macromoleculeId) {
	var proposals = this.get();
	var f = function(o) { return o.macromoleculeId == macromoleculeId; };
	for (var i = 0; i < proposals.length; i++) {
		var found = _.find(proposals[i].macromolecules, f);
		if (found != null) {return found;}
	}
	return null;
};

ProposalManager.prototype.getMacromoleculeByAcronym = function(acronym) {
	var proposals = this.get();
	var f = function(o) { return o.acronym == acronym; };
	for (var i = 0; i < proposals.length; i++) {
		var found = _.find(proposals[i].macromolecules, f);
		if (found != null) {return found;}
	}
	return null;
};

ProposalManager.prototype.getStockSolutionById = function(stockSolutionId) {
	var proposals = this.get();
	var f = function(o) { return o.stockSolutionId == stockSolutionId; };
	for (var i = 0; i < proposals.length; i++) {
		var found = _.find(proposals[i].stockSolutions, f);
		if (found != null) {return found;}
	}
};

ProposalManager.prototype.getBuffers = function() {
	var proposals = this.get();
	var buffers = [];
	for (var i = 0; i < proposals.length; i++) {
		buffers = buffers.concat(proposals[i].buffers);
	}
	return buffers;
};

ProposalManager.prototype.getMacromolecules = function() {
	var proposals = this.get();
	var macromolecules = [];
	for (var i = 0; i < proposals.length; i++) {
		macromolecules = macromolecules.concat(proposals[i].macromolecules);
	}
	return macromolecules;
};

ProposalManager.prototype.getProposals = function() {
	var proposals = this.get();
	var result = [];
	for (var i = 0; i < proposals.length; i++) {
		proposals[i].proposal[0]["proposal"] = proposals[i].proposal[0].code + proposals[i].proposal[0].number;
		result = result.concat(proposals[i].proposal);
	}
	return result;
};

ProposalManager.prototype.getProposalById = function(proposalId) {
	var proposals = this.get();
	var result = [];
	for (var i = 0; i < proposals.length; i++) {
		if (proposals[i].proposal[0].proposalId == proposalId){
			return proposals[i].proposal[0];
		}
	}
	return result;
};

ProposalManager.prototype.getStockSolutions = function() {
	return this.get()[0].stockSolutions;
};

ProposalManager.prototype.getProteins = function() {
	return this.get()[0].proteins;
};

ProposalManager.prototype.getCrystals = function() {
	return this.get()[0].crystals;
};

ProposalManager.prototype.getProteinByAcronym = function(acronym) {
	return _.filter(this.getProteins(), function(o) { return o.acronym == acronym; });
};

ProposalManager.prototype.getCrystalsByAcronym = function(acronym) {
	return _.filter(this.getCrystals(), 
						function(o) { 
								if (o.proteinVO == null) {return false;} 
								else {return o.proteinVO.acronym == acronym;} 
						}
	);
};

ProposalManager.prototype.getStockSolutionsBySpecimen = function(macromoleculeId, bufferId) {
	var aux = _.filter(this.getStockSolutions(), function(o) { return o.macromoleculeId == macromoleculeId; });
	return _.filter(aux, function(o) { return o.bufferId == bufferId; });
};

ProposalManager.prototype.getUnpackedStockSolutions = function() {
	var stockSolutions = this.getStockSolutions();
	var result = [];
	for (var i = 0; i < stockSolutions.length; i++) {
		if (stockSolutions[i].boxId == null) {
			result.push(stockSolutions[i]);
		}
	}
	return result;
};

ProposalManager.prototype.getStockSolutionsByDewarId = function(dewarId) {
	return _.find(this.getStockSolutions(), function(o) { return o.boxId == dewarId; });
};

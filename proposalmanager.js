
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
	var proposals = this.get();
	return proposals[0].labcontacts;
};

ProposalManager.prototype.getLabcontactById = function(labContactId) {
	var labContacts = this.getLabcontacts();
	for (var i = 0; i < labContacts.length; i++) {
		if (labContacts[i].labContactId == labContactId){
			return labContacts[i];
		}
	}
};

ProposalManager.prototype.getPlateTypeById = function(plateTypeId) {
	var types = this.getPlateTypes();
	for (var i = 0; i < types.length; i++) {
		if (types[i].plateTypeId == plateTypeId) {
			return types[i];
		}
	}
	return null;
};

ProposalManager.prototype.getPlateTypes = function() {
	var proposals = this.get();
	/** TODO: This depends on proposal **/
	return proposals[0].plateTypes;

};

ProposalManager.prototype.getPlateByFlavour = function() {
	var plateTypes = this.get()[0].plateTypes;
	return [ plateTypes[0], plateTypes[2], plateTypes[3] ];
};

ProposalManager.prototype.getBufferById = function(bufferId) {
	var proposals = this.get();
	for (var i = 0; i < proposals.length; i++) {
		for (var j = 0; j < proposals[i].buffers.length; j++) {
			if (proposals[i].buffers[j].bufferId == bufferId) {
				return proposals[i].buffers[j];
			}
		}
	}
};

ProposalManager.prototype.getMacromoleculeById = function(macromoleculeId) {
	var proposals = this.get();
	for (var i = 0; i < proposals.length; i++) {
		for (var j = 0; j < proposals[i].macromolecules.length; j++) {
			if (proposals[i].macromolecules[j].macromoleculeId == macromoleculeId) {
				return proposals[i].macromolecules[j];
			}
		}
	}
};

ProposalManager.prototype.getMacromoleculeByAcronym = function(acronym) {
	var proposals = this.get();
	for (var i = 0; i < proposals.length; i++) {
		for (var j = 0; j < proposals[i].macromolecules.length; j++) {
			if (proposals[i].macromolecules[j].acronym == acronym) {
				return proposals[i].macromolecules[j];
			}
		}
	}
};

ProposalManager.prototype.getStockSolutionById = function(stockSolutionId) {
	var proposals = this.get();
	for (var i = 0; i < proposals.length; i++) {
		for (var j = 0; j < proposals[i].stockSolutions.length; j++) {
			if (proposals[i].stockSolutions[j].stockSolutionId == stockSolutionId) {
				return proposals[i].stockSolutions[j];
			}
		}
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

ProposalManager.prototype.getProteinByAcronym = function(acronym) {
	var proteins = this.getProteins();
	for (var i = 0; i < proteins.length; i++) {
		if (proteins[i].acronym == acronym){
			return proteins[i];
		}
	}
	return null;
};

ProposalManager.prototype.getStockSolutionsBySpecimen = function(macromoleculeId, bufferId) {
	var result = [];
	var stockSolutions = this.getStockSolutions();
	for (var i = 0; i < stockSolutions.length; i++) {
		if (stockSolutions[i].macromoleculeId == macromoleculeId) {
			if (stockSolutions[i].bufferId == bufferId) {
				result.push(stockSolutions[i]);
			}
		}
	}
	return result;
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
	var stockSolutions = this.getStockSolutions();
	var result = [];
	for (var i = 0; i < stockSolutions.length; i++) {
		if (stockSolutions[i].boxId == dewarId) {
			result.push(stockSolutions[i]);
		}
	}
	return result;
};

function MacromoleculeSaxsDataAdapter(args){
	DataAdapter.call(this, args);
}

MacromoleculeSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
MacromoleculeSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
MacromoleculeSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

MacromoleculeSaxsDataAdapter.prototype.saveMacromolecule = function(macromolecule){
    var url = ('/{token}/proposal/{proposal}/saxs/macromolecule/save');
	this.post(url, {macromolecule : JSON.stringify(macromolecule)});
};

MacromoleculeSaxsDataAdapter.prototype.getMacromolecules= function(){
	this.get('/{token}/proposal/{proposal}/saxs/macromolecule/list');
};


MacromoleculeSaxsDataAdapter.prototype.getContactDescriptionUploadFileURL= function(macromoleculeId){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, ('/{token}/proposal/{proposal}/saxs/macromolecule/{0}/contactfile/upload'.format([macromoleculeId])));
};

MacromoleculeSaxsDataAdapter.prototype.removeContactDescriptionFile= function(macromoleculeId){
	this.get('/{token}/proposal/{proposal}/saxs/macromolecule/{0}/contactfile/remove'.format([macromoleculeId]));
};


MacromoleculeSaxsDataAdapter.prototype.getAddPDBURL= function(macromoleculeId){
	var connection = EXI.credentialManager.getConnections()[0];
	return this.getUrl(connection, ('/{token}/proposal/{proposal}/saxs/macromolecule/{0}/pdb/upload'.format([macromoleculeId])));
};

MacromoleculeSaxsDataAdapter.prototype.removeStructure= function(macromoleculeId, structureId){
	this.get('/{token}/proposal/{proposal}/saxs/macromolecule/{0}/pdb/{1}/remove'.format([macromoleculeId, structureId]));
};

MacromoleculeSaxsDataAdapter.prototype.saveStructure= function(macromoleculeId, structureId,  multiplicity, symmetry){
	var url = ('/{token}/proposal/{proposal}/saxs/macromolecule/{0}/pdb/{1}/save'.format([macromoleculeId, structureId]));
	this.post(url, {
						symmetry : symmetry,
						multiplicity : multiplicity
	});
		
};
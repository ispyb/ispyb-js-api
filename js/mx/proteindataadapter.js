function ProteinDataAdapter(args){
	DataAdapter.call(this, args);
}

ProteinDataAdapter.prototype.get = DataAdapter.prototype.get;
ProteinDataAdapter.prototype.post = DataAdapter.prototype.post;
ProteinDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

ProteinDataAdapter.prototype.getProteinByProposalId= function(){
	 this.get('/{token}/proposal/{proposal}/mx/protein/list');
};










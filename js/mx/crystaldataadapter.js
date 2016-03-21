function CrystalDataAdapter(args){
	DataAdapter.call(this, args);
}

CrystalDataAdapter.prototype.get = DataAdapter.prototype.get;
CrystalDataAdapter.prototype.post = DataAdapter.prototype.post;
CrystalDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

CrystalDataAdapter.prototype.getCrystalsByProposalId= function(){
	 this.get('/{token}/proposal/{proposal}/mx/crystal/list');
};

CrystalDataAdapter.prototype.getCrystalById= function(crystalId){
	 this.get('/{token}/proposal/{proposal}/mx/crystal/{0}/get'.format( [crystalId.toString()]));
};











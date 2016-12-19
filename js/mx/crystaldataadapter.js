/**
*
* @class CrystalDataAdapter
* @constructor
*/
function CrystalDataAdapter(args){
	DataAdapter.call(this, args);
}

CrystalDataAdapter.prototype.get = DataAdapter.prototype.get;
CrystalDataAdapter.prototype.post = DataAdapter.prototype.post;
CrystalDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

/**
* @method getCrystalsByProposalId
*/
CrystalDataAdapter.prototype.getCrystalsByProposalId= function(){
	 this.get('/{token}/proposal/{proposal}/mx/crystal/list');
};

/**
* @method getCrystalById
*/
CrystalDataAdapter.prototype.getCrystalById= function(crystalId){
	 this.get('/{token}/proposal/{proposal}/mx/crystal/{0}/get'.format( [crystalId.toString()]));
};

/**
* @method getGeometryclassBySpacegroup
* then it is possible to retrieve all cell dimensions from the geometry class
*/
CrystalDataAdapter.prototype.getGeometryclassBySpacegroup= function(spacegroup){
	 this.get('/{token}/mx/geometryclass/{0}/get'.format( [spacegroup]));
};












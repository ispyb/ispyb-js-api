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
	 this.get('/{token}/proposal/{proposal}/mx/crystal/geometryclass/{0}/list'.format( [spacegroup]));
};



/**
* @method save
* Create and new crystal form or updates an existing one
*/
CrystalDataAdapter.prototype.save= function(
                                                proteinId,
                                                crystalId,
                                                name,
                                                spaceGroup,
                                                cellA,
                                                cellB,
                                                cellC,
                                                cellAlpha,
                                                cellBeta,
                                                cellGamma,
                                                comments)
{
    var url = ('/{token}/proposal/{proposal}/mx/crystal/save');
	this.post(url, {
						proteinId:proteinId,
                        crystalId:crystalId,
                        name:name,
                        spaceGroup:spaceGroup,
                        cellA:cellA,
                        cellB:cellB,
                        cellC:cellC,
                        cellAlpha:cellAlpha,
                        cellBeta:cellBeta,
                        cellGamma:cellGamma,
                        comments:comments
	});
};








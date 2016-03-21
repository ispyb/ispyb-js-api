/**
* DataADapter read/write information about lab contacts
*
* @class LabcontactDataAdapter
* @constructor
*/
function LabcontactDataAdapter(args){
	DataAdapter.call(this, args);
}

LabcontactDataAdapter.prototype.get = DataAdapter.prototype.get;
LabcontactDataAdapter.prototype.post = DataAdapter.prototype.post;
LabcontactDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;



/**
* This method retrieves all the labcontacts linked to a proposal

* @method getLabContacts
*/
LabcontactDataAdapter.prototype.getLabContacts = function(){
	this.get('/{token}/proposal/{proposal}/shipping/labcontact/list');
};
/**
* This method retrieves all scientists linked to a proposal from the SMIS database
* @method getLabContacts
*/
LabcontactDataAdapter.prototype.getScientists = function(){
	this.get('/{token}/proposal/{proposal}/shipping/labcontact/smis/list');
};
/**
* This method retrieves a labcontact based on its labContactId
* @method getLabContactById
*/
LabcontactDataAdapter.prototype.getLabContactById = function(labContactId){
	this.get('/{token}/proposal/{proposal}/shipping/labcontact/{0}/get'.format([labContactId]));
};
/**
* This method updates the information of a labcontact
* @method saveLabContact
*/
LabcontactDataAdapter.prototype.saveLabContact = function(labcontact){
    var url = ('/{token}/proposal/{proposal}/shipping/labcontact/save');
	this.post(url, {
		labcontact : JSON.stringify(labcontact)
	});
};


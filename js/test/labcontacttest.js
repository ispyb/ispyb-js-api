function LabcontactTest(){
	Test.call(this);
}

LabcontactTest.prototype.init = Test.prototype.init;
LabcontactTest.prototype.authenticate = Test.prototype.authenticate;

LabcontactTest.prototype.getDataAdapter = function(token, onSuccess, onError){
	return new LabcontactDataAdapter({
            proposal 	: this.credential.proposal,
            token 	: this.token,
            url 	: this.credential.url,
	    async	: false,
            onSuccess	: onSuccess,
	    onError	: onError
        });
};

LabcontactTest.prototype.modify = function(labContact, key, originalValue, newValue, assert, msg){
	function failed(sender, data){
			    assert.ok(false);
	}

	function callback(sender, data){
	   	assert.ok((data[key] == newValue), msg);
	}
	labContact[key] =  newValue;
	this.getDataAdapter(this.token, callback, failed).saveLabContact(labContact);
};


LabcontactTest.prototype.test = function(token){
	var _this = this;
	QUnit.test( "LabcontactTest", function( assert ) {
		function failed(sender, data){
		    assert.ok(false);
		}

	    	function callback1(sender, data){
		    assert.ok((data.length>0), "getLabContacts(): There's at least one labcontact.");
		}

		_this.getDataAdapter(_this.token, callback1, failed).getLabContacts();


	    	function callback2(sender, data){
		   assert.ok((data.length>0), "getScientists(): There's at least one scientist.");
		}
		_this.getDataAdapter(_this.token, callback2, failed).getScientists();

		var labContact = null;
		function callback3(sender, data){
		   	assert.ok((data.labContactId == Config.data.labcontacts.labContactId), "getLabContactById(): Labcontact found.");
			labContact = data;
		
		}
		_this.getDataAdapter(_this.token, callback3, failed).getLabContactById(Config.data.labcontacts.labContactId);

		function callback4(sender, data){
		   	assert.ok((data.cardName == Config.data.labcontacts.cardName.original), "saveLabContact(): Labcontact saved.");
			labContact = data;
		}
		_this.getDataAdapter(_this.token, callback4, failed).saveLabContact(labContact);


	_this.modify(labContact, "cardName", Config.data.labcontacts.cardName.original, Config.data.labcontacts.cardName.test, assert,  "Labcontact saved with changed cardname");
	_this.modify(labContact, "cardName", Config.data.labcontacts.cardName.test, Config.data.labcontacts.cardName.original,  assert,  "Labcontact saved reverted to original cardname");
	_this.modify(labContact, "courierAccount", Config.data.labcontacts.courierAccount.original, Config.data.labcontacts.courierAccount.test, assert,  "Labcontact saved with changed courierAccount");
	_this.modify(labContact, "courierAccount", Config.data.labcontacts.courierAccount.test, Config.data.labcontacts.courierAccount.original,  assert,  "Labcontact saved reverted to original courierAccount");

	assert.ok((labContact.cardName == Config.data.labcontacts.cardName.original), "saveLabContact(): Test object is unchanged");
	assert.ok((labContact.courierAccount == Config.data.labcontacts.courierAccount.original), "saveLabContact(): Test object is unchanged");

	});
};


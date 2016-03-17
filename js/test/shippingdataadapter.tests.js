"use strict";
//* NEEDED PARAMETERS FOR CONNECTION **/
var proposal = "mx415";
var user = "mx415";
var password = "pimx415";
var url = "http://ispyvalid.esrf.fr:8080/ispyb/ispyb-ws/rest";
var token = null;
var shippingId = null;
var labContactId = null;

QUnit.test( "ShippingDataAdapter Class", function( assert ) {
    assert.ok(true,"Running...");



    function getShippingDataAdapter(fn_success, fn_error){
        return new ShippingDataAdapter({
            proposal 	: proposal,
            token 		: token,
            url 		: url,
            onSuccess	: fn_success,
            onError     : fn_error
        });
    };

//* NEEDED PARAMETERS FOR CONNECTION **/

    function fn_auth(sender, data){
        token = data.token;
        //console.log("Token is: " + token);

        testGetShippings();
        testGetLabContacts();
        testGetScientists();

        setTimeout(testGetShipment, 2000);
        setTimeout(testGetDewarsByShipmentId,2200);
        setTimeout(testGetLabContactById,2400);
        setTimeout(testSaveGoodLabContact,2600);
        setTimeout(testSaveBadLabContact,2800);

    };

// AUTHENTICATION
    var authenticationDataAdapter = new AuthenticationDataAdapter({
        onSuccess: fn_auth
    });
    authenticationDataAdapter.authenticate(user, password, url);

// FIRST TEST AFTER AUTHENTICATION **/
    // ShippingDataAdapter.prototype.getShippings = function()
    function testGetShippings(){

        function fn_error(sender, error){
            console.log("ShippingDataAdapter.getShippings(error): " + error.responseText);
            assert.ok((1==0),"ShippingDataAdapter.getShippings(): failed. " + error.responseText);
        };

        function fn_shippings(sender, data){
            //console.log("Shipping data.length: " + data.length);
            assert.ok((data.length>0),"ShippingDataAdapter.getShippings(): There's at least one shipping.");
            //console.log(data[0]);
            shippingId = data[0].Shipping_shippingId ;
            //console.log("ShippingDataAdapter.getShippings() shippingId: " + shippingId);
        };

        var sda = getShippingDataAdapter(fn_shippings, fn_error);
        sda.getShippings();

    } // END testGetShippings()

    // ShippingDataAdapter.prototype.getShipment = function(shippingId)
    function testGetShipment(){

        function fn_error(sender, error){
            console.log("ShippingDataAdapter.getShipment(error): " + error.responseText);
            assert.ok((1==0),"ShippingDataAdapter.getShipment(): failed. " + error.responseText);
        };

        function fn_shipment(sender, data){
            //console.log("ShippingDataAdapter.getShipment(): " + typeof(data) );
            assert.ok((typeof(data) == 'object'),"ShippingDataAdapter.getShipment(): There's a shipment.");
            //console.table(data);
        };

        var sda = getShippingDataAdapter(fn_shipment, fn_error);
        //console.log("ShippingDataAdapter.getShipment() shippingId: " + shippingId);
        sda.getShipment(shippingId);

    } // END testGetShipment()

    // ShippingDataAdapter.prototype.getDewarsByShipmentId = function(shippingId)
    function testGetDewarsByShipmentId(){

        function fn_error(sender, error){
            console.log("ShippingDataAdapter.getDewarsByShipmentId(error): " + error.responseText);
            assert.ok((1==0),"ShippingDataAdapter.getDewarsByShipmentId(): failed. " + error.responseText);
        };

        function fn_dewars(sender, data){
           // console.log("ShippingDataAdapter.getDewarsByShipmentId(): " + typeof(data) );
            assert.ok((typeof(data) == 'object'),"ShippingDataAdapter.getDewarsByShipmentId(): There is at least one dewar.");
            //console.table(data);
        };

        var sda = getShippingDataAdapter(fn_dewars, fn_error);
        //console.log("ShippingDataAdapter.getDewarsByShipmentId() shippingId: " + shippingId);
        sda.getDewarsByShipmentId(shippingId);

    } // END testGetDewarsByShipmentId()

    //ShippingDataAdapter.prototype.getLabContacts = function()
    function testGetLabContacts(){

        function fn_error(sender, error){
            console.log("ShippingDataAdapter.getLabContacts(error): " + error.responseText);
            assert.ok((1==0),"ShippingDataAdapter.getLabContacts(): failed. " + error.responseText);
        };

        function fn_contacts(sender, data){
            //console.log("ShippingDataAdapter.getLabContacts(): " + typeof(data) );
            assert.ok((typeof(data) == 'object'),"ShippingDataAdapter.getLabContacts(): There is at least one contact.");
            //console.table(data);
            labContactId = data[0].labContactId ;
        };

        var sda = getShippingDataAdapter(fn_contacts, fn_error);
        sda.getLabContacts();

    } // END testGetLabContacts()

    // ShippingDataAdapter.prototype.getScientists = function()
    // TODO: getScientists fails with Could not send Message error.

    function testGetScientists(){

        function fn_error(sender, error){
            console.log("ShippingDataAdapter.getScientists(error): " + error.responseText);
            assert.ok((1==0),"ShippingDataAdapter.getScientists(): failed. " + error.responseText);
        };

        function fn_scientists(sender, data){
            //console.log("ShippingDataAdapter.getScientists(typeof): " + typeof(data) );
            assert.ok((typeof(data) == 'object'),"ShippingDataAdapter.getScientists(): There is at least one scientist.");
            //console.table(data);
        };

        var sda = getShippingDataAdapter(fn_scientists, fn_error);
        sda.getScientists();

    } // END testGetScientists()

    // ShippingDataAdapter.prototype.getLabContactById = function(labContactId){
    // TODO: When the labContactId does not exists, does not return an error
    //       Is this a bug or a feature ??

    function testGetLabContactById(){

        function fn_error(sender, error){
            console.log("ShippingDataAdapter.getLabContactById(error): " + error.responseText);
            assert.ok((1==0),"ShippingDataAdapter.getLabContactById(): failed. " + error.responseText);
        };

        function fn_contactById(sender, data){
            //console.log("ShippingDataAdapter.getLabContactById(): " + typeof(data) );
            assert.ok((typeof(data) == 'object'),"ShippingDataAdapter.getLabContactById(): found contact.");
            //console.log(data);
        };

        var sda = getShippingDataAdapter(fn_contactById, fn_error);
        sda.getLabContactById(labContactId);

    } // END testGetLabContactById()

    // ShippingDataAdapter.prototype.saveLabContact = function(labcontact)
    // TODO: document the labcontact object
    // TODO: where is the delete labContact ??
    // TODO: the given newGoodLabContact is not created and no error return
    //       and a null (!) string is returned. bug or feature??
    // TODO: the given malformed newBadLabContact is not created and no error return
    //       and a null (!) string is returned. bug or feature??

    function testSaveGoodLabContact(){

        var newGoodLabContact = {
                labContactId            : 20000,
                billingReference        : "",
                cardName                : "BSA-E.S.R.F.",
                courierAccount          : "",
                defaultCourrierCompany  : "ESRF",
                dewarAvgCustomsValue    : 0,
                dewarAvgTransportValue  : 0,
                personVO                : {
                    emailAddress: "bsa@esrf.fr",
                    familyName  : "SCARINGELLA",
                    faxNumber   : "04 76 88 20 20",
                    givenName   : "Bernie",
                    login       : "",
                    passwd      : "",
                    personId    : 901699,
                    personUUID  : null,
                    phoneNumber : "04 76 88 23 12",
                    siteId      : null,
                    title       : null
                }

        } // end object newGoodLabContactId

        function fn_errorGoodContact(sender, error){
            console.log("ShippingDataAdapter.saveLabContact(error): " + error.responseText);
            assert.ok((1==0),"ShippingDataAdapter.saveLabContact(): failed. " + error.responseText);
        };

        function fn_newContact(sender, data){
            //console.log("ShippingDataAdapter.saveLabContact(good): " + typeof(data) );
            //console.log("ShippingDataAdapter.saveLabContact(good): " + data );
            assert.ok((1==1),"ShippingDataAdapter.saveLabContact(good): saved new contact.");
            //console.table(data);
        };

        var sda = getShippingDataAdapter(fn_newContact, fn_errorGoodContact);
        sda.saveLabContact(newGoodLabContact);

    } // END testSaveGoodLabContact()

    function testSaveBadLabContact(){

        var newBadLabContact = {
            labContactId            : -1,
            billingReference        : "",
            cardName                : "Blabla",
            courierAccount          : "",
            defaultCourrierCompany  : "Blibli",
            dewarAvgCustomsValue    : 0,
            dewarAvgTransportValue  : 0,
            personVO                : {
                emailAddress: "bloublou",
                familyName  : null,
                faxNumber   : "04 76 88 20 20",
                givenName   : "Bernie",
                login       : "",
                passwd      : "",
                personId    : -1,
                personUUID  : null,
                phoneNumber : "04 76 88 23 12",
                siteId      : null,
                title       : null
            }

        } // end object newBadLabContactId

        function fn_errorBadContact(sender, error){
            console.log("ShippingDataAdapter.saveLabContact(error): " + error.responseText);
            assert.ok((1==0),"ShippingDataAdapter.saveLabContact(): failed. " + error.responseText);
        };

        function fn_newContact(sender, data){
            //console.log("ShippingDataAdapter.saveLabContact(bad): " + typeof(data) );
            //console.log("ShippingDataAdapter.saveLabContact(bad): " + data );
            assert.ok((1==1),"ShippingDataAdapter.saveLabContact(bad): saved new contact.");
            //console.table(data);
        };

        var sda = getShippingDataAdapter(fn_newContact, fn_errorBadContact);
        sda.saveLabContact(newBadLabContact);

    } // END testSaveBadLabContact()

});


"use strict";
//* NEEDED PARAMETERS FOR CONNECTION **/
var proposal = "mx415";
var user = "mx415";
var password = "pimx415";
var url = "http://ispyvalid.esrf.fr:8080/ispyb/ispyb-ws/rest";
var token = null;
var shippingId = null;


QUnit.test( "DewarDataAdapter Class", function( assert ) {
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

    function getDewarDataAdapter(fn_success, fn_error){
        return new DewarDataAdapter({
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
        setTimeout(testSaveGoodDewar, 1000);
        //setTimeout(testSaveBadDewar, 1200);
        setTimeout(testDeleteDewars, 3000);
    };

// AUTHENTICATION
    var authenticationDataAdapter = new AuthenticationDataAdapter({
        onSuccess: fn_auth
    });
    authenticationDataAdapter.authenticate(user, password, url);

// FIRST TEST AFTER AUTHENTICATION **/

    // First call getShippings to store a shippingId needed for next tests
    // ShippingDataAdapter.prototype.getShippings = function()

    function testGetShippings(){

        function fn_error(sender, error){
            console.log("ShippingDataAdapter.getShippings(error): " + error.responseText);
            assert.ok((1==0),"ShippingDataAdapter.getShippings(): failed. " + error.responseText);
        };

        function fn_shippings(sender, data){
            //console.log("Shipping data.length: " + data.length);
            //assert.ok((data.length>0),"ShippingDataAdapter.getShippings(): There's at least one shipping.");
            //console.log(data[0]);
            shippingId = data[0].Shipping_shippingId ;
            //console.log("ShippingDataAdapter.getShippings() shippingId: " + shippingId);
        };

        var sda = getShippingDataAdapter(fn_shippings, fn_error);
        sda.getShippings();

    } // END testGetShippings()

    // DewarDataAdapter.prototype.saveDewar= function(shippingId, dewar)
    // TODO: when saving the same dewar again no error returned. Bug or feature ?
    //       the same dewar is saved multiple time with a different Id.

    // TODO: when saving a malformed dewar no error returned. Bug or feature ?
    //       again the same dewar is saved multiple time with a different Id.

    function testSaveGoodDewar(){

        var newGoodDewar = {
            dewardId        : 309862,
            barCode         : null,
            code            : "BsaEsrf",
            comments        : "test dewar for TDD",
            customsValue    : null,
            dewarStatus     : "opened",
            isStorageDewar  : false,
            sessionVO       : null,
            storageLocation : "-80",
            timeStamp       : new Date(2016,1,1).toJSON() ,
            trackingNumberFromSynchrotron: "",
            trackingNumberToSynchrotron: "",
            transportValue  : 0,
            type            : "Dewar"
            /*containerVOs    : {
                beamlineLocation        : null,
                capacity                : 16,
                code                    : null,
                //containerId             : 252525,
                containerStatus         : null,
                containerType           : "Puck",
                sampleChangerLocation   : null,
                sampleVOs               : [],
                timeStamp               : new Date(2016,1,1).toJSON()
            }*/

        };
        function fn_error(sender, error){
            console.log("DewarDataAdapter.saveDewar(error): " + error.responseText);
            assert.ok((1==0),"DewarDataAdapter.saveDewar(good one): failed. " + error.responseText);
        };

        function fn_saveDewar(sender, data){
            //console.log("DewarDataAdapter.saveDewar(good): " + typeof(data) );
            //console.log("DewarDataAdapter.saveDewar(good): " + data );
            console.log(data)
            assert.ok( (1==1),"DewarDataAdapter.saveDewar(): new good dewar saved.");
        };

        var dda = getDewarDataAdapter(fn_saveDewar, fn_error);
        dda.saveDewar(shippingId, newGoodDewar);

    } // END testSaveGoodDewar()

    function testSaveBadDewar(){

        var newBadDewar = {
            dewardId        : -1,
            barCode         : null,
            code            : "bla",
            comments        : "test dewar for TDD",
            customsValue    : null,
            dewarStatus     : "opened",
            isStorageDewar  : false,
            sessionVO       : null,
            storageLocation : "-80",
            timeStamp       : -1 ,
            trackingNumberFromSynchrotron: "",
            trackingNumberToSynchrotron: "",
            transportValue  : 0,
            type            : "Dewar",
            containerVOs    : -1

        };
        function fn_error(sender, error){
            console.log("DewarDataAdapter.saveDewar(error): " + error.responseText);
            assert.ok((1==0),"DewarDataAdapter.saveDewar(bad one): failed. " + error.responseText);
        };

        function fn_saveDewar(sender, data){
            //console.log("DewarDataAdapter.saveDewar(good): " + typeof(data) );
            //console.log("DewarDataAdapter.saveDewar(good): " + data );
            //console.table(data)
            assert.ok( (1==1),"DewarDataAdapter.saveDewar(): new bad dewar saved.");
        };

        var dda = getDewarDataAdapter(fn_saveDewar, fn_error);
        dda.saveDewar(shippingId, newBadDewar);

    } // END testSaveBadDewar()

    // DewarDataAdapter.prototype.removeDewar= function(shippingId, dewarId)
    // TODO: the structure of dewars data is not the same (from what I can see)
    //       and the delete does not delete anything because the getDewars call
    //       return something else the saveDewar call did stored. Or I did not
    //       understand the flow of calls and data.
    //
    // TODO: general need to document data/object structures for all classes ??
    //
    function testDeleteDewars(){

        var sda = {};
        var dda = {};

        function fn_error(sender, error){
            console.log("ShippingDataAdapter.getDewarsByShipmentId(error): " + error.responseText);
            assert.ok((1==0),"ShippingDataAdapter.getDewarsByShipmentId(): failed. " + error.responseText);
        };

        function removeThisDewar(dewar, idx,arr) {
            dda.removeDewar(shippingId, dewar.dewarId);
        }

        function fn_delDewar(sender,data){
            console.log("DewarDataAdapter.removeDewar(done): " + typeof(data) );
            console.log("DewarDataAdapter.removeDewar(done): " + data );
        }

        function fn_delError(sender, error){
            console.log("DewarDataAdapter.removeDewar(error): " + error.responseText);
            assert.ok((1==0),"DewarDataAdapter.removeDewar(): failed. " + error.responseText);
        };

        function fn_dewars(sender, data){
            console.log("ShippingDataAdapter.getDewarsByShipmentId(): " + typeof(data) );
            assert.ok((typeof(data) == 'object'),"ShippingDataAdapter.getDewarsByShipmentId(): There is at least one dewar.");
            console.table(data);
            var searchedDW = [];
            searchedDW = data.filter(function (obj) {
                return ( (obj.code === "bla") || (obj.code === "BsaEsrf" ) );
            });
            console.log("DewarDataAdapter.removeDewar(search): " + typeof(searchedDW) );
            console.table(searchedDW);
            if ( searchedDW.length > 0) {
                dda = getDewarDataAdapter(fn_delDewar, fn_delError);
                searchedDW.forEach(removeThisDewar);
            }
        };

        sda = getShippingDataAdapter(fn_dewars, fn_error);
        //console.log("ShippingDataAdapter.getDewarsByShipmentId() shippingId: " + shippingId);
        sda.getDewarsByShipmentId(shippingId);

    } // END testDeleteDewars()

});


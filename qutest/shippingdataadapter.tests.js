"use strict";
//* NEEDED PARAMETERS FOR CONNECTION **/
var proposal = "mx415";
var user = "mx415";
var password = "pimx415";
var url = "http://ispyvalid.esrf.fr:8080/ispyb/ispyb-ws/rest";
var token = null;


QUnit.test( "ShippingDataAdapter Class", function( assert ) {
    assert.ok(true,"Running...");

    function getShippingDataAdapter(fn){
        return new ShippingDataAdapter({
            proposal 	: proposal,
            token 		: token,
            url 		: url,
            onSuccess	: fn
        });
    };

//* NEEDED PARAMETERS FOR CONNECTION **/

    function fn_auth(sender, data){
        token = data.token;
        console.log("Token is: " + token);

        testGetShippings();

    };

// AUTHENTICATION
    var authenticationDataAdapter = new AuthenticationDataAdapter({
        onSuccess: fn_auth
    });
    authenticationDataAdapter.authenticate(user, password, url);

// FIRST TEST AFTER AUTHENTICATION **/
    // ShippingDataAdapter.prototype.getShippings = function()
    function testGetShippings(){

        function fn_shippings(sender, data){
            console.log("Shipping data.length: " + data.length);
            assert.ok((data.length>0),"ShippingDataAdapter.prototype.getShippings(): There's at least one shipping.");
            //console.table(data);
        };

        var sda = getShippingDataAdapter(fn_shippings);
        sda.getShippings();

    } // END testGetSessions()

    // ShippingDataAdapter.prototype.getShipment = function(shippingId)

});


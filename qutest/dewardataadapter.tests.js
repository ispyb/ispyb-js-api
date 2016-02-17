"use strict";
//* NEEDED PARAMETERS FOR CONNECTION **/
var proposal = "mx415";
var user = "mx415";
var password = "pimx415";
var url = "http://ispyvalid.esrf.fr:8080/ispyb/ispyb-ws/rest";
var token = null;


QUnit.test( "DewarDataAdapter Class", function( assert ) {
    assert.ok(true,"Running...");

    function getDewarDataAdapter(fn){
        return new DewarDataAdapter({
            proposal 	: proposal,
            token 		: token,
            url 		: url,
            onSuccess	: fn
        });
    };

//* NEEDED PARAMETERS FOR CONNECTION **/

    function fn_auth(sender, data){
        token = data.token;
        //console.log("Token is: " + token);

        testGetSessions();
        //testGetSessionsByDate();

    };

// AUTHENTICATION
    var authenticationDataAdapter = new AuthenticationDataAdapter({
        onSuccess: fn_auth
    });
    authenticationDataAdapter.authenticate(user, password, url);

// FIRST TEST AFTER AUTHENTICATION **/
    // SessionDataAdapter.prototype.getSessions = function()
    function testGetSessions(){

        function fn_sessions(sender, data){
            //console.log("Sessions data.length: " + data.length);
            assert.ok((data.length>0),"SessionDataAdapter.getSessions(): There's at least one session.");
            //console.table(data);
        };

        var sessionDataAdapter = getSessionDataAdapter(fn_sessions);
        sessionDataAdapter.getSessions();

    } // END testGetSessions()

    // SessionDataAdapter.prototype.getSessionsByDate = function(startDate, endDate)
    // TODO got TypeError on dates format in SessionDataAdapter.prototype.getSessionsByDate
    // TODO: document dates format to give to SessionDataAdapter.prototype.getSessionsByDate

    function testGetSessionsByDate(){

        function fn_dates(sender, data){
            console.log("Sessions by dates data.length: " + data.length);
            assert.ok((data.length>0),"SessionDataAdapter.getSessionsByDate(): There's at least one session.");
            console.table(data);
        };

        var sessionDataAdapter = getSessionDataAdapter(fn_dates);

        var start_date = new Date(2016,2,1); // February 1, 2016
        var end_date = new Date(2016,2,5); // February 5, 2016

        //var start_date = "01/02/2016"; // February 1, 2016
        //var end_date = "05/02/2016"; // February 5, 2016

        //var start_date = new Date(2016,2,1).toDateString(); // February 1, 2016
        //var end_date = new Date(2016,2,5).toDateString(); // February 5, 2016

        //var start_date = new Date(2016,2,1).toJSON(); // February 1, 2016
        //var end_date = new Date(2016,2,5).toJSON(); // February 5, 2016

        sessionDataAdapter.getSessionsByDate(start_date,end_date);

    } // END testGetSessions()


});


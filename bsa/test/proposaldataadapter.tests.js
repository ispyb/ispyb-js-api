"use strict";
//* NEEDED PARAMETERS FOR CONNECTION **/
var proposal = "mx415";
var user = "mx415";
var password = "pimx415";
var url = "http://ispyvalid.esrf.fr:8080/ispyb/ispyb-ws/rest";
var token = null;

QUnit.test( "ProposalDataAdapter Class", function( assert ) {
    assert.ok(true,"Running...");

    function getProposalDataAdapter(fn){
        return new ProposalDataAdapter({
            proposal 	: proposal,
            token 		: token,
            url 		: url,
            onSuccess	: fn
        });
    };

    function fn_auth (sender, data){
        token = data.token;
        //console.log("Your token is: " + token);

        testGetProposals();
        testGetDewarByProposalId();
        testGetProposalsInfo();
    }

// AUTHENTICATION
    var authenticationDataAdapter = new AuthenticationDataAdapter({
        onSuccess: fn_auth
    });
    authenticationDataAdapter.authenticate(user, password, url);
// FIRST TEST AFTER AUTHENTICATION **/

    //ProposalDataAdapter.prototype.getProposals
    function testGetProposals(){

        var fn_gp =  function(sender, data){
            //console.log("proposal data.length: " + data.length);
            assert.ok((data.length>0),"ProposalDataAdapter.getProposals(): There's at least one proposal.");
            //console.log("proposal data: " + JSON.stringify(data));
        };
        var proposalDataAdapter = getProposalDataAdapter(fn_gp);
        //proposalDataAdapter.onSuccess.attach(fn_gp);
        proposalDataAdapter.getProposals();

    }

    //ProposalDataAdapter.prototype.getDewarByProposalId
    function testGetDewarByProposalId(){

        var fn_gd =  function(sender, data){
            //console.log("dewars data.length: " + data.length);
            assert.ok((data.length>0),"ProposalDataAdapter.getDewarByProposalId(): There's at least one dewar.");
            //console.log("dewars data: " + JSON.stringify(data));
        };
        var proposalDataAdapter = getProposalDataAdapter(fn_gd);
        //proposalDataAdapter.onSuccess.attach(fn_gd);
        proposalDataAdapter.getDewarByProposalId();

    }

    //ProposalDataAdapter.prototype.getProposalsInfo
    function testGetProposalsInfo(){

        var fn_pi =  function(sender, data){
            //console.log("proposal infos data.length: " + data.length);
            assert.ok((data.length>0),"ProposalDataAdapter.getProposalsInfo(): There's at least one info.");
            //console.log("proposal infos data: " + JSON.stringify(data));
        };
        var proposalDataAdapter = getProposalDataAdapter(fn_pi);
        //proposalDataAdapter.onSuccess.attach(fn_pi);
        proposalDataAdapter.getProposalsInfo();

    }

});

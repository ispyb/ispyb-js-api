"use strict";
//* NEEDED PARAMETERS FOR CONNECTION **/
var proposal = "mx415";
var user = "mx415";
var password = "pimx415";
var url = "http://ispyvalid.esrf.fr:8080/ispyb/ispyb-ws/rest";
var token = null;


QUnit.test( "MacromoleculeSaxsDataAdapter Class", function( assert ) {
    assert.ok(true,"Running...");

    function getMacromoleculeDataAdapter(fn){
        return new MacromoleculeSaxsDataAdapter({
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
        testGetMacromolecules();
        //testGetContactDescriptionUploadFileURL();
        testSaveMacromolecule();

    };

// AUTHENTICATION
    var authenticationDataAdapter = new AuthenticationDataAdapter({
        onSuccess: fn_auth
    });
    authenticationDataAdapter.authenticate(user, password, url);

// FIRST TEST AFTER AUTHENTICATION **/
    // MacromoleculeSaxsDataAdapter.prototype.getMacromolecules
    function testGetMacromolecules(){

        function fn(sender, data){
            //console.log("Macromolecules data.length: " + data.length);
            assert.ok((data.length>0),"MacromoleculeSaxsDataAdapter.getMacromolecules(): There's at least one macromolecule.");
            //console.log("Macromolecules data: " + JSON.stringify(data));
            var mM = data[0];
            //console.log("Macromolecules data[0].macromoleculeId: " + mM.macromoleculeId );
            //console.log("Macromolecules data[0].name: " + mM.name );
            //console.table(data);
        };

        var macromoleculeDataAdapter = getMacromoleculeDataAdapter(fn);
        macromoleculeDataAdapter.getMacromolecules();

    } // END testGetMacromolecules()

    // MacromoleculeSaxsDataAdapter.prototype.saveMacromolecule = function(macromolecule){
    // TODO: maybe the save of an already stored MM should return an error

    function testSaveMacromolecule(){

        var newMM = {
            macromoleculeId : 10003,
            proposalId : 1170,
            name : "TestSaveMM3",
            acronym : "TSM",
            comments : "Test Save a new MM then Get the same MM and compare"
        };

        function save_error(sender, error){
            console.log("MacromoleculeSaxsDataAdapter.saveMacromolecule: " + error.responseText);
            assert.ok((1==0),"MacromoleculeSaxsDataAdapter.saveMacromolecule(): failed. " + error.responseText);

        };

        function mm_readback(sender, data){

            assert.ok((data.length>0),"MacromoleculeSaxsDataAdapter.saveMacromolecule(readback):");
            var searchedMM = {} ;
            searchedMM = data.filter(function (obj) {
                return obj.macromoleculeId === newMM.macromoleculeId ;
            })[0];
            assert.notEqual(searchedMM, {}, "MacromoleculeSaxsDataAdapter.saveMacromolecule(readback saved MM): success!")

        };

        function save_success(sender, data){
            //console.log("MacromoleculeSaxsDataAdapter.saveMacromolecule(): success. " + data );
            //assert.ok((data.length>0),"MacromoleculeSaxsDataAdapter.saveMacromolecule(): There is some data ");

            var mmDA = getMacromoleculeDataAdapter(mm_readback);
            mmDA.getMacromolecules();
        };

        var macromoleculeDataAdapter = new MacromoleculeSaxsDataAdapter({
                                            proposal 	: proposal,
                                            token 		: token,
                                            url 		: url,
                                            onSuccess	: save_success,
                                            onError     : save_error
                                        });
        macromoleculeDataAdapter.saveMacromolecule(newMM);

    } // END testSaveMacromolecule()

    // MacromoleculeSaxsDataAdapter.prototype.getContactDescriptionUploadFileURL

    function testGetContactDescriptionUploadFileURL(){
        var mM = null;

        function fn_cdf(sender, data){
            console.log("Macromolecules getContactDescriptionUploadFileURL data.length: " + data.length);
            assert.ok((data.length>0),"MacromoleculeSaxsDataAdapter.getContactDescriptionUploadFileURL(): There's at contacts description file.");
            console.log("testGetContactDescriptionUploadFileURL: " + data);
            //assert(mM.contactsDescriptionFilePath, data, "Right contacts description file found!");
        }

        function fn_mms(sender, data){
            //console.log("Macromolecules data.length: " + data.length);
            //assert.ok((data.length>0),"MacromoleculeSaxsDataAdapter.getMacromolecules(): There's at least one macromolecule.");
            //console.log("Macromolecules data: " + JSON.stringify(data));

            var len = data.length;
            for (var i = 0; i < len; i++) {
                if( data[i].contactsDescriptionFilePath !== null ) {
                    mM = data[i];
                    break;
                }
            }
            console.log("testGetContactDescriptionUploadFileURL macromoleculeId: " + mM.macromoleculeId);
            console.log("testGetContactDescriptionUploadFileURL contactsDescriptionFilePath: " + mM.contactsDescriptionFilePath);
            var mda = getMacromoleculeDataAdapter(fn_cdf);
            mda.getContactDescriptionUploadFileURL(mM.macromoleculeId);
        }

        var mdamms = getMacromoleculeDataAdapter(fn_mms);
        mdamms.getMacromolecules();

    } // END testGetContactDescriptionUploadFileURL()

});


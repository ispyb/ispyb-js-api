var Config = {
	credentials : [
				{
					username 	: "mx415",
					password 	: null,
					url 		: "http://ispyvalid.esrf.fr:8080/ispyb/ispyb-ws/rest",
					proposal	: "mx415"
				}
			],
	test : function(){
		new MacromoleculeTest().init();
		new BufferTest().init();
	}

};

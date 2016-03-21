var Config = {
	credentials : [
				{
					username 	: "mx415",
					password 	: "pimx415",
					url 		: "http://ispyvalid.esrf.fr:8080/ispyb/ispyb-ws/rest",
					proposal	: "mx415"
				}
	],
	data :{
			labcontacts : {
						labContactId 		: 149,
						cardName		: {
										original : "KOSKI-Department of B",
										test	 : "[QUNIT TEST] KOSKI-Department of B"
						},
						courierAccount		: {
										original : "246824029",
										test	 : "[QUNIT TEST] 246824029"

						}
			
			}


	},
	test : function(){
		new MacromoleculeTest().init();
		new BufferTest().init();
		new LabcontactTest().init();
	}

};

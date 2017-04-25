# ispyb-js-api
Javascript framework agnostic API to retrieve and update information to ISPyB

Testing
=======

In order to test you should copy js/test/config.example.js to js/test/config.js and modify acordingly to your site configuration

Documentation
===============

## Creating a shipment
```
/** Call back **/
var onSuccess = function(sender, shipment){
	var shippingId = shipment.shippingId;
	/** Shipment has been created **/
	console.log(shippingId);
}

var dataAdapter = new ShippingDataAdapter({onSuccess: onSuccess, token:"86559896ac8249c65c938e3f622c39707f87f139", url:"http://ispyvalid:8080/ispyb/ispyb-ws/rest", proposal:"MX415"});

var shipment = dataAdapter.saveShipment({
   "shippingId":null,
   "name":"New shipment",
   "status":"Not set",
   "sendingLabContactId":"10718",
   "returnLabContactId":"-1",
   "returnCourier":"-1",
   "courierAccount":"",
   "billingReference":"",
   "dewarAvgCustomsValue":0,
   "dewarAvgTransportValue":0,
   "comments":"",
   "sessionId":""
});



```

### Add a Parcel to a shipment

```
var dewarDataAdapter = new DewarDataAdapter({token:"86559896ac8249c65c938e3f622c39707f87f139", url:"http://ispyvalid:8080/ispyb/ispyb-ws/rest", proposal:"MX415"});

dewarDataAdapter.saveDewar(shippingId, {
   "code":"Parcel name",
   "transportValue":4,
   "storageLocation":"-80",
   "comments":"",
   "shippingId":shippingId
});

```


### Add a Container to a parcel
```
var dataAdapter = new ShippingDataAdapter({onSuccess: onSuccess, token:"86559896ac8249c65c938e3f622c39707f87f139", url:"http://ispyvalid:8080/ispyb/ispyb-ws/rest", proposal:"MX415"});

containerType = "Spinepuck"; //[Spinepuck, Unipuck, PLATE]
capacity = 10;
dataAdapter.addContainer(shippingId, dewarId, containerType, capacity);

```

### Add a sample to a container
```
var dataAdapter = new ShippingDataAdapter({onSuccess: onSuccess, token:"86559896ac8249c65c938e3f622c39707f87f139", url:"http://ispyvalid:8080/ispyb/ispyb-ws/rest", proposal:"MX415"});
dataAdapter.saveContainer(shippingId, dewarId, containerId, {
   "containerId":333864,
   "code":"con",
   "containerType":"Spinepuck",
   "capacity":10,
   "beamlineLocation":null,
   "sampleChangerLocation":"-80",
   "containerStatus":null,
   "timeStamp":"Apr 25, 2017 4:33:56 PM",
   "barcode":null,
   "sampleVOs":[
      {
         "name":"sampleName",
         "location":1,
         "crystalVO":{
            "proteinVO":{
               "proteinId":353993,
               "name":"Integrase full length N155H mutant SANSAXS CHANNEL 09/06/16",
               "acronym":"N155H",
               "safetyLevel":"GREEN",
               "molecularMass":null,
               "proteinType":null,
               "sequence":null,
               "personId":351915,
               "timeStamp":"Jul 20, 2016 11:37:08 AM",
               "isCreatedBySampleSheet":1,
               "externalId":null
            },
            "spaceGroup":"P1",
            "cellA":"8",
            "cellB":"8",
            "cellC":"8",
            "cellAlpha":"1",
            "cellBeta":"0",
            "cellGamma":"0"
         },
         "diffractionPlanVO":{
            "radiationSensitivity":null,
            "requiredCompleteness":null,
            "requiredMultiplicity":null,
            "requiredResolution":null,
            "observedResolution":null,
            "preferredBeamDiameter":null,
            "numberOfPositions":null,
            "experimentKind":"Default"
         }
      }
   ]
});

```

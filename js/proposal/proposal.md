## Proposal Webservices

### Session

#### getSessions()
It retrieves a list of sessions of a given proposal 
```
/{token}/proposal/{proposal}/session/list
```

#### getSessionsByProposal(proposal)
It retrieves a list of sessions of a given proposal 
```
 /{token}/proposal/{proposal}/session/list
``` 

#### getSessionByProposalSessionId(proposal, sessionId)
It retrieves a list of sessions by sessionId
``` 
/{token}/proposal/{proposal}/session/sessionId/{sessionId}/list
```

#### getSessionsByDate(startDate, endDate)
It retrieves a list of sessions by start and end date. 
Format of start and end date is YYYYMMDD
```
/{token}/proposal/session/date/{startDate}/{endDate}/list
```
Output:
```js
   [
   {
      "projectCode":null,
      "Person_familyName":"MONACO",
      "BLSession_startDate":"Jul 28, 2016 1:00:00 AM",
      "BLSession_protectedData":null,
      "nbShifts":3,
      "Person_givenName":"StÃ©phanie",
      "beamLineOperator":null,
      "BLSession_lastUpdate":"Jul 29, 2016 8:59:59 AM",
      "sampleCount":0,
      "dataCollectionGroupCount":6,
      "bltimeStamp":"Jul 28, 2016 5:10:27 PM",
      "Proposal_ProposalNumber":"415",
      "databackupFrance":null,
      "lastExperimentDataCollectionGroup":"Characterization",
      "proposalId":1170,
      "sessionTitle":null,
      "beamLineName":"ID30A2",
      "imagesCount":758,
      "Proposal_title":"TEST",
      "lastEndTimeDataCollectionGroup":"Jul 28, 2016 5:10:27 PM",
      "xrfSpectrumCount":0,
      "Proposal_ProposalType":"MX",
      "usedFlag":true,
      "visit_number":null,
      "structureDeterminations":null,
      "Person_personId":311791,
      "scheduled":false,
      "databackupEurope":null,
      "dewarTransport":null,
      "sessionId":49828,
      "Person_emailAddress":"mon@esrf.fr",
      "expSessionPk":null,
      "beamLineSetupId":1049619,
      "Proposal_proposalCode":"MX",
      "testDataCollectionGroupCount":2,
      "operatorSiteNumber":null,
      "energyScanCount":0,
      "BLSession_endDate":"Jul 29, 2016 8:59:59 AM",
      "comments":"Session created by the BCM"
   }
]
```


#### getSessionsByDateAndBeamline(startDate, endDate, beamline)
It retrieves a list of sessions by start, end and beamline.
Format of start and end date is YYYYMMDD
```
/{token}/proposal/session/date/{startDate}/{endDate}/list?beamline={2}
```


#### getSessionsByProposalAndDate(startDate, endDate, proposal)
It retrieves a list of sessions by start, end and proposal. 
Format of start and end date is YYYYMMDD
```
/{token}/proposal/{proposal}/session/date/{startDate}/{endDate}/list
```



 
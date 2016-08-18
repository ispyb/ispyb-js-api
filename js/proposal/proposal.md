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
It retrieves a list of sessions by start and end date 
```
/{token}/proposal/session/date/{startDate}/{endDate}/list
```

#### getSessionsByDateAndBeamline(startDate, endDate, beamline)
It retrieves a list of sessions by start, end and beamline 
```
/{token}/proposal/session/date/{startDate}/{endDate}/list?beamline={2}
```

#### getSessionsByProposalAndDate(startDate, endDate, proposal)
It retrieves a list of sessions by start, end and proposal 
```
/{token}/proposal/{proposal}/session/date/{startDate}/{endDate}/list
```


 
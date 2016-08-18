## Proposal Webservices

### Session

|Name   | URL           | Comments      | 
|-------| ------------- |:-------------:| 
|getSessions()| /{token}/proposal/{proposal}/session/list|  | 
|getSessionsByProposal(proposal)| /{token}/proposal/{proposal}/session/list      |       | 
|getSessionByProposalSessionId(proposal, sessionId)| /{token}/proposal/{proposal}/session/sessionId/{sessionId}/list |  |
|getSessionsByDate(startDate, endDate)| /{token}/proposal/session/date/{startDate}/{endDate}/list |  |
|getSessionsByDateAndBeamline(startDate, endDate, beamline)| /{token}/proposal/session/date/{startDate}/{endDate}/list?beamline={2} ||
|getSessionsByProposalAndDate( startDate, endDate, proposal)| /{token}/proposal/{proposal}/session/date/{startDate}/{endDate}/list ||
 
/**
* This class groups the necessary data adapter for MX as technique
* It contains: AutoProcIntegrationDataAdapter, DataCollectionDataAdapter, CrystalDataAdapter, ProteinDataAdapter, WorkflowStepDataAdapter, and PhasingDataAdapter
*
* @class MxDataAdapterFactory
* @constructor
*/

function EmDataAdapterGroup(args){	
	this.dataCollection = new EmDataCollectionDataAdapter(args);
	
}



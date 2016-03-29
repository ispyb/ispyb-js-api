/**
* This class groups the necessary data adapter for MX as technique
* It contains: AutoProcIntegrationDataAdapter, DataCollectionDataAdapter, CrystalDataAdapter, ProteinDataAdapter, WorkflowStepDataAdapter, and PhasingDataAdapter
*
* @class MxDataAdapterFactory
* @constructor
*/

function MxDataAdapterGroup(args){
	this.autoproc = new AutoProcIntegrationDataAdapter(args);
	this.dataCollection = new DataCollectionDataAdapter(args);
	this.crystal = new CrystalDataAdapter(args);
	this.protein = new ProteinDataAdapter(args);
	this.workflowstep = new WorkflowStepDataAdapter(args);
	this.phasing = new PhasingDataAdapter(args);
	
	
}



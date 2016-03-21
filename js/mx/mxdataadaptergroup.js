function MxDataAdapterGroup(args){
	this.autoproc = new AutoProcIntegrationDataAdapter(args);
	this.dataCollection = new DataCollectionDataAdapter(args);
	this.crystal = new CrystalDataAdapter(args);
	this.protein = new ProteinDataAdapter(args);
	this.workflowstep = new WorkflowStepDataAdapter(args);
	this.phasing = new PhasingDataAdapter(args);
	
	
}



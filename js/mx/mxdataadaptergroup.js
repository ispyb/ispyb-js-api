function MxDataAdapterGroup(args){
	this.autoProcIntegrationDataAdapter = new AutoProcIntegrationDataAdapter(args);
	this.dataCollection = new DataCollectionDataAdapter(args);
	this.crystal = new CrystalDataAdapter(args);
	this.protein = new ProteinDataAdapter(args);
}



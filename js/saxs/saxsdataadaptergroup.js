function SaxsDataAdapterGroup(args){
	this.experiment = new ExperimentSaxsDataAdapter(args);
	this.buffer = new BufferSaxsDataAdapter(args);
	this.macromolecule= new MacromoleculeSaxsDataAdapter(args);
	this.hplc = new HPLCSaxsDataAdapter(args);
	this.measurement = new MeasurementSaxsDataAdapter(args);
	this.specimen = new SpecimenSaxsDataAdapter(args);
	this.stockSolution = new StockSolutionSaxsDataAdapter(args);
	this.subtraction = new SubtractionSaxsDataAdapter(args);
	this.dataCollection = new DataCollectionSaxsDataAdapter(args);
	this.template = new TemplateSaxsDataAdapter(args);
	this.frame = new FrameSaxsDataAdapter(args);
	this.model = new ModelSaxsDataAdapter(args);
}



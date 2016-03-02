function ProposalDataAdapterGroup(args){
	this.authentication = new AuthenticationDataAdapter(args);
	this.dewar = new DewarDataAdapter(args);
	this.proposal = new ProposalDataAdapter(args);
	this.shipping = new ShippingDataAdapter(args);
	this.session = new SessionDataAdapter(args);
}
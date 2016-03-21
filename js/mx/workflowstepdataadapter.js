function WorkflowStepDataAdapter(args){
	DataAdapter.call(this, args);
}

WorkflowStepDataAdapter.prototype.get = DataAdapter.prototype.get;
WorkflowStepDataAdapter.prototype.post = DataAdapter.prototype.post;
WorkflowStepDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

WorkflowStepDataAdapter.prototype.getImageByWorkflowStepId = function(workflowStepId){
	 return this.getUrl('/{token}/proposal/{proposal}/mx/workflow/step/{0}/image'.format( [workflowStepId.toString()]));
};

WorkflowStepDataAdapter.prototype.getHtmlByWorkflowStepId = function(workflowStepId){
	 return this.getUrl('/{token}/proposal/{proposal}/mx/workflow/step/{0}/html'.format( [workflowStepId.toString()]));
};

WorkflowStepDataAdapter.prototype.getResultByWorkflowStepId = function(workflowStepId){
	 return this.getUrl('/{token}/proposal/{proposal}/mx/workflow/step/{0}/result'.format( [workflowStepId.toString()]));
};

WorkflowStepDataAdapter.prototype.getWorkflowstepByIdList = function(workflowStepIds){
	 this.get('/{token}/proposal/{proposal}/mx/workflow/step/{0}/list'.format( [workflowStepIds.toString()]));
};











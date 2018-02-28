/**
* Interface implementing the API for workflow steps
*
* @class WorkflowStepDataAdapter
* @constructor
*/
function WorkflowStepDataAdapter(args){
	DataAdapter.call(this, args);
}

WorkflowStepDataAdapter.prototype.get = DataAdapter.prototype.get;
WorkflowStepDataAdapter.prototype.post = DataAdapter.prototype.post;
WorkflowStepDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;


/**
* @method getImageByWorkflowStepId
*/
WorkflowStepDataAdapter.prototype.getImageByWorkflowStepId = function(workflowStepId){
	 return this.getUrl('/{token}/proposal/{proposal}/mx/workflow/step/{0}/image'.format( [workflowStepId.toString()]));
};

/**
* @method getHtmlByWorkflowStepId
*/
WorkflowStepDataAdapter.prototype.getHtmlByWorkflowStepId = function(workflowStepId){
	 return this.getUrl('/{token}/proposal/{proposal}/mx/workflow/step/{0}/html'.format( [workflowStepId.toString()]));
};
/**
* @method getResultByWorkflowStepId
*/
WorkflowStepDataAdapter.prototype.getResultByWorkflowStepId = function(workflowStepId){
	 this.get('/{token}/proposal/{proposal}/mx/workflow/step/{0}/result'.format( [workflowStepId.toString()]));
};
/**
* @method getWorkflowstepByIdList
*/
WorkflowStepDataAdapter.prototype.getWorkflowstepByIdList = function(workflowStepIds){
	 this.get('/{token}/proposal/{proposal}/mx/workflow/step/{0}/list'.format( [workflowStepIds.toString()]));
};











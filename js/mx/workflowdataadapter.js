/**
* Interface implementing the API for workflows
*
* @class WorkflowDataAdapter
* @constructor
*/
function WorkflowDataAdapter(args){
	DataAdapter.call(this, args);
}

WorkflowDataAdapter.prototype.get = DataAdapter.prototype.get;
WorkflowDataAdapter.prototype.post = DataAdapter.prototype.post;
WorkflowDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;


/**
* @method getWorkflowLogUrl
*/
WorkflowDataAdapter.prototype.getWorkflowLogUrl = function(workflowId){
	 return this.getUrl('/{token}/mx/workflow/{0}/log'.format( [workflowId.toString()]));
};

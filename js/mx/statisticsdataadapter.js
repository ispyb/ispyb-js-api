/**
* Interface implementing the API for phasing
*
* @class StatisticsDataAdapter
* @constructor
*/
function StatisticsDataAdapter(args){
	DataAdapter.call(this, args);
}

StatisticsDataAdapter.prototype.get = DataAdapter.prototype.get;
StatisticsDataAdapter.prototype.post = DataAdapter.prototype.post;
StatisticsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;


/**
* It retrieves the statistics url between the given dates
* @method getPhasingFilesByPhasingProgramAttachmentIdAsImage
* @param {String} startDate
* @param {String} endDate
*/
StatisticsDataAdapter.prototype.getStatisticsByDate = function(startDate,endDate){
	return this.getUrl('/{token}/stats/autoprocstatistics/innerShell/{0}/{1}/csv'.format( [startDate,endDate]));                                                    
};
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
* @param {String} type
* @param {String} startDate
* @param {String} endDate
*/
StatisticsDataAdapter.prototype.getStatisticsByDate = function(type,startDate,endDate){
	return this.getUrl('/{token}/stats/autoprocstatistics/{0}/{1}/{2}/csv'.format( [type,startDate,endDate]));                                                    
};

/**
* It retrieves the statistics url between the given dates for the given beamline
* @method getPhasingFilesByPhasingProgramAttachmentIdAsImage
* @param {String} type
* @param {String} startDate
* @param {String} endDate
* @param {String} beamline
*/
StatisticsDataAdapter.prototype.getStatisticsByDateAndBeamline = function(type,startDate,endDate,beamline){
	return this.getUrl('/{token}/stats/autoprocstatistics/{0}/{1}/{2}/csv?beamlinenames={3}'.format( [type,startDate,endDate,beamline]));                                                    
};
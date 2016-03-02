function MeasurementSaxsDataAdapter(args){
	DataAdapter.call(this, args);
}

MeasurementSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
MeasurementSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
MeasurementSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

MeasurementSaxsDataAdapter.prototype.saveMeasurement= function(measurement){
    var url = ('/{token}/proposal/{proposal}/saxs/measurement/save');
	this.post(url, {measurement : JSON.stringify(measurement)});
};

MeasurementSaxsDataAdapter.prototype.removeMeasurement= function(measurement){
    var url = ('/{token}/proposal/{proposal}/saxs/measurement/{0}/remove'.format([measurement.measurementId]));
	this.get(url);
};

MeasurementSaxsDataAdapter.prototype.sortMeasurements= function(experimentId, type){
    this.get('/{token}/proposal/{proposal}/saxs/measurement/experiment/{0}/type/{1}/sort'.format( [experimentId, type]));
};
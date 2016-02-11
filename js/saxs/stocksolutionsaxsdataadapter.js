function StockSolutionSaxsDataAdapter(args){
	DataAdapter.call(this, args);
}

StockSolutionSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
StockSolutionSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
StockSolutionSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

StockSolutionSaxsDataAdapter.prototype.getStockSolutions= function(){
	this.get('/{token}/proposal/{proposal}/saxs/stocksolution/list');
};

StockSolutionSaxsDataAdapter.prototype.saveStockSolution= function(stocksolution){
    var url = ('/{token}/proposal/{proposal}/saxs/stocksolution/save');
	this.post(url, {stocksolution : JSON.stringify(stocksolution)});
};
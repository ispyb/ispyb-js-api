function BufferSaxsDataAdapter(args){
	DataAdapter.call(this, args);
}

BufferSaxsDataAdapter.prototype.get = DataAdapter.prototype.get;
BufferSaxsDataAdapter.prototype.post = DataAdapter.prototype.post;
BufferSaxsDataAdapter.prototype.getUrl = DataAdapter.prototype.getUrl;

BufferSaxsDataAdapter.prototype.getBuffers= function(){
	this.get('/{token}/proposal/{proposal}/saxs/buffer/list');
};

BufferSaxsDataAdapter.prototype.saveBuffer= function(buffer){
    var url = ('/{token}/proposal/{proposal}/saxs/buffer/save');
	this.post(url, {buffer : JSON.stringify(buffer)});
};
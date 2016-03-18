/**
* This class is in charge of the Event management. An object can create an event and other objects can subscribe to such event by using the function attach.
* @class Event
* @constructor
*/
function Event(sender) {
	this._sender = sender;
	this._listeners = [];
}

Event.prototype = {
	/**
	* It attaches a function to an event. This function will be executed once the event is fired
	* @method attach
	* @param {String} listener It is a callback function
	*/
	attach : function(listener) {
		this._listeners.push(listener);
	},
	/**
	* It is called when the event is produced and will executed all the functions attached to such event
	* @method notify
	* @param {Object} args It is an object that the sender will send when the event is notified
	*/
	notify : function(args) {
		for (var i = 0; i < this._listeners.length; i++) {
			this._listeners[i](this._sender, args);
		}
	}

};

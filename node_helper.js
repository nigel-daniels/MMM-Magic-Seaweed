/* Magic Mirror Module: MMM-Magic-Seaweed helper
 * Version: 1.0.0
 *
 * By Nigel Daniels https://github.com/nigel-daniels/
 * MIT Licensed.
 */

var NodeHelper = require('node_helper');
var urllib = require('urllib');

module.exports = NodeHelper.create({

    start: function () {
        console.log('MMM-Magic-Seaweed helper, started...');
		this.error = false;
		this.body = null;
        },

	getSurfData: function(payload) {
        var _this = this;
		this.error = false;

		urllib.request(payload.url, {dataType: 'text'},function _json(err, data, res) {
			if (!err) {

				if (data) {
					var surfData = JSON.parse(data.trim());
					}
				} else {
					_this.error = true;
				}
			} else {
				_this.error = true;
			}

			// We have the response figured out so lets fire off the notifiction
			_this.sendSocketNotification('GOT-SURF-DATA', {url: payload.url, result: _this.error?null:_this.surfData});
		});
    },

	checkStatus: function(res) {
		if (res.ok) { // res.status >= 200 && res.status < 300
        	return res;
    	} else {
        	throw 'Error';
		}
	},

    socketNotificationReceived: function(notification, payload) {
        // Check this is for us and if it is let's get the routes or the data
        switch(notification) {
			case 'GET-SURF-DATA':
				this.getSurfData(payload);
				break;
			default:
				break;
		}
    }

});

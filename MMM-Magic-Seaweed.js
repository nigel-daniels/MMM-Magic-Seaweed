/* Magic Mirror Module: MMM-Magic-Seaweed
 * Version: 1.0.0
 *
 * By Nigel Daniels https://github.com/nigel-daniels/
 * MIT Licensed.
 */

Module.register('MMM-Magic-Seaweed', {

    defaults: {
            api_key:	'',
			spot_name:	'',
            spot_id:	'',
			units:		'us',
            interval:	300000 // Every 5 mins
        },


    start:  function() {
        Log.log('Starting module: ' + this.name);

        // Set up the local values, here we construct the request url to use
        this.loaded = false;

		this.dataReq = {
			api_key: 	this.config.api_key,
			url:		'http://magicseaweed.com/api/' + this.config.api_key + '/forecast/?spot_id=' = this.config.spot_id +'&units=' + this.config.units
		};

        this.result = null;

        // Trigger the first request
        this.getSurfData(this);
        },


    getStyles: function() {
        return ['magic-seaweed.css', 'font-awesome.css'];
        },

	getSurfData: function(_this) {
		// Make the initial request to the helper then set up the timer to perform the updates
		_this.sendSocketNotification('GET-SURF-DATA', _this.dataReq);
		setTimeout(_this.getSurfData, _this.config.interval, _this);
		},

    getDom: function() {
        // Set up the local wrapper
        var wrapper = document.createElement('div');
		wrapper.class = 'bright medium';

        // If we have some data to display then build the results table
        if (this.loaded) {
			spotName = document.createElement('div');
			spotName.className = 'spot_name';
			spotName.innerHTML = this.config.spot_name;

			surfResults = document.createElement('table');
			surfResults.className = 'surf_result bright';

            if (this.result !== null) {
				for (var key in this.result) {

                    }
				wrapper.appendChild(stopName)
	            wrapper.appendChild(surfResults);
            } else {
                // Otherwise lets just use a simple div
                wrapper.innerHTML = 'Error getting surf data.';
            }
        } else {
            // Otherwise lets just use a simple div
            wrapper.innerHTML = 'Loading surf data...';
            }

        return wrapper;
        },


    socketNotificationReceived: function(notification, payload) {

		if (notification === 'GOT-SURF-DATA' && payload.url === this.dataReq.url) {
            // we got some data so set the flag, stash the data to display then request the dom update
            this.loaded = true;
            this.result = payload.result;
			console.log('result: ' + payload.result);
            this.updateDom(1000);
            }
        }
    });

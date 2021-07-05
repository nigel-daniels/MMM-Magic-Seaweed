# MMM-Magic-Seaweed

![Magic Seaweed](magic-seaweed.png "Magic Seaweed.")

This a module for the [MagicMirror](https://github.com/MichMich/MagicMirror/tree/develop) to show surf conditions using the Magic Seaweed API.

![Magic Seaweed](https://magicseaweed.com/image/msw_powered_by.png "MSW")

Data for this module is kindly provided by [Magic Seaweed](https://magicseaweed.com).

## Installation

1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/nigel-daniels/MMM-Magic-Seaweed`.  A new folder `MMM-Magic-Seaweed` will appear, navigate into it.
2. Execute `npm install` to install the node dependencies.

## Config

#### API key

Prior to creating the config you will need an API key to access the data, you can apply for an ID from the [Magic Seaweed](https://magicseaweed.com) website.

#### Spot ID

to locate the `spot_id` of the surf you want to monitor. This can be found by visiting the [Magic Seaweed](https://magicseaweed.com) website and locating the surf you want to track, once you have the locations page you can find the spots ID in the URL.  For example if you want to get surf data for Steamer Lane in Santa Cruz, USA the URL is:

`https://magicseaweed.com/Steamer-Lane-Surf-Report/163/`

The URL contains the ID 163 which is the number you need in the config.

#### Config
The entry in `config.js` can include the following options:

|Option|Description|
|---|---|
|`api_key`|**Required** This is the API key assigned to you by Magic Seaweed (see above).<br><br>**Type:** `string`<br>|
|`spot_name`| This is the name you want shown on your mirror that tells you the spot you are monitoring.<br><br>**Type:** `string`<br>|
|`spot_id`|**Required** This the `id` of the location you are monitoring (see above).<br><br>**Type:** `string`|
|`units`|This is units of measure you want to use in the desplay, this can be:<br><br>`eu` = (m, kph, c)<br>`uk` = (ft, mph, c)<br>`us` = (ft, mph, f)<br><br>**Type:** `string`<br>**Default value:** `us`|
|`interval`|How often the status is updated. Be sure to follow the API usage guidelines when setting this.<br><br>**Type:** `integer`<br>**Default value:** `300000` // 5 minutes|

Here is an example of an entry in `config.js`
```
{
    module:    'MMM-Magic-Seaweed',
    position:  'top_left',
    header:    'Surf Report',
    config:	 {
                api_key:   'xxxxxxxxxxxxxxxxxxxx',
				spot_name:	'Pleasure Point',
	            spot_id:	'644',
				units:		'us',
	            interval:	300000
                }
},
```

## Dependencies
- [urllib](https://www.npmjs.com/package/urllib) (installed via `npm install`)
- [moment](https://www.npmjs.com/package/moment) (installed via `npm install`)

## Notes
Feel free to submit pull requests or post issues and I'll do my best to respond.

## Thanks To...
- [Michael Teeuw](https://github.com/MichMich) for the [MagicMirror2](https://github.com/MichMich/MagicMirror/tree/develop) framework that made this module possible.
- [Magic Seaweed](https://magicseaweed.com) for the guides and information they publish on their API.

var xml2js = require('xml2js');
var request = require('request');
var parseXML = require('xml2js').parseString;

if(!process.env.http_proxy){
	request = request.defaults({'proxy': process.env.http_proxy});
}

exports.call_api = function(url, xml, callback) {
	var options = {
		url: url,
		method: 'POST',
		body: xml
	}
	request.post(options, function (error, response, body){
		parseXML(body, {trim: true, explicitArray: false}, function (err, result) {
			callback(error, response, result.spooler);
		});
	});
}

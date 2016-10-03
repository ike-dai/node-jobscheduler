var xml2js = require('xml2js');
var request = require('request');

var Job = function(config) {
	this.url = config.url;
	this.job = "";
};



Job.prototype.start = function(params, callback){
	this.job = params.job;
	var builder = new xml2js.Builder({rootName: "start_job"});
	var obj = {$:{job: this.job}}
	var start_xml = builder.buildObject(obj);
	var options = {
				url: this.url,
				method: 'POST',
				body: start_xml
	}
	request.post(options, function (error, response, body){
    callback(error, response, body);
	});
};

Job.prototype.stop = function(params, callback){
};

module.exports = Job

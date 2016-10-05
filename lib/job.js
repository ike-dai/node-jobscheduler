var xml2js = require('xml2js');
var request = require('request');
var parseXML = require('xml2js').parseString;

if(!process.env.http_proxy){
	request = request.defaults({'proxy': process.env.http_proxy});
}
var Job = function(config) {
	this.url = config.url;
	this.job = "";
};



Job.prototype.start = function(params, callback){
	this.job = params.job;
	var builder = new xml2js.Builder({rootName: "start_job"});
	var obj = {$:{job: this.job}}
	var xml = builder.buildObject(obj);
	var options = {
				url: this.url,
				method: 'POST',
				body: xml
	}
	request.post(options, function (error, response, body){
		parseXML(body, {trim: true, explicitArray: false}, function (err, result) {
			callback(error, response, result);
		});
	});
};
Job.prototype.show_history = function(params, callback){
	this.job = params.job;
	var builder = new xml2js.Builder({rootName: "show_history"});
	var obj = {$:{job: this.job}}
	var xml = builder.buildObject(obj);
	var options = {
				url: this.url,
				method: 'POST',
				body: xml
	}
	request.post(options, function (error, response, body){
		parseXML(body, {trim: true, explicitArray: false}, function (err, result) {
			callback(error, response, result);
		});
	});
};

Job.prototype.stop = function(params, callback){
};

module.exports = Job

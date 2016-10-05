var xml2js = require('xml2js');
var request = require('request');
var parseXML = require('xml2js').parseString;
var util = require('./util.js');

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
	util.call_api(this.url, xml, function(err, res, result) {
		callback(err, res, result);
	});
};
Job.prototype.show_history = function(params, callback){
	this.job = params.job;
	var builder = new xml2js.Builder({rootName: "show_history"});
	var obj = {$:{job: this.job}}
	var xml = builder.buildObject(obj);
	util.call_api(this.url, xml, function(err, res, result) {
		callback(err, res, result);
	});
};

Job.prototype.stop = function(params, callback){
};

module.exports = Job

var xml2js = require('xml2js');
var util = require('./util.js');

var Job = function(config) {
	this.url = config.url;
	this.job = "";
};



Job.prototype.start = function(params, callback){
	this.job = params.job;
	var builder = new xml2js.Builder({rootName: "start_job"});
	var obj = {$:{job: this.job}}
	var xml = builder.buildObject(obj);
	util.call_api(this.url, xml, function(err, res, spooler) {
		callback(err, res, spooler);
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
	params.cmd = 'stop';
	this.modify_job(params, function(err, res, result){
		callback(err, res, result);
	});
};

Job.prototype.unstop = function(params, callback){
	params.cmd = 'unstop';
	this.modify_job(params, function(err, res, result){
		callback(err, res, result);
	});
};
Job.prototype.suspend = function(params, callback){
	params.cmd = 'suspend';
	this.modify_job(params, function(err, res, result){
		callback(err, res, result);
	});
};
Job.prototype.wake= function(params, callback){
	params.cmd = 'wake';
	this.modify_job(params, function(err, res, result){
		callback(err, res, result);
	});
};
Job.prototype.modify_job = function(params, callback){
	this.job = params.job;
	var builder = new xml2js.Builder({rootName: "modify_job"});
	var obj = {$:{job: this.job, cmd: params.cmd}}
	var xml = builder.buildObject(obj);
	util.call_api(this.url, xml, function(err, res, result) {
		callback(err, res, result);
	});
	
};

module.exports = Job

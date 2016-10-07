var xml2js = require('xml2js');
var util = require('./util.js');

var JobChain = function(config) {
	this.url = config.url;
	this.jobchain = "";
};

JobChain.prototype.start = function(params, callback){
	this.jobchain = params.jobchain;
	var builder = new xml2js.Builder({rootName: "add_order"});
	var obj = {$:{job_chain: this.jobchain}}
	var xml = builder.buildObject(obj);
	util.call_api(this.url, xml, function(err, res, spooler) {
		callback(err, res, spooler);
	});
};
module.exports = JobChain

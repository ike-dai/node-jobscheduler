var job = require('./job');
var jobchain = require('./jobchain');


var JobScheduler = function(config) {
  this.url = config.url;
  this.job = new job(config);
  this.jobchain = new jobchain(config);
};

module.exports = JobScheduler;

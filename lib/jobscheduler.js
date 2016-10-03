var job = require('./job');


var JobScheduler = function(config) {
  this.url = config.url;
  this.job = new job(config);
};

module.exports = JobScheduler;

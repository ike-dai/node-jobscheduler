var assert = require('assert');
var jobscheduler = require('../lib/jobscheduler');


describe('Job', function () {
	describe('start test: ' +  process.env.JSTESTJOB, function () {
		it('成功時、responseのStatusCodeが200で返ってくること', function (done) {
			client = new jobscheduler({url: process.env.JSTESTURL});
			client.job.start({job: process.env.JSTESTJOB}, function(err, res, body){
				assert.equal(res.statusCode, 200);
				done();
			});
		});
	});
});

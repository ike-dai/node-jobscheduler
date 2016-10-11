var should = require('should');
var jobscheduler = require('../');


describe('Job', function () {
	describe('start success test: ' +  process.env.JSTESTJOB, function () {
		it('成功時、結果のxmlにokが返ってくること', function (done) {
			client = new jobscheduler({url: process.env.JSTESTURL});
			client.job.start({job: process.env.JSTESTJOB}, function(err, res, result){
				//console.log(result.spooler.answer.ok);
				res.statusCode.should.equal(200);
				result.answer.should.have.property('ok');
				done();
			});
		});
	});
	describe('start fail test: not exist job(hogehoge)', function () {
		it('失敗時、結果のxmlにERRORが返ってくること', function (done) {
			client = new jobscheduler({url: process.env.JSTESTURL});
			client.job.start({job: 'hogehoge'}, function(err, res, result){
				//console.log(result.spooler.answer.ERROR);
				res.statusCode.should.equal(200);
				result.answer.should.have.property('ERROR');
				done();
			});
		});
	});
	describe('show history success test: ' +  process.env.JSTESTJOB, function () {
		it('成功時、jobのhistory.entryが返ってくること', function (done) {
			client = new jobscheduler({url: process.env.JSTESTURL});
			client.job.show_history({job: process.env.JSTESTJOB}, function(err, res, result){
				//console.log(result.spooler.answer.history['history.entry']);
				res.statusCode.should.equal(200);
				result.answer.history.should.have.property('history.entry');
				done();
			});
		});
	});
	describe('modify job success test: ' +  process.env.JSTESTJOB, function () {
		it('stopへの変更成功時、結果のxmlにokが返ってくること', function (done) {
			client = new jobscheduler({url: process.env.JSTESTURL});
			client.job.modify_job({job: process.env.JSTESTJOB, cmd: 'stop'}, function(err, res, result){
				res.statusCode.should.equal(200);
				result.answer.should.have.property('ok');
				done();
			});
		});
	});
	describe('stop job success test: ' +  process.env.JSTESTJOB, function () {
		it('成功時、結果のxmlにokが返ってくること', function (done) {
			client = new jobscheduler({url: process.env.JSTESTURL});
			client.job.stop({job: process.env.JSTESTJOB}, function(err, res, result){
				res.statusCode.should.equal(200);
				result.answer.should.have.property('ok');
				done();
			});
		});
	});
	describe('unstop job success test: ' +  process.env.JSTESTJOB, function () {
		it('成功時、結果のxmlにokが返ってくること', function (done) {
			client = new jobscheduler({url: process.env.JSTESTURL});
			client.job.unstop({job: process.env.JSTESTJOB}, function(err, res, result){
				res.statusCode.should.equal(200);
				result.answer.should.have.property('ok');
				done();
			});
		});
	});
	describe('suspend job success test: ' +  process.env.JSTESTJOB, function () {
		it('成功時、結果のxmlにokが返ってくること', function (done) {
			client = new jobscheduler({url: process.env.JSTESTURL});
			client.job.suspend({job: process.env.JSTESTJOB}, function(err, res, result){
				res.statusCode.should.equal(200);
				result.answer.should.have.property('ok');
				done();
			});
		});
	});
//	describe('wake job success test: ' +  process.env.JSTESTJOB, function () {
//		it('成功時、結果のxmlにokが返ってくること', function (done) {
//			client = new jobscheduler({url: process.env.JSTESTURL});
//			client.job.wake({job: process.env.JSTESTJOB}, function(err, res, result){
//				res.statusCode.should.equal(200);
//				result.answer.should.have.property('ok');
//				done();
//			});
//		});
//	});
});

describe('JobChain', function () {
	describe('start(add order) success test: ' +  process.env.JSTESTJOBCHAIN, function () {
		it('成功時、結果のxmlにokが返ってくること', function (done) {
			client = new jobscheduler({url: process.env.JSTESTURL});
			client.jobchain.start({jobchain: process.env.JSTESTJOBCHAIN}, function(err, res, result){
				//console.log(result.spooler.answer.ok);
				res.statusCode.should.equal(200);
				result.answer.should.have.property('ok');
				done();
			});
		});
	});
});

//const request = require('supertest');
const request = require('supertest');
const server = require('./server');

describe('loading express', function () {
  after(function (done) {
    server.close();
    done();
  });
  it('responds to /api/makes', function testSlash(done) {
    request(server)
      .get('/api/makes')
      .expect(200, done);
  });
  it('responds to /api/models', function testSlash(done) {
    request(server)
      .get('/api/models')
      .expect(200, done);
  });
  it('responds to /api/carOfTheWeek', function testSlash(done) {
    request(server)
      .get('/api/carOfTheWeek')
      .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404,done);
  });
});

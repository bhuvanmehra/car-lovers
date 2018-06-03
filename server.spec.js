const request = require('supertest');
const server = require('./server');

describe('loading express', function () {
  after(function (done) {
    server.close();
    done();
  });
  it('responds to /api/makes', function testMakesRoute(done) {
    request(server)
      .get('/api/makes')
      .expect(200, done);
  });
  it('responds to /api/models', function testModelsRoute(done) {
    request(server)
      .get('/api/models')
      .expect(200, done);
  });
  it('responds to /api/carOfTheWeek', function testCarOfTheWeekRoute(done) {
    request(server)
      .get('/api/carOfTheWeek')
      .expect(200, done);
  });
  it('responds to /api/make/model/100', function testFetchModelRoute(done) {
    request(server)
      .get('/api/make/model/100')
      .expect(200, done);
  });  
  it('404 everything else', function testIncorrectRoute(done) {
    request(server)
      .get('/foo/bar')
      .expect(404,done);
  });
});

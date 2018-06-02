const models = require('./data/models.json');
const makes = require('./data/makes.json');
const carOfTheWeek = require('./data/carOfTheWeek.json');

module.exports = app => {
    app.get('/api/models', (req, res) => {
      res.send(models);
    });
  
    app.get('/api/makes', (req, res) => {
        res.send(makes);
    });

    app.get('/api/carOfTheWeek', (req, res) => {
        res.send(carOfTheWeek);
    });
}
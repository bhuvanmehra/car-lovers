const express = require('express');
const app = express();

require('./routes')(app);

const server = app.listen(5000, function () {
    const port = server.address().port;
    console.log('Express app listening at port %s', port);
});
  
module.exports = server;

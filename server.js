const express = require('express');
var app = express();

require('./routes')(app);

app.listen(5000);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});

const port = 8000;
app.listen(port, () => {
	console.log('Its alive! Port ' + port);
});
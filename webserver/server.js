const express = require('express');
const app = express();
var port = 3000;

app.use(express.static('medicType'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/medicType/index.html');
})

app.listen(port);

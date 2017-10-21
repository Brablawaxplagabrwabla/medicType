const express = require('express');
const app = express();
const mysql = require('mysql');
var port = 3000;

app.use(express.static('medicType'));

var connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '5899',
	database: 'MedicTypeDB'
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/medicType/index.html');
})

app.listen(port);

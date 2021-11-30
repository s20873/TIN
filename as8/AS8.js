const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// a) /hello
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// b) /form
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '/AS8-b.html'));
});

// c) /formdata
app.post('/formdata', (req, res) => {
    res.send('<h1>Student ' + req.body.fname + ' ' + req.body.lname+ ' has s-number ' + req.body.snumber + '</h1>');
});

// d) /jsondata
app.post('/jsondata', (req, res) => {
    //similar to c) task
    //was tested on Postman with {"fname": "Dina", "lname": "Seviera", "snumber": "s19034"}
    res.send('<h1>Student ' + req.body.fname + ' ' + req.body.lname+ ' has s-number ' + req.body.snumber + '</h1>');
});

app.listen(port, () => {
    console.log(`Server works at http://localhost:${port}`);
});
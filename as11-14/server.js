const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var bestScore = 0;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const port = 3000;


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/title.html'));
});

app.get('/game', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/game.html'));
});

app.get('/score', function (req, res) {
    const result = parseInt(req.query.result);
    bestScore = result > bestScore ? result : bestScore;
    res.json({ result: `Your score is: ${result}%.Best ever score: ${bestScore}%`,
 });
});

app.listen(port, () => {
    console.log(`Server works at http://localhost:${port}`);
});
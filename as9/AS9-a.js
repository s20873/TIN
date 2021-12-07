const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/calculate', (req, res) => {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var operation = req.body.operation;
    if (String(num1).match(/^-?\d+$/) && String(num2).match(/^-?\d+$/)) {
        switch (operation) {
            case 'add':
                var result = (Number(num1) + Number(num2));
                res.json({ result: result });
                break;
            case 'sub':
                var result = (Number(num1) - Number(num2));
                res.json({ result: result });
                break;
            case 'mul':
                var result = (Number(num1) * Number(num2));
                res.json({ result: result });
                break;
            case 'div':
                var result = (Number(num1) / Number(num2));
                res.json({ result: result });
                break;
            default:
                res.json({ result: 'Incorrect operation!' });
        }
    } else {
        res.json({ result: 'Incorrect numbers!' });
    }
});

app.listen(port, () => {
    console.log(`Server works at http://localhost:${port}`);
});
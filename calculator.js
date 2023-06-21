const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2
    res.send("The result of the calculation is " + result);
});

app.get("/bmicalc", function (req, res) {
    res.sendFile(__dirname + "/BMICaculator.html");
});

app.post("/bmicalc", function (req, res) {
    var wt = parseFloat(req.body.weight);
    var ht = parseFloat(req.body.height);
    var bmi = (wt / (Math.pow(ht, 2)))
    res.send("The BMI is " + bmi);
});
app.listen(3000, function () {
    console.log("server is running on port 3000");
});
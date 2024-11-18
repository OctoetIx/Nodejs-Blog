const express = require('express');
const app = express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html')

});

app.post('/', (req, res) => {

    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    const newNumber = num1 + num2;

        res.send( 'result is'+ newNumber)
});

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
});

app.post('/bmiCalculator', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    
    const bmi = weight / (height * height);

    res.send('Your bmi is' + bmi )
});

 app.listen(3000, function(){
  console.log('server is running')
 });
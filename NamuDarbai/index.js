const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('Hello World!');
});


app.get('/addition/:number1/:number2', (req, res) => {
    const number1 = parseFloat(req.params.number1);
    const number2 = parseFloat(req.params.number2);
    const sum = number1 + number2;
    res.json({sum});
})

app.get('/subtract/:number1/:number2', (req, res) => {
    const number1 = parseFloat(req.params.number1);
    const number2 = parseFloat(req.params.number2);
    const subtract = number1 - number2;
    res.json({subtract});
})

app.get('/multiply/:number1/:number2', (req, res) => {
    const number1 = parseFloat(req.params.number1);
    const number2 = parseFloat(req.params.number2);
    const multiply = number1 * number2;
    res.json({multiply});
})

app.get('/reverse-string/:text', (req, res) => {
    const text = req.params.text;
    const textreverse =  [...text].reverse().join("");
   res.json({textreverse});
})

// Endpoint: /check-if-user-exists/<userId>
// Task: Implement an API that checks if a user with a given ID exists in an array. Respond with 200: true if the user exists, or 404: false if not.
// Example: /check-if-user-exists/2 should check if a user with ID 2 exists.
const users = [];

app.get('/check-if-user-exists/:userID', (req, res) => {
    const userID = req.params.userID;
    const userExists = users.find((user) => user.id === userID);
    if (userExists) {
        res.status(200).json({"User exists": true});
    } else {
        res.status(404).json({"User doesn't exist": false});
    }
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});
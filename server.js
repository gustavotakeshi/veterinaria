// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let pets = [];
let appointments = [];

app.post('/add-pet', (req, res) => {
    const pet = req.body;
    pets.push(pet);
    res.status(201).send(pet);
});

app.get('/pets', (req, res) => {
    res.send(pets);
});

app.post('/add-appointment', (req, res) => {
    const appointment = req.body;
    appointments.push(appointment);
    res.status(201).send(appointment);
});

app.get('/appointments', (req, res) => {
    res.send(appointments);
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

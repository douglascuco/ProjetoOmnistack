const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(
    'mongodb+srv://cuco:cuco@semanaomnistack-1w77s.gcp.mongodb.net/semanaOmni?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);


// MongoDB
app.listen(3333);
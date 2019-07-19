const express = require('express');
const mongoose = require('mongoose');
const dbRoutes = require('./routes/databaseAccess.js');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/db', dbRoutes);

let connect = process.env.MONGODB_URI;
mongoose.connect(connect);

app.listen(3000, ()=>{
    console.log('Server for React Todo App connected on port 3000!')
});
const express = require('express');
const dbRoutes = require('./routes/databaseAccess.js');
const app = express();

app.use(express.static('build'));
app.use('/db', dbRoutes);

app.listen(3000, ()=>{
    console.log('Server for React Todo App connected on port 3000!')
});
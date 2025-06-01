const express = require('express');
let routes = require('./routes/weatherRoutes');

const app = express();

app.get('/', (req, res) =>{
    res.send('Welcome to Weather API!');
});

app.use('/weather', routes);


app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');  
})
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{`Listen to PORT ${PORT}`})
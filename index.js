const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//port

const port = 3000;

//init app

const app = express();

//body parser middleware

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log(`Server started on port ` + port);
});


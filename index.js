const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('home');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running on: ' + port))
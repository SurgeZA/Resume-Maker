// const { Router } = require('express');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// const res = require('express/lib/response');
const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.render('home');
});

app.get('/cv-generator/:theme', (req, res, next) => {
    console.log("theme: ", req.params.theme);
    switch (req.params.theme) {
        case '1':
            res.render('cv-generator', { theme: "blue" });
            break;
        case '2':
            res.render('cv-generator', { theme: "green" });
            break;
            sdefault:
            res.render('cv-generator', { theme: "green" });
            break;

    }
    res.render('cv-generator', { theme: req.params.theme });
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running on: ' + port))
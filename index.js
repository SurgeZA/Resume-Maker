
const express = require('express');
const pdf = require('html-pdf')
const expressLayouts = require('express-ejs-layouts');
const dynamicCV = require("./docs/dynamic-resume");;

// const res = require('express/lib/response');
const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const options = {
    "height": "10.5in",
    "width": "8in",
};

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

app.post('/cv-generator', (req, res, next) => {
    console.log(req.body);

    const userName = req.body.name;
    const lowercaseName = userName.toLowerCase();
    const noSpaceName = lowercaseName.replace(' ', '');
    const shortName = noSpaceName.slice(0, 12);
    console.log("short name: ", shortName);



    pdf.create(dynamicCV(), options).toFile(__dirname + "/docs/dynamic-resume.pdf", (error, response) => {
        if (error) throw Error("File is not created");
        console.log(response.filename);
        res.sendFile(response.filename);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running on: ' + port));
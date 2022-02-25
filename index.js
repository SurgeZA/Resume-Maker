
const express = require('express');
const pdf = require('html-pdf')
const expressLayouts = require('express-ejs-layouts');
const dynamicCV = require("./docs/dynamic-resume");;

// Profile picture 
// const image_input = document.querySelector("#image_input");
// var uploaded_image = "";

// image_input.addEventListener("change", function () {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         uploaded_image = reader.result;
//         document.querySelector('#display_image').getElementsByClassName.style.backgroundImage = `url(${uploaded_image})`;
//     });
//     reader.readAsDataURL(this.files[0]);
// })



// const res = require('express/lib/response');
const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const options = {
    "height": "7.87in",
    "width": "6.1in",
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

    let themeOptions = {
        leftTextColour: "rgb(255, 255 , 255)",
        leftBackgroundColour: 'rgb(12, 36, 58)',
        wholeBodyColour: ' rgb(183, 182, 255)',
        rightTextColour: 'rgb(12, 36, 58)'
    };

    if (req.body.theme === 'blue') {


        // HTML TO PDF CONVERTING
        pdf.create(dynamicCV(req.body, themeOptions), options).toFile(__dirname + "/docs/" + shortName + "-resume.pdf", (error, response) => {
            if (error) throw Error("File is not created");
            console.log(response.filename);
            res.sendFile(response.filename);
        });
    } else if (req.body.theme === 'green') {
        themeOptions = {
            leftTextColour: "rgb(183, 217, 255)",
            leftBackgroundColour: 'rgb(0, 119, 89)',
            wholeBodyColour: ' rgb(139, 247, 205)',
            rightTextColour: 'rgb(0, 119, 89)'
        };

        // HTML TO PDF CONVERTING
        pdf.create(dynamicCV(req.body, themeOptions), options).toFile(__dirname + "/docs/" + shortName + "-resume.pdf", (error, response) => {
            if (error) throw Error("File is not created");
            console.log(response.filename);
            res.sendFile(response.filename);
        });
    } else {
        // SETTING DEFAULT VALUE
        // HTML TO PDF CONVERTING
        pdf.create(dynamicCV(req.body, themeOptions), options).toFile(__dirname + "/docs/" + shortName + "-resume.pdf", (error, response) => {
            if (error) throw Error("File is not created");
            console.log(response.filename);
            res.sendFile(response.filename);
        });
    }


});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running on: ' + port));
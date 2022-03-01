
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
// app.set('view engine', 'html');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const options = {
    "height": "7.87in",
    "width": "6.in",
};

// home page
// router.get('/', forwardAuthenticated, (req, res) => res.render('index.html'));
// app.get('/home', function (req, res, next) {
//     res.render('home');
// });

app.get('/', (req, res, next) => {
    res.render('home');
});

app.get('/home.ejs', (req, res, next) => {
    res.sendFile('/views/home.ejs');
});

// router.get('/home.ejs', function (req, res) {
//     res.sendFile(path.join(__dirname + '/home.html'));
// });

// app.get('./views/home.ejs', function (req, res, next) {
//     res.sendFile('C:/Users/Scott Dennis/Desktop/CV Generator/views/home.ejs');
// });



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
            imgBoxShadow: "5px 5px #0000005d",
            leftTextColour: "rgba(27, 27, 27)",
            leftBackgroundColour: 'rgb(255, 163, 26)',
            wholeBodyColour: ' rgb(41, 41, 41)',
            rightTextColour: 'rgb(139, 139, 139)'
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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is running on: ' + port));
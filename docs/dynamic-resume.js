const dynamicCV = (options, themeOptions) => {
    return `
    <!doctype html>
<html lang="en">

<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <link rel="stylesheet" href="style-green.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>CV Generator</title>
    <style>
    .resume {
        width: 6.1in;
        height: 7.86in;
    }
    
    .box {
        background-color: ${themeOptions.wholeBodyColour};
        width: 100%;
        height: 100%;
    }
    
    .left-side {
        color: ${themeOptions.leftTextColour};
        width: 33%;
        height: 100%;
        background-color: ${themeOptions.leftBackgroundColour};
    
    }
    
    .right-side {
        height: 100%;
        width: 65%;
        color: ${themeOptions.rightTextColour};
    }
    
    .name {
        font-size: 1.2rem;
    }
    
    .profile-image {
        width: 90%;
        margin-left: 5%;
        margin-top: 3%;
    }
    
    .profile-image img {
        border-radius: 50%;
    }

    #dispaly_image{
        width: 375px;
        height: 211px;
        border: 1px solid black;
        backgroud-position: center;
        background-size: cover;

    }
    
    .heading-text {
        font-size: 0.9rem;
    }
    
    .para,
    .per-info {
        font-size: 0.7rem !important;
    }
    
    .about .para{
        width: 93%;
    }
    .key-skills li{
        font-size: 0.7rem;
    }

    </style>

</head>

<body>
    <div class="resume border shadow d-flex aligh-items-center jusify-content-center">
        <div class="box">
            <div class="left-side d-inline-block">
            <input type="file" id="image_input" accept="image/png, image/jpg">
                <div class="profile-image" id="display_image">

                    <img class="img-fluid"
                        src="https://m.media-amazon.com/images/M/MV5BMzhhNTJhYmEtMjk5Yy00OTc0LTlmMTgtZTU5YTFiMmNjMTFiXkEyXkFqcGdeQXVyNjMwOTA1MDM@._V1_.jpg"
                        alt="Profile picture">
                </div>
                <div class="contact ml-2 mt-2">
                <div class="heading-text text-uppercase">Contact</div>
                <p class="para mb-1">
                     <br>
                    ${options.phone} <br>
                    ${options.phone} <br>
                    ${options.email} <br>
                    ${options.website} <br>
                </p>
            </div>
            <div class="expert ml-2 mt-2">
                <div class="heading-text text-uppercase">Expertise Area</div>
                <p class="para mb-1">
                ${options.exp_1} <br>
                ${options.exp_2} <br>
                ${options.exp_3} <br>
                ${options.exp_4} <br>
                </p>
            </div>
            <div class="skill ml-2 mt-2">
                <div class="heading-text text-uppercase">IT Skill</div>
                <p class="para mb-1">
                ${options.skill}
                </p>
            </div>


            <div class="hobbies ml-2 mt-2">
            <div class="heading-text text-uppercase">Hobbies</div>
            <p class="para mb-1">
            ${options.hob_1}<br>
            ${options.hob_2} <br>
            ${options.hob_3}<br>
            ${options.hob_4}<br>
            </p>
        </div>
    </div>
    <div class="right-side d-inline-block m-0 p-0 align-top">
        <h2 class="name text-uppercase ml-3 my-2">${options.name}</h2>
        <div class="contact ml-3 mt-3">
            <div class="heading-text text-uppercase">About Me</div>
            <p class="para mb-1">
            ${options.about}
            </p>
        </div>
        <div class="personal ml-3 mt-3">
            <div class="heading-text text-uppercase">Personal Informations</div>
            <table class="per-info">
                <tbody>
                    <tr class="border">
                        <td>Father's Name</td>
                        <td>${options.f_name}</td>
                    </tr>
                    <tr class="border">
                        <td>Mather's Name</td>
                        <td>${options.m_name}</td>
                    </tr>
                    <tr class="border">
                        <td>Date of Birth</td>
                        <td>${options.birth}</td>
                    </tr>
                    <tr class="border">
                        <td>Location: </td>
                        <td>${options.location}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="education ml-3 mt-3">
            <div class="heading-text text-uppercase">Work Experience</div>
            <table class="per-info">
                <tbody>
                    <tr class="border">
                        <td>${options.period_1}</td>
                        <td>
                            ${options.company_1}<br>
                            ${options.work_1} <br>
                        </td>
                    </tr>
                    <tr class="border">
                    <td>${options.period_2}</td>
                    <td>
                        ${options.company_2}<br>
                        ${options.work_2} <br>
                    </td>
                </tr>
                <tr class="border">
                <td>${options.period_3}</td>
                <td>
                    ${options.company_3}<br>
                    ${options.work_3} <br>
                </td>
            </tr>
                </tbody>
            </table>
        </div>
        <div class="key-skills ml-3 mt-3">
            <div class="heading-text text-uppercase">Key Skills</div>
            <ul class="pl-1">
                <li>${options.skills_1}</li>
                <li>${options.skills_2}</li>
                <li>${options.skills_3}</li>
                <li>${options.skills_4}</li>
                <li>${options.skills_5}</li>
                <li>${options.skills_6}</li>
            </ul>
        </div>
    </div>
</div>
</div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
</body>

</html>

`;
}


module.exports = dynamicCV;
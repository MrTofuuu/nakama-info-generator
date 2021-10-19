function generateManager(data) {
    return `<div class="col s12 m4 l3">
    <div class="card z-depth-5">
        <div class="card-panel red">
            <h2>${data.getName()}</h2>
            <h3>${data.getRole()}</h1>
        </div>
        <div class="card-content">
            <li>ID: ${data.getId()}</li>
            <li>Email: mailto: ${data.getEmail()}</li>
            <li>Office number: ${data.getOfficeNumber()}</li>
        </div>
    </div>
</div>`;
};

//create a for loop/for each to call the generateEngineer/Interns

function generateEngineer(data) {
    return `<div class="col s12 m4 l3">
    <div class="card z-depth-5">
        <div class="card-panel red">
            <h2>${data.getName()}</h2>
            <h3>${data.getRole()}</h1>
        </div>
        <div class="card-content">
            <li>ID: ${data.getId()}</li>
            <li>Email: mailto: ${data.getEmail()}</li>
            <li>GitHub: ${data.getGithub()}</li>
        </div>
    </div>
</div>`;
};

function generateIntern(data) {
    return `<div class="col s12 m4 l3">
    <div class="card z-depth-5">
        <div class="card-panel red">
            <h2>${data.getName()}</h2>
            <h3>${data.getRole()}</h1>
        </div>
        <div class="card-content">
            <li>ID: ${data.getId()}</li>
            <li>Email: mailto: ${data.getEmail()}</li>
            <li>School: ${data.getSchool()}</li>
        </div>
    </div>
</div>`;
};

function generateTeam(teamArr) {
    let finalfinalArr;
    //checks for employee type
    console.log(`generateTeam`);
    console.log(teamArr);
    let renderArr = [];
    teamArr.forEach(employee => {
        console.log(`switch statement`);
        console.log(employee);
        const role = employee.getRole();
        switch (role) {
            case 'Manager':
                const managerInfo = generateManager(employee);
                console.log(managerInfo);
                renderArr.push(managerInfo);
                break;
            case 'Engineer':
                const engineerInfo = generateEngineer(employee);
                renderArr.push(engineerInfo);
                break;
            case 'Intern':
                const internInfo = generateIntern(employee);
                renderArr.push(internInfo);
                break;
            default:
                'Something went wrong Mr Jones'
        }
        // console.log(renderArr.join(''));
        finalfinalArr = renderArr.join('');
        console.log(finalfinalArr);


    })

    return finalfinalArr;
    //call employee type specifc function
}

function generateHTML(finalArr) {
    console.log(`generate HTML`)
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="styles.css">
        <title>Nakama Info Generator</title>
    </head>
    
    <body>
        <header class='banner valign-wrapper '>
            <h1 class='center-align'>Nakama Info Generator</h1>
        </header>
        <div class="container">
        ${generateTeam(finalArr)}
        </div>
</div>


<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>

</html>`;
}





module.exports = generateHTML;
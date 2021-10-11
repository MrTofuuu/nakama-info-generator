function generateHTML(data) {
    return ``;
}

function generateManager(data) {
    return `<div class="col s12 m4 l3">
    <div class="card z-depth-5">
        <div class="card-panel red">
            <h2>${data.name}</h2>
            <h3>${data.getRole()}</h1>
        </div>
        <div class="card-content">
            <li>ID: ${data.id}</li>
            <li>Email: mailto: ${data.email}</li>
            <li>Office number: ${data.officeNumber}</li>
        </div>
    </div>
</div>`;
};

function generateEngineer(data) {
    return `<div class="col s12 m4 l3">
    <div class="card z-depth-5">
        <div class="card-panel red">
            <h2>${data.name}</h2>
            <h3>${data.getRole()}</h1>
        </div>
        <div class="card-content">
            <li>ID: ${data.id}</li>
            <li>Email: mailto: ${data.email}</li>
            <li>GitHub: ${data.github}</li>
        </div>
    </div>
</div>`;
};

function generateIntern(data) {
    return `<div class="col s12 m4 l3">
    <div class="card z-depth-5">
        <div class="card-panel red">
            <h2>${data.name}</h2>
            <h3>${data.getRole()}</h1>
        </div>
        <div class="card-content">
            <li>ID: ${data.id}</li>
            <li>Email: mailto: ${data.email}</li>
            <li>School: ${data.school}</li>
        </div>
    </div>
</div>`;
};

module.exports = generateHTML, generateEngineer, generateIntern, generateManager;
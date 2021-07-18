const generateTeam = team => {
    
    const generateManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const html = [];
    html.push(team.filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        )
        return html.join("")
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    </head>
    
    <body>
    ${generateTeam(team)}
    </body>
    </html>`
}
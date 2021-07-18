const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${manager.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Role: ${manager.getRole()}</h6>
            <p class="card-text">Id: ${manager.getId()}</p>
            <p class="card-text">Email: ${manager.getEmail()}</p>
            <p class="card-text">Office Phone: ${manager.getOfficeNumber()}</p>
        </div>
        </div>
        `;
  };

  const generateIntern = (intern) => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">Name: ${intern.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Role: ${intern.getRole()}</h6>
          <p class="card-text">Id: ${intern.getId()}</p>
          <p class="card-text">Email: ${intern.getEmail()}</p>
          <p class="card-text">School: ${intern.getSchool()}</p>
      </div>
      </div>
      `;
  }

  const generateEngineer = (engineer) => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">Name: ${engineer.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Role: ${engineer.getRole()}</h6>
          <p class="card-text">Id: ${engineer.getId()}</p>
          <p class="card-text">Email: ${engineer.getEmail()}</p>
          <p class="card-text">School: ${engineer.getGithub()}</p>
      </div>
      </div>
      `
  }



  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
      team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  )
  html.push(
    team
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => generateEngineer(engineer))
)
  return html.join("");
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" />
    </head>
    
    <body>
    ${generateTeam(team)}
    </body>
    </html>`;
};

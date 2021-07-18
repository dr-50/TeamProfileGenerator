const inquirer = require("inquirer");
const path = require('path');
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const render = require('./src/template.js')
const temp = require('./src/template')
const team =[]

//add to bottom of generateTeam to write data to file
const outPutDir = path.resolve(__dirname, "dist")
const outPut = path.join(outPutDir, "template.html")
//fs.writeFileSync(path, temp(teammates), "utf-8")

function app() {
    function generateManager() {
        inquirer.prompt([
            {
                type:"input",
                name: "ManagerName",
                message: "What is the manager's name?",
                validate: answer => {
                    if(answer !=="") {
                        return true;
                    }
                    return "please enter manager's name?";
                }
            },
            {
                type: "input",
                name: "ManagerId",
                message: "What is the manager's ID?",
                validate: answer => {
                    if(answer !=="") {
                        return true;
                    }
                    return "please enter manager's ID";
                }
            },
            {
                type: "input",
                name: "ManagerEmail",
                message: "what is the manager's email?",
                validate: answer => {
                    if(answer !=="") {
                        return true
                    }
                    return "please enter manager's email"
                }
            },
            {
                type: "input",
                name: "ManagerPhoneNumber",
                message: "what is the manager's office phone number?",
                validate: answer => {
                    if(answer !=="") {
                        return true
                    }
                    return "please enter manager's phone number"
                }
            }
        ]).then(response => {
            const manager = new Manager(response.ManagerName, response.ManagerId, response.ManagerEmail, response.ManagerPhoneNumber)
            team.push(manager);
            selectTeam()
        })
    }
        function selectTeam() {
            inquirer.prompt([
                {
                    type: "list",
                    name: "empSelection",
                    message: "which role employee would you like to add?",
                    choices: [
                        "Intern",
                        "Engineer",
                        "Done"
                    ]
                }
            ]).then(response => {
                switch(response.empSelection){
                    case "Intern":
                        addIntern();
                        break;
                    case "Engineer":
                        addEngineer();
                    break;
                    default:
                        generateTeam()
                }
            })
        }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "InternName",
                message: "What is the intern's name?",
                validate: answer => {
                    if(answer!=="") {
                        return true;
                    }
                    return "please enter the intern's name"
                }
            },
            {
                type: "input",
                name: "InternId",
                message: "What is the intern's ID?",
                validate: answer => {
                    if(answer!==""){
                        return true;
                    }
                    return "please enter the intern's ID"
                }
            },
            {
                type: "input",
                name: "InternEmail",
                message: "What is the intern's email?",
                validate: answer => {
                    if(answer!==""){
                        return true;
                    }
                    return "please enter the intern's email"
                }
            },
            {
                type: "input",
                name: "InternSchool",
                message: "What is the intern's school?",
                validate: answer => {
                    if(answer!==""){
                        return true;
                    }
                    return "please enter the intern's school"
                }
            }
        ]).then(response => {
            const intern = new Intern(response.InternName, response.InternId, response.InternEmail, response.InternSchool);
            team.push(intern);
            selectTeam();
        })
    }

    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "EngineerName",
                message: "What is the Engineer's name?",
                validate: answer => {
                    if(answer!==""){
                        return true;
                    }
                    return "please enter the engineer's name"
                }
            },
            {
                type: "input",
                name: "EngineerId",
                message: "What is the Engineer's ID?",
                validate: answer => {
                    if(answer!=="") {
                        return true;
                    }
                    return "Please enter the engineer's ID"
                }
            },
            {
                type: "input",
                name: "EngineerEmail",
                message: "What is the engineer's email?",
                validate: answer => {
                    if(answer!=="") {
                        return true;
                    }
                    return "please enter the engineer's email"
                }
            },
            {
                type: "input",
                name: "EngineerGitHub",
                message: "What is the engineer's Github?",
                validate: answer => {
                    if(answer!=="") {
                        return true;
                    }
                    return "please enter the engineer's github"
                }
            }
        ]).then(response => {
            const engineer = new Engineer(response.EngineerName, response.EngineerID, response.EngineerEmail, response.EngineerGitHub);
            team.push(engineer);
            selectTeam();
        })
    }

    function generateTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(outPutDir)) {
          fs.mkdirSync(outPutDir)
        }
        fs.writeFileSync(outPut, render(team), "utf-8");
      }

    generateManager();
}

app();
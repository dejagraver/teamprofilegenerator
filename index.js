const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const inquirer = require('inquirer');
const fs = require('fs');

//employee arrays to store employee data
managerArray = [];
engineerArray = [];
internArray = [];

// employeeArray = [];

//
// var generatedHTML = [];

// Create an array of employee objects that coincide with question, selection of employee type 
const chooseEmployee = [
    {
        type: "list",
        name: "employeeObjects",
        message: "Choose an employee member",
        choices: ["Manager", "Engineer", " Intern"]
    }
];

// Create objects full of the array of information for each employeee, user will input when inputting node index into terminal 
const questions = {
    Manager: [
        {
            type: "input",
            name: "name",
            message: "Enter manager's name",
            validate: (value) =>{
                if (value) {
                    return true
                } else { return "Please enter manager's name!" }
            },
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager's id",
            validate: (value) =>{
                if (value) {
                    return true
                } else { return "Please enter manager's id!" }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager's email address",
            validate: (value) =>{
                if (value) {
                    return true
                } else { return 'Please enter a valid email address!' }
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "enter manager's office number",
            validate: (value) =>{
                if (value) {
                    return true
                } else { return "Please enter manager's office number!" }
            },
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Do you want to add another member to the team",
            choices: ["yes", "no"]
        },
    ],

    Engineer: [
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name",
            validate: (value) =>{
                if (value){
                    return true
                } else { return "Please enter engineer's name!" }
            },
        },
        {
            type: "input",
            name: "id",
            message: "Enter engineer's id",
            validate: (value) =>{
                if (value){
                    return true
                } else { return "Please enter engineer's id!" }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer's email address",
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'Please enter a valid email address!' }
            },
        },
        {
            type: "input",
            name: "github",
            message: "Enter engineer's GitHub",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's GitHub!" }
            },
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Do you want to add another member to the team",
            choices: ["yes", "no"]
        },
    ],

    Intern: [
        {
            type: "input",
            name: "name",
            message: "Enter intern's name",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter intern's name!" }
            },
        },
        {
            type: "input",
            name: "id",
            message: "Enter intern's id",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter intern's id!" }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Enter intern's email",
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'Please enter a valid email!' }
            },
        },
        {
            type: "input",
            name: "school",
            message: "Enter interns University/College",
            validate: (value) =>{
                if (value) {
                    return true
                } else { return "Please enter the name of school!" }
            },
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Do you want to add another member to the team",
            choices: ["yes", "no"]
        },
    ]
};



//prompting choose Employee and questions, to then save employee information
function saveEmployee() {
    //first prompt chooseEmployee (mangaer, intern, engineer)
    inquirer.prompt(chooseEmployee)
    .then(value => {
    if (value.employeeObjects === "Manager") {
        if (true) {
            //then prompt questions for the type of employee selected 
            inquirer.prompt(questions.Manager)
                .then(value => {
                    const manager = new Manager(value.name, value.id, value.email, value.officeNumber);
                        //push employee information in to an array 
                        managerArray.push(manager);
                        if (value.addEmployee === "yes"){
                            saveEmployee();
                        } else {
                            engineerHTML();
                            generateFile();
                           
                        };
                });
        }
    } 
    else if (value.employeeObjects === "Engineer") {
        inquirer.prompt(questions.Engineer)
            .then(value => {
               const engineer = new Engineer(value.name, value.id, value.email,value.github);
               engineerArray.push(engineer);
               if (value.addEmployee === "yes"){
                saveEmployee();
            } else {
                internHTML();
                generateFile();
            };
            });

    } else if (value.employeeObjects === "Intern") {
        inquirer.prompt(questions.Intern)
            .then(value => {
                const intern = new Intern(value.name, value.id, value.email, value.school);
                internArray.push(intern)
                if (value.addEmployee === "yes"){
                    saveEmployee();
                } else {
                    generateFile();
                };
            });
    };
});
};
saveEmployee();

//create functions that create HTML for each employee with employee data
//create functions that join employeeHTML into one the generated HTML 
//saveEmployee().then return Employee array with the generated HTML .then writeFile using the generateFile function to return and outpuut for the finalHTML

//holds final HTML
finalHTMLArray = [];

//generates HTML for each employee, joins employee data and pushes to finalHTML array  
function managerHTML() {
    managerArray.forEach(manager => { finalHTMLArray.push(`
    <div class="columns p-2">
    <div class="column col-4 col-xs-12">
      <div class="card text-center">
        <h1>${manager.name}</h1>
        <h2>Manager</h2>
      </div>
      <div>
          <ul>
              <li> Id: ${manager.id}</li>
              <li> Email: ${manager.email}</li>
              <li> Office Number: ${manager.officeNumber}</li>
          </ul>
      </div>
    </div>
    `);
    })
}
managerHTML();

function engineerHTML() {
    engineerArray.forEach(engineer => { finalHTMLArray.push(`
    <div class="columns p-2">
    <div class="column col-4 col-xs-12">
        <div class="card text-center">
            <h1> ${engineer.name}</h1>
            <h2>Engineer</h2>
        </div>
        <div>
            <ul>
                <li> Id: ${engineer.id} </li>
                <li> Email: ${engineer.email} </li>
                <li> Github: ${engineer.github} </li>
            </ul>
        </div>
    </div>
</div>
    `);
    })
}

function internHTML() {
    internArray.forEach(intern => { finalHTMLArray.push(
        `
    <div class="columns p-2">
    <div class="column col-4 col-xs-12">
        <div class="card text-center">
            <h1> ${intern.name} </h1>
            <h2>Intern </h2>
        </div>
        <div>
            <ul>
                <li> Id: ${intern.id} </li>
                <li> Email: ${intern.email} </li>
                <li> School: ${intern.school} </li>
            </ul>
        </div>
    </div> 
</div>
    `);
    })
}

// const employees = finalHTMLArray.join("");

//finalHTML takes the joined employee HTML for the finalHTML array and incorporates it into the HTML template 
function finalHTML() {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
        <title>Team Profile Generator </title>
      </head>
      <body>
      <section class="col-12">
            <div>
                <header class="grid-hero container grid-lg text-center">
                    <div class="bg-title">
                        <h1>Team Profile Generator</h1>
                    </div>
                </header>
            </div>

            ${this.finalHTMLArray}
              
        </section>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </html>
    `
}

//generates the file to the dist folder with the final HTML that contains the employee data from the manager/engineer/intern Array 
function generateFile() {
    fs.writeFile('./dist/index.html', finalHTML(), err =>{
        if(err){
            return;
        }
        else{
            console.log("HTML is now generated");
        }
    });
};
generateFile();
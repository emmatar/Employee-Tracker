// Import inquirer
const inquirer = require('inquirer')
// Function to start program
const init = () => {
    // Prompt user choices
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: ['View all deparments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]).then((response) => {
        if (response.options === 'View all deparments') {

        } else if (response.options === 'View all roles'){
            
        } else if (response.options === 'View all employees'){
            
        } else if (response.options === 'Add a deparment'){
            
        } else if (response.options === 'Add a role'){
            
        } else if (response.options === 'Add an employee'){
            
        } else if (response.options === 'Update an employee role'){
            
        } else {
            return;
        }
    })
}

init();
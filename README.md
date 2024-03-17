# Employee Tracker  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/blog/license/mit-0)

## Description

Welcome to the Employee Tracker!

An application set to assist individuals in viewing and managing the roles of an employee structure to help bring clarity in business planning. 

## Table of Contents
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Tests](#tests)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## License 

  This application is under MIT Licensing.<br />
  Click the license badge above for more information regarding this license.

  ## Installation
  Required items to run application: Node Package Manager and a MySQL account.
  To install the application, before running enter this code block text in the integrated terminal after installing.

    npm i

  ## Tests 
To run the application, right click on db folder, and enter the Integrated Terminal. Then enter the code below the the users personal response for MySQL login information.

    mysql -r (username) -p

*Enter password for MySQL*
Run the "schema.sql" file first, then the "seeds.sql".

    source schema.sql;
    source seeds.sql;

Now run application from the "server.js" file's integrated terminal using: 

    npm start

  ## Usage

Once the the Employee Tracker is initiated, the user will be prompted with a series of commands. The user will encounter commands with two different types of inputs:

- List Input
    - Navigate using the up/down arrows on your keyboard and to choose the option, press the "Enter" key. Ex: Choosing "View all departments" will display any department that is currently established.<br />

- Text Input
    - When asked a question that requires text/input from the user, enter the information as you would any question, with your keyboard! Ex: When wanting to add a new role to your business, choose the "Add a role" command. The questions that follow will look like, "What is the name of the new role?". This quesiton is looking for a text input from the user, and this should only hold one answer.<br />

The application displays a list of options to choose from when initiated. The first three options: View all departments, View all roles, and View all employees are all commands that display information, but however, will not make changest the application's structure. The rest of the options: Add a department, Add a role, Add an employee, Update an employee role, and Delete an employee are all commands that will seek further information from the User (this is where the "text" inputs come into place, with a little flirting from the "list" inputs also!). The user can enter the information they see fit, and once the prompts have all been answered, a message will display confirming the result of the users commands.

[Here's a link to the Walkthrough Video!]()

![Screenshot1](/lib/img/Employee%20Tracer%20npm%20start.png)
![Screenshot2](/lib/img/Employee%20Tracker%20All.png)


Woah, a Congratulations are in order. "CONGRATULATIONS", on using the best "whelming" piece of software that was ever made for the business industry! "Yahoooo!"

  ## Contributing 

  KU BootCamp

  ## Questions
  Application questions? 
  
  GitHub Account: [emmatar](https://github.com/emmatar)

  Have More Questions?!

  Email me here: m.matar515@gmail.com
  

  
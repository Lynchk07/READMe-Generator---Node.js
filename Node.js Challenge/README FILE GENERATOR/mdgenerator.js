// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license){
    if(license === "MIT License"){
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}
        else if(license === "Apache License"){
          return"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}
        else if (license === "GNU License"){
          return"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
}
  
  // // TODO: Create a function that returns the license link
  // // If there is no license, return an empty string
  function renderLicenseLink(license) {} /// above code includes link 
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}// see above code 
  
  // TODO: Create a function to generate markdown for README

  function generateMarkdown (answers){
    return `# ${answers.title} \n
    ${renderLicenseBadge (answers.license)}\n
    # ${answers.title} \n
    # Table of Contents \n
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#Usage)
    *[Test](#test)
    
    # Description \n
    ${answers.description}\n
    ## Installation \n
    ${answers.installation}\n
    ## Usage \n
    ${answers.usage}\n
    ## Collaborators \n
    ${answers.credits}\n
    ## GitHub \n
    [github link] (https://github.com/${answers.git})\n
    ## Email \n
    You can reach me here:${answers.email}\n`
  }
 
 module.exports = generateMarkdown
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-green.svg)](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "None") {
    return ""
  }
  return ` ### 'See more ${license} usage terms here: https://opensource.org/licenses/${license} '`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None") {
    return ""
  }
  return ` #### 'Find the ${license} information here'`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  #### ${renderLicenseBadge(data.license)}

  #### ${data.description}

  ## Table of Contents

  ## Installation 
  ${data.install}

  ## How To Use 
  ${data.usage}

  ## License
  ${data.license}

  ## Contribute
  ${data.contribute}

  ## Contact Me
  GitHub Username: ${data.username}
  Email: ${data.email}
  

  
`;
}

module.exports = generateMarkdown;

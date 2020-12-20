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
  return ` ### See more ${license} usage terms here: https://opensource.org/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None") {
    return ""
  }
  return `#License`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  #### ${renderLicenseBadge(data.license)}

  ### ${data.description}

  ## Table of Contents
  [Installation](#Installation)

  [How To Use](#Usage)

  [Images](#Images)

  [License](${renderLicenseSection(data.license)})

  [Contribute](#Contribute)

  [Contact Me](#Contact)

  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Images


  ## License
  ${data.license}
  ${renderLicenseLink(data.license)}
 

  ## Contribute
  ${data.contribute}

  ## Contact
  GitHub Username: ${data.username}
  Email: ${data.email}
  

  
`;
}

module.exports = generateMarkdown;

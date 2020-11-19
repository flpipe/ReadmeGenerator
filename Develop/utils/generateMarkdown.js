// function to generate markdown for README
function generateMarkdown(data1, data2) {
  return `# ${data1.Title}
  ## Description
  ${data1.Description}

  ## Table Of Contents [![TOC](https://img.shields.io/badge/TOC-Table%20of%20Contents-green)]()

  ${data1.TableofContents}

  ## Installation [![Inst](https://img.shields.io/badge/-Installation-green)]()
  ${data1.Installation}

  ## Usage [![Usage](https://img.shields.io/badge/-Usage-brightgreen)]()
  ${data1.Usage}

  ## License [![LIC](https://img.shields.io/badge/License-LIC-yellowgreen)]()
  ${data1.License}

  ## Contributions
  ${data1.Contributing}

  ## Test Details
  ${data1.Tests}

  ## Questions
  ${data1.Questions}

  ## Badge Details Generated from shields.io
  [![Badge](https://img.shields.io/badge/SHIELDS%20IO-BADGE%20GENERATOR-red)]()
  ${data1.Badge}

  ## Username
  ${data2.name}

  ## Email
  ${data2.email}

  ## Github Profile
  ${data2.profile}







`;
}

module.exports = generateMarkdown;

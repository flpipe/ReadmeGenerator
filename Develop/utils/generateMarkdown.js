// function to generate markdown for README
function generateMarkdown(data1, data2) {
  return `# ${data1.Title}
\n* [Installation][#Installation]
  ${data1.Description}

  ## Table Of Contents
  [![TOC](https://img.shields.io/badge/TOC-Table%20of%20Contents-green)]()
  ${data1.TableofContents}

  ## Installation
  ${data1.Installation}

  ## Usage
  ${data1.Usage}

  ## License
  ${data1.License}

  ## Contributions
  ${data1.Contributing}

  ## Test Details
  ${data1.Tests}

  ## Questions
  ${data1.Questions}

  ## Badge Details
  ${data1.Badge}

  ## Username
  ${data2.name}

  ## Email
  ${data2.email}

  ## Github Profie
  ${data2.profile}







`;
}

module.exports = generateMarkdown;

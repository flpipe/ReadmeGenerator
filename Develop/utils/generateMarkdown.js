// function to generate markdown for README
function generateMarkdown(data1, data2) {
  return `# ${data1.Title}

  ${data1.Description}

  ${data1.TableofContents}

  ${data1.Installation}

  ${data1.Usage}

  ${data1.License}

  ${data1.Contributing}

  ${data1.Tests}

  ${data1.Questions}

  ${data1.Badge}

  ${data2.name}

  ${data2.email}

  ${data2.profile}







`;
}

module.exports = generateMarkdown;

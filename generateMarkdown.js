// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.badges}

## Description
${data.description}

# Table of Contents
- [Insallation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Link to my Github profile https://github.com/${data.github}
My Email address is ${data.email}
`;
}

module.exports = generateMarkdown
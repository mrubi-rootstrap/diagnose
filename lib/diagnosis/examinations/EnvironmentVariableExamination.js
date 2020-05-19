const Examination = require('./Examination')

class EnvironmentVariable extends Examination {
  constructor ({ environmentVariableName, results }) {
    super(results)
    this.environmentVariableName = environmentVariableName
  }

  isDefined () {
    if (!Object.keys(process.env).includes(this.environmentVariableName)) {
      this.addFailure(`The environment variable '${this.environmentVariableName}' should be defined but it's not present`)
      return
    }
    const value = process.env[this.environmentVariableName]
    if (value === undefined || value === 'undefined') {
      this.addFailure(`The environment variable '${this.environmentVariableName}' should be defined but it's value is undefined`)
      return
    }
    if (value === null || value === 'null') {
      this.addFailure(`The environment variable '${this.environmentVariableName}' should be defined but it's value is null`)
      return
    }
    if (value === '' || value === '') {
      this.addFailure(`The environment variable '${this.environmentVariableName}' should be defined but it's value is empty`)
    }
  }
}

module.exports = EnvironmentVariable

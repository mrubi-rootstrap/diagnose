/* eslint no-undef: ["off"] */
const { expect } = require('chai')
const { evaluateCommandLine, errorMessage } = require('../sourceCodeTestHelper')

const baseCommand = 'npx eslint --config utilitiesConfig/.eslintrc.js --ignore-path utilitiesConfig/.eslintignore'
const commandLine = `${baseCommand} .`
const fixCommandLine = `${baseCommand} --fix .`
const oneMinute = 1 * 60 * 1000

describe('The source code coding style', () => {
  it('complies with eslint defaults', () => {
    evaluateCommandLine({
      commandLine: commandLine,
      timeout: oneMinute,
      onNonZeroExitCode: (output) => {
        const issuesCountRegex = /^.*[^\d]([\d]+) problem/m
        const issuesCount = output.match(issuesCountRegex)[1]
        expect.fail(errorMessage({ commandLine, fixCommandLine, issuesCount }))
      }
    })
  })
})

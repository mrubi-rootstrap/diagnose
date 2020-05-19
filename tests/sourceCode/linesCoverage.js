/* eslint no-undef: ["off"] */
const { expect } = require('chai')
const { evaluateCommandLine } = require('../sourceCodeTestHelper')

const testCommand = 'npx mocha --recursive tests/lib'
const commandLine = `npx nyc --nycrc-path utilitiesConfig/nyc.config.json --reporter text-summary ${testCommand}`
const generateReportCommandLine = `npx nyc --nycrc-path utilitiesConfig/nyc.config.json ${testCommand}`
const oneMinute = 1 * 60 * 1000

console.log(commandLine)
describe('The source code', () => {
  it('lines coverage is at least 100%', () => {
    let outputString = ''
    evaluateCommandLine({
      commandLine: commandLine,
      timeout: oneMinute,
      onZeroExitCode: (output) => {
        outputString = output
      },
      onNonZeroExitCode: (output) => {
        outputString = output
      }
    })

    const linesCoverageRegex = /^Lines\s*:\s*([\d.]+)%/m
    const match = outputString.match(linesCoverageRegex)
    const linesCoverageString = match ? match[1] : '0'
    const linesCoverage = parseFloat(linesCoverageString)
    const expectedLinesCoverage = 100
    const message =
`Expected lines coverage to be at least ${expectedLinesCoverage}, was ${linesCoverage}
Generate a coverage report with
${generateReportCommandLine}
`
    expect(linesCoverage).to.be.at.least(expectedLinesCoverage, message)
  })
})

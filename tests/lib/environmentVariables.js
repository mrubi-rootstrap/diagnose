/* eslint no-undef: ["off"] */
/* eslint no-unused-expressions: ["off"] */
const { expect } = require('chai')
const { diagnose } = require('../../lib/index')

describe('when checking out if an environment variable is defined', () => {
  it('does not report a failure if it is defined', () => {
    const results = diagnose((d) => {
      d.topic('Environment variables', (checkout) => {
        checkout.environmentVariable('PATH').isDefined()
      })
    })

    expect(results.getFailures()).to.be.empty
  })

  it('reports a failure if it is not defined', () => {
    const results = diagnose((d) => {
      d.topic('Environment variables', (checkout) => {
        checkout.environmentVariable('MISSING_ENV_VAR').isDefined()
      })
    })

    expect(results.getFailures()).to.be.eql([
      "The environment variable 'MISSING_ENV_VAR' should be defined but it's not present"
    ])
  })

  it('reports a failure if it has an undefined value', () => {
    process.env.UNDEFINED_ENV_VAR = undefined
    const results = diagnose((d) => {
      d.topic('Environment variables', (checkout) => {
        checkout.environmentVariable('UNDEFINED_ENV_VAR').isDefined()
      })
    })

    expect(results.getFailures()).to.be.eql([
      "The environment variable 'UNDEFINED_ENV_VAR' should be defined but it's value is undefined"
    ])
  })

  it('reports a failure if it has an null value', () => {
    process.env.NULL_ENV_VAR = null
    const results = diagnose((d) => {
      d.topic('Environment variables', (checkout) => {
        checkout.environmentVariable('NULL_ENV_VAR').isDefined()
      })
    })

    expect(results.getFailures()).to.be.eql([
      "The environment variable 'NULL_ENV_VAR' should be defined but it's value is null"
    ])
  })

  it('reports a failure if it has an empty string', () => {
    process.env.EMPTY_ENV_VAR = ''
    const results = diagnose((d) => {
      d.topic('Environment variables', (checkout) => {
        checkout.environmentVariable('EMPTY_ENV_VAR').isDefined()
      })
    })

    expect(results.getFailures()).to.be.eql([
      "The environment variable 'EMPTY_ENV_VAR' should be defined but it's value is empty"
    ])
  })
})

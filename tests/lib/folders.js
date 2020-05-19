/* eslint no-undef: ["off"] */
/* eslint no-unused-expressions: ["off"] */
const { expect } = require('chai')
const { diagnose } = require('../../lib/index')

describe('when checking out if a folder is present', () => {
  it('does not report a failure if it is present', () => {
    const results = diagnose((d) => {
      d.topic('Folders', (checkout) => {
        checkout.folder('tests/filesAndFolders').isPresent()
      })
    })

    expect(results.getFailures()).to.be.empty
  })

  it('reports a failure if it is missing', () => {
    const results = diagnose((d) => {
      d.topic('Folders', (checkout) => {
        checkout.folder('tests/missingFolders').isPresent()
      })
    })

    expect(results.getFailures()).to.eql([
      "The folder 'tests/missingFolders' does not exist"
    ])
  })

  it('reports a failure if it is a file', () => {
    const results = diagnose((d) => {
      d.topic('Folders', (checkout) => {
        checkout.folder('tests/filesAndFolders/file.sample').isPresent()
      })
    })

    expect(results.getFailures()).to.eql([
      "The folder 'tests/filesAndFolders/file.sample' exists but it's a file"
    ])
  })
})

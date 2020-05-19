/* eslint no-undef: ["off"] */
/* eslint no-unused-expressions: ["off"] */
const { expect } = require('chai')
const { diagnose } = require('../../lib/index')

describe('when checking out if a file is present', () => {
  it('does not report a failure if it is present', () => {
    const results = diagnose((d) => {
      d.topic('Files', (checkout) => {
        checkout.file('tests/filesAndFolders/file.sample').isPresent()
      })
    })

    expect(results.getFailures()).to.be.empty
  })

  it('reports a failure if it is missing', () => {
    const results = diagnose((d) => {
      d.topic('Files', (checkout) => {
        checkout.file('tests/filesAndFolders/missing.sample').isPresent()
      })
    })

    expect(results.getFailures()).to.eql([
      "The file 'tests/filesAndFolders/missing.sample' does not exist"
    ])
  })

  it('reports a failure if it is a folder', () => {
    const results = diagnose((d) => {
      d.topic('Files', (checkout) => {
        checkout.file('tests/filesAndFolders').isPresent()
      })
    })

    expect(results.getFailures()).to.eql([
      "The file 'tests/filesAndFolders' exists but it's a folder"
    ])
  })
})

describe('when checking out if a file has contents', () => {
  it('does not report a failure if it is not empty', () => {
    const results = diagnose((d) => {
      d.topic('Files', (checkout) => {
        checkout.file('tests/filesAndFolders/file.sample').isNotEmpty()
      })
    })

    expect(results.getFailures()).to.be.empty
  })

  it('reports a failure if it is missing', () => {
    const results = diagnose((d) => {
      d.topic('Files', (checkout) => {
        checkout.file('tests/filesAndFolders/missing.sample').isNotEmpty()
      })
    })

    expect(results.getFailures()).to.eql([
      "The file 'tests/filesAndFolders/missing.sample' does not exist"
    ])
  })

  it('reports a failure if it is a folder', () => {
    const results = diagnose((d) => {
      d.topic('Files', (checkout) => {
        checkout.file('tests/filesAndFolders').isNotEmpty()
      })
    })

    expect(results.getFailures()).to.eql([
      "The file 'tests/filesAndFolders' exists but it's a folder"
    ])
  })

  it('reports a failure if it is empty', () => {
    const results = diagnose((d) => {
      d.topic('Files', (checkout) => {
        checkout.file('tests/filesAndFolders/empty.sample').isNotEmpty()
      })
    })

    expect(results.getFailures()).to.eql([
      "The file 'tests/filesAndFolders/empty.sample' exists but it's empty"
    ])
  })
})

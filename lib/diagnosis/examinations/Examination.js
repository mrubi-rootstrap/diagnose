class Examination {
  constructor (results) {
    this.results = results
  }

  getFailuresCount () {
    return this.results.getFailuresCount()
  }

  addFailure (message) {
    this.results.addFailure(message)
  }

  checkout({examinations, ifNoFailures}) {
    const failuresCount = this.getFailuresCount()
    Reflect.apply(examinations, this, [])
    if (this.results.getFailuresCount() === failuresCount) {
      Reflect.apply(ifNoFailures, this, [])
    }
  }
}

module.exports = Examination

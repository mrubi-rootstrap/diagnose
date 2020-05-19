class Examination {
  constructor (results) {
    this.results = results
  }

  addFailure (message) {
    this.results.addFailure(message)
  }
}

module.exports = Examination

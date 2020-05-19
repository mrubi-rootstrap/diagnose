class DiagnoseResult {
  constructor () {
    this.failures = []
  }

  getFailures () {
    return this.failures
  }

  getFailuresCount() {
    return this.failures.length
  }

  addFailure (message) {
    this.failures.push(message)
  }
}

module.exports = DiagnoseResult

class DiagnoseResult {
  constructor () {
    this.failures = []
  }

  getFailures () {
    return this.failures
  }

  addFailure (message) {
    this.failures.push(message)
  }
}

module.exports = DiagnoseResult

const { execSync } = require('child_process')

function evaluateCommandLine ({
  commandLine,
  timeout,
  onZeroExitCode: successHandler,
  onNonZeroExitCode: errorHandler
}) {
  try {
    const output = execSync(
      commandLine,
      { timeout: timeout }
    )

    const outputString = output.toString()
    if (successHandler) { return successHandler(outputString) } else {
      return outputString
    }
  } catch (e) {
    const outputString = e.stdout.toString()

    if (errorHandler) { return errorHandler(outputString) } else {
      return outputString
    }
  }
}

function errorMessage ({ commandLine, fixCommandLine, issuesCount }) {
  return `The code was expected to comply with coding style standards but ${issuesCount} issues were found.
Generate a report with
${commandLine}
for more details.

Fix the errors with
${fixCommandLine}`
}

module.exports = {
  evaluateCommandLine,
  errorMessage
}

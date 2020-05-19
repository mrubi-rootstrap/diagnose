const fs = require('fs')
const Examination = require('./Examination')

class FileExamination extends Examination {
  constructor ({ filePath, results }) {
    super(results)
    this.filePath = filePath
  }

  isPresent () {
    if (!fs.existsSync(this.filePath)) {
      this.addFailure(`The file '${this.filePath}' does not exist`)
      return
    }
    if (fs.statSync(this.filePath).isDirectory()) {
      this.addFailure(`The file '${this.filePath}' exists but it's a folder`)
    }
  }

  isNotEmpty () {
    this.checkout({
      examinations: () => {
        this.isPresent()
      },
      ifNoFailures: () => {
        if (fs.statSync(this.filePath).size === 0) {
          this.addFailure(`The file '${this.filePath}' exists but it's empty`)
        }
      }
    })
  }
}

module.exports = FileExamination

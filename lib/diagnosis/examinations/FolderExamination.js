const fs = require('fs')
const Examination = require('./Examination')

class FolderExamination extends Examination {
  constructor ({ folderPath, results }) {
    super(results)
    this.folderPath = folderPath
  }

  isPresent () {
    if (!fs.existsSync(this.folderPath)) {
      this.addFailure(`The folder '${this.folderPath}' does not exist`)
      return
    }
    if (fs.statSync(this.folderPath).isFile()) {
      this.addFailure(`The folder '${this.folderPath}' exists but it's a file`)
    }
  }
}

module.exports = FolderExamination

const DiagnoseResult = require('./DiagnoseResult')
const EnvironmentVariableExamination = require('./examinations/EnvironmentVariableExamination')
const FileExamination = require('./examinations/FileExamination')
const FolderExamination = require('./examinations/FolderExamination')

class Diagnose {
  constructor () {
    this.results = new DiagnoseResult()
  }

  topic (description, topicBlock) {
    Reflect.apply(topicBlock, this, [this])
  }

  environmentVariable (environmentVariableName) {
    return new EnvironmentVariableExamination({ environmentVariableName, results: this.results })
  }

  file (filePath) {
    return new FileExamination({ filePath, results: this.results })
  }

  folder (folderPath) {
    return new FolderExamination({ folderPath, results: this.results })
  }

  getResults () {
    return this.results
  }
}

module.exports = Diagnose

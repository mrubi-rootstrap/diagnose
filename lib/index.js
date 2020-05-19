const Diagnose = require('./diagnosis/Diagnose')

function diagnose (diagnoseBlock) {
  const diagnose = new Diagnose()
  Reflect.apply(diagnoseBlock, diagnose, [diagnose])
  return diagnose.getResults()
}

module.exports = { diagnose, Diagnose }

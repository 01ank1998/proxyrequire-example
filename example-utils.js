var fs = require('fs')

module.exports.listModuleAndTests = function (module, tests) {
  console.log(
    '\n**********\n' +
    '* Module:*\n' +
    '**********\n\n' +
    fs.readFileSync('./simple/foo.js').toString()
  )

  console.log(
    '**********\n' +
    '* Tests: *\n' +
    '**********\n' +
    fs.readFileSync(tests).toString()
  )
}
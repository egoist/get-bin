'use strict'
const Path = require('path')
const readPkg = require('read-pkg-up')

function handleBin(pkg) {
  if (typeof pkg.bin === 'string') {
    return [pkg.name]
  } else if (typeof pkg.bin === 'object') {
    return Object.keys(pkg.bin)
  }
  return null
}

module.exports = function (options) {
  options = options || {}
  const cwd = options.cwd || Path.dirname(module.parent.filename)
  return readPkg({cwd})
    .then(res => res.pkg)
    .then(res => handleBin(res))
}

module.exports.sync = function (options) {
  options = options || {}
  const cwd = options.cwd || Path.dirname(module.parent.filename)
  const pkg = readPkg.sync({cwd}).pkg
  return handleBin(pkg)
}

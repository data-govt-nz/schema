'use strict'
const jsonpath = require('jsonpath')
const jsonResultToCsvRow = require('./lib/jsonResultToCsvRow')

module.exports = {
  convert: mapObjects
}

function mapObjects (jsonInput) {
  const results = jsonpath.query(jsonInput, '$.result.results.*')
  const mappedResults = results.map(jsonResultToCsvRow.map)
  return mappedResults
}

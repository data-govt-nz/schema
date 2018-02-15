'use strict'
const jsonpath = require('jsonpath')
const fetch = require('node-fetch')
const jsonResultToCsvRow = require('./lib/jsonResultToCsvRow')
const url = 'https://catalogue.data.govt.nz/api/action/package_search?fq=organization:ministry-of-health'
const fs = require('fs')

module.exports = {
  convert: mapObjects
}

function mapObjects (jsonInput) {
  const results = jsonpath.query(jsonInput, '$.result.results.*')
  const mappedResults = results.map(jsonResultToCsvRow.map)
  return mappedResults
}

async function convertOnlineReport () {
  const response = await fetch(url)
  const data = await response.json()

  const mappedObjects = mapObjects(data)
  const stringifiedMappedObjects = JSON.stringify(mappedObjects)
  fs.writeFileSync('./output.csv', stringifiedMappedObjects)
}

convertOnlineReport()

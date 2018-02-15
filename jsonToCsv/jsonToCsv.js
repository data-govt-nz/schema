'use strict'
const jsonpath = require('jsonpath')
const fetch = require('node-fetch')
const json2csv = require('json2csv')
const flatten = require('lodash.flatten')
const uniq = require('lodash.uniq')
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
  const body = await response.json()

  const data = mapObjects(body)
  const fields = getHeaderFieldNames(data)
  const csv = json2csv({data, fields})
  fs.writeFileSync('./output.csv', csv)
  console.log('Finished, written to file.')
}

function getHeaderFieldNames (data) {
  const nestedFields = data.map(obj => Object.keys(obj))
  const flattenedFields = flatten(nestedFields)
  const uniqueFields = uniq(flattenedFields)
  return uniqueFields
}

convertOnlineReport()

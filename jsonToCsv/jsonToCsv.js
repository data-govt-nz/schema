'use strict'
const jsonpath = require('jsonpath')
const fetch = require('node-fetch')
const json2csv = require('json2csv')
const flatten = require('lodash.flatten')
const uniq = require('lodash.uniq')
const fs = require('fs')
const program = require('commander')
const jsonResultToCsvRow = require('./lib/jsonResultToCsvRow')

program
  .version('0.1.0')
  .description('Tool for downloading an agency\'s existing data from data.govt in a format they can use to re-submit it via the schema tool.')
  .option('-a, --agency [agency]', 'CKAN agency identifier, eg: ministry-of-health')
  .option('-f, --file [fileName]', 'CSV filename to write to, eg: output.csv, defaults to: <agency-identifer>.csv')
  .option('-u, --url [url]', 'ckan url, eg: https://catalogue.data.govt.nz, defaults to: https://catalogue.data.govt.nz')
  .parse(process.argv)

const agencyIdentifier = program.agency

if (!agencyIdentifier) {
  console.error('--agency CKAN agency identifier, eg: ministry-of-health, is a required parameter. try `node jsonToCsv.js --agency ministry-of-health`')
  process.exit()
}
const host = program.url || 'https://catalogue.data.govt.nz'
const url = `${host}/api/action/package_search?fq=organization:${agencyIdentifier}&rows=1000`
const fileName = program.file || agencyIdentifier + '.csv'

convertOnlineReport()

async function convertOnlineReport () {
  const response = await fetch(url)
  const body = await response.json()

  const data = mapObjects(body)
  const fields = getHeaderFieldNames(data)
  const csv = json2csv({data, fields})
  fs.writeFileSync(`./${fileName}`, csv)
  console.log('Finished, written to file.')
}

function mapObjects (jsonInput) {
  const results = jsonpath.query(jsonInput, '$.result.results.*')
  const mappedResults = results.map(jsonResultToCsvRow.map)
  return mappedResults
}

function getHeaderFieldNames (data) {
  const nestedFields = data.map(obj => Object.keys(obj))
  const flattenedFields = flatten(nestedFields)
  const uniqueFields = uniq(flattenedFields)
  return uniqueFields
}

module.exports = {
  convert: mapObjects
}

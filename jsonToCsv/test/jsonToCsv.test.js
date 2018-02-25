'use strict'
/* global test, expect */
const jsonToCsv = require('../jsonToCsv')
const input = require('./fixtures/input.json')
// Given a minimal json object I have all the fields I expect a valid csv file
// const output = fs.readFileSync('./output.csv', {encoding: 'utf8'})

test('It maps input to a valid output object', () => {
  const mappedInput = require('./fixtures/mappedObject.json')
  const calculatedOutput = jsonToCsv.convert(input)
  expect(calculatedOutput).toMatchObject(mappedInput)
})

// Given a json object where all fields are null or missing, I expect a blank csv

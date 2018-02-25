'use strict'
const jsonpath = require('jsonpath')
const mergeObjects = Object.assign

module.exports = {
  map: mapObject
}

function mapObject (jsonInput) {
  let mappedObject = {
    title: jsonInput.title,
    description: jsonInput.notes,
    identifier: jsonInput.url,
    licence: jsonInput.license_url,
    keywords: getKeywords(jsonInput),
    issued: jsonInput.issued,
    modified: jsonInput.modified,
    'publisher.name': jsonInput.author,
    'publisher.mbox': jsonInput.author_email,
    'contactPoint.fn': jsonInput.maintainer,
    'contactPoint.hasPhone': jsonInput.maintainer_phone,
    'contactPoint.hasEmail': jsonInput.maintainer_email,
    landingPage: jsonInput.url,
    updateFrequency: jsonInput.frequency_of_update,
    theme: jsonInput.theme,
    temporal: jsonInput.temporal,
    spatial: jsonInput.spatial
  }
  const distributions = getDistributions(jsonInput)
  mergeObjects(mappedObject, distributions)
  return mappedObject
}

function getKeywords (jsonInput) {
  const tags = jsonpath.query(jsonInput, '$.tags.*.display_name')
  const keywords = tags.join(', ')
  return keywords
}

function getDistributions (jsonInput) {
  const distributions = jsonpath.query(jsonInput, '$.resources.*')
  const mappedDistributions = distributions.map((val, i) => mapDistribution(val, i))
  const result = {}
  mappedDistributions.forEach(distribution => {
    mergeObjects(result, distribution)
  })
  return result
}

function mapDistribution (distribution, i) {
  return {
    [`distribution.${i}.downloadURL`]: distribution.url,
    [`distribution.${i}.format`]: distribution.format,
    [`distribution.${i}.size`]: distribution.size,
    [`distribution.${i}.title`]: distribution.name
  }
}

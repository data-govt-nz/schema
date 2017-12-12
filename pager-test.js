var express = require('express');
var heredoc = require('heredoc')

var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

var datajson = heredoc(function () {/*
	{
		"@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
		"@type": "dcat:Catalog",
		"conformsTo": "https://project-open-data.cio.gov/v1.1/schema",
		"describedBy": "https://project-open-data.cio.gov/v1.1/schema/catalog.json",
		"dataset": [{
				"@type": "dcat:Dataset",
				"identifier": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1",
				"title": "Overdimension Route",
				"description": "View of carriageway sections from RAMM tagged as overweight or overdimension routes.",
				"keyword": [
					"Overweight",
					" Overdimension",
					" Roading",
					" Routes"
				],
				"issued": "2017-01-26T00:23:18.000Z",
				"modified": "2017-01-26T02:01:29.452Z",
				"publisher": {
					"name": "Auckland Transport"
				},
				"contactPoint": {
					"@type": "vcard:Contact",
					"fn": "Amit Kokje",
					"hasEmail": "mailto:"
				},
				"accessLevel": "public",
				"distribution": [{
						"@type": "dcat:Distribution",
						"title": "ArcGIS Open Dataset",
						"format": "Web page",
						"mediaType": "text/html",
						"accessURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1"
					},
					{
						"@type": "dcat:Distribution",
						"title": "Esri Rest API",
						"format": "Esri REST",
						"mediaType": "application/json",
						"accessURL": "https://services2.arcgis.com/JkPEgZJGxhSjYOo0/arcgis/rest/services/OWODRoutes/FeatureServer/1"
					},
					{
						"@type": "dcat:Distribution",
						"title": "GeoJSON",
						"format": "GeoJSON",
						"mediaType": "application/vnd.geo+json",
						"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1.geojson"
					},
					{
						"@type": "dcat:Distribution",
						"title": "CSV",
						"format": "CSV",
						"mediaType": "text/csv",
						"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1.csv"
					},
					{
						"@type": "dcat:Distribution",
						"title": "KML",
						"format": "KML",
						"mediaType": "application/vnd.google-earth.kml+xml",
						"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1.kml"
					},
					{
						"@type": "dcat:Distribution",
						"title": "Shapefile",
						"format": "ZIP",
						"mediaType": "application/zip",
						"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1.zip"
					}
				],
				"landingPage": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1",
				"webService": "https://services2.arcgis.com/JkPEgZJGxhSjYOo0/arcgis/rest/services/OWODRoutes/FeatureServer/1",
				"license": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1/license.json",
				"spatial": "174.46159376196258,-37.270067884205595,175.15631462113478,-36.52585228703896",
				"theme": [
					"geospatial"
				]
			},
			{
				"@type": "dcat:Dataset",
				"identifier": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0",
				"title": "Overweight Route",
				"description": "View of carriageway sections from RAMM tagged as overweight or overdimension routes.",
				"keyword": [
					"Overweight",
					" Overdimension",
					" Roading",
					" Routes"
				],
				"issued": "2017-01-26T00:23:18.000Z",
				"modified": "2017-01-26T02:00:59.183Z",
				"publisher": {
					"name": "Auckland Transport"
				},
				"contactPoint": {
					"@type": "vcard:Contact",
					"fn": "Amit Kokje",
					"hasEmail": "mailto:"
				},
				"accessLevel": "public",
				"distribution": [{
						"@type": "dcat:Distribution",
						"title": "ArcGIS Open Dataset",
						"format": "Web page",
						"mediaType": "text/html",
						"accessURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0"
					},
					{
						"@type": "dcat:Distribution",
						"title": "Esri Rest API",
						"format": "Esri REST",
						"mediaType": "application/json",
						"accessURL": "https://services2.arcgis.com/JkPEgZJGxhSjYOo0/arcgis/rest/services/OWODRoutes/FeatureServer/0"
					},
					{
						"@type": "dcat:Distribution",
						"title": "GeoJSON",
						"format": "GeoJSON",
						"mediaType": "application/vnd.geo+json",
						"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0.geojson"
					},
					{
						"@type": "dcat:Distribution",
						"title": "CSV",
						"format": "CSV",
						"mediaType": "text/csv",
						"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0.csv"
					},
					{
						"@type": "dcat:Distribution",
						"title": "KML",
						"format": "KML",
						"mediaType": "application/vnd.google-earth.kml+xml",
						"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0.kml"
					},
					{
						"@type": "dcat:Distribution",
						"title": "Shapefile",
						"format": "ZIP",
						"mediaType": "application/zip",
						"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0.zip"
					}
				],
				"landingPage": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0",
				"webService": "https://services2.arcgis.com/JkPEgZJGxhSjYOo0/arcgis/rest/services/OWODRoutes/FeatureServer/0",
				"license": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0/license.json",
				"spatial": "174.46159376196258,-37.270067884205595,175.15631462113478,-36.52585228703896",
				"theme": [
					"geospatial"
				]
			}
		]
	}
    */})

	var page1 = heredoc(function () {/*
			{
				"@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
				"@type": "dcat:Catalog",
				"conformsTo": "https://project-open-data.cio.gov/v1.1/schema",
				"describedBy": "https://project-open-data.cio.gov/v1.1/schema/catalog.json",
				"dataset": [{
						"@type": "dcat:Dataset",
						"identifier": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1",
						"title": "Overdimension Route",
						"description": "View of carriageway sections from RAMM tagged as overweight or overdimension routes.",
						"keyword": [
							"Overweight",
							" Overdimension",
							" Roading",
							" Routes"
						],
						"issued": "2017-01-26T00:23:18.000Z",
						"modified": "2017-01-26T02:01:29.452Z",
						"publisher": {
							"name": "Auckland Transport"
						},
						"contactPoint": {
							"@type": "vcard:Contact",
							"fn": "Amit Kokje",
							"hasEmail": "mailto:"
						},
						"accessLevel": "public",
						"distribution": [{
								"@type": "dcat:Distribution",
								"title": "ArcGIS Open Dataset",
								"format": "Web page",
								"mediaType": "text/html",
								"accessURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1"
							},
							{
								"@type": "dcat:Distribution",
								"title": "Esri Rest API",
								"format": "Esri REST",
								"mediaType": "application/json",
								"accessURL": "https://services2.arcgis.com/JkPEgZJGxhSjYOo0/arcgis/rest/services/OWODRoutes/FeatureServer/1"
							},
							{
								"@type": "dcat:Distribution",
								"title": "GeoJSON",
								"format": "GeoJSON",
								"mediaType": "application/vnd.geo+json",
								"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1.geojson"
							},
							{
								"@type": "dcat:Distribution",
								"title": "CSV",
								"format": "CSV",
								"mediaType": "text/csv",
								"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1.csv"
							},
							{
								"@type": "dcat:Distribution",
								"title": "KML",
								"format": "KML",
								"mediaType": "application/vnd.google-earth.kml+xml",
								"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1.kml"
							},
							{
								"@type": "dcat:Distribution",
								"title": "Shapefile",
								"format": "ZIP",
								"mediaType": "application/zip",
								"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1.zip"
							}
						],
						"landingPage": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1",
						"webService": "https://services2.arcgis.com/JkPEgZJGxhSjYOo0/arcgis/rest/services/OWODRoutes/FeatureServer/1",
						"license": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_1/license.json",
						"spatial": "174.46159376196258,-37.270067884205595,175.15631462113478,-36.52585228703896",
						"theme": [
							"geospatial"
						]
					}
				]
			}
		    */})

				var page2 = heredoc(function () {/*
					{
						"@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
						"@type": "dcat:Catalog",
						"conformsTo": "https://project-open-data.cio.gov/v1.1/schema",
						"describedBy": "https://project-open-data.cio.gov/v1.1/schema/catalog.json",
						"dataset": [{
								"@type": "dcat:Dataset",
								"identifier": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0",
								"title": "Overweight Route",
								"description": "View of carriageway sections from RAMM tagged as overweight or overdimension routes.",
								"keyword": [
									"Overweight",
									" Overdimension",
									" Roading",
									" Routes"
								],
								"issued": "2017-01-26T00:23:18.000Z",
								"modified": "2017-01-26T02:00:59.183Z",
								"publisher": {
									"name": "Auckland Transport"
								},
								"contactPoint": {
									"@type": "vcard:Contact",
									"fn": "Amit Kokje",
									"hasEmail": "mailto:"
								},
								"accessLevel": "public",
								"distribution": [{
										"@type": "dcat:Distribution",
										"title": "ArcGIS Open Dataset",
										"format": "Web page",
										"mediaType": "text/html",
										"accessURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0"
									},
									{
										"@type": "dcat:Distribution",
										"title": "Esri Rest API",
										"format": "Esri REST",
										"mediaType": "application/json",
										"accessURL": "https://services2.arcgis.com/JkPEgZJGxhSjYOo0/arcgis/rest/services/OWODRoutes/FeatureServer/0"
									},
									{
										"@type": "dcat:Distribution",
										"title": "GeoJSON",
										"format": "GeoJSON",
										"mediaType": "application/vnd.geo+json",
										"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0.geojson"
									},
									{
										"@type": "dcat:Distribution",
										"title": "CSV",
										"format": "CSV",
										"mediaType": "text/csv",
										"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0.csv"
									},
									{
										"@type": "dcat:Distribution",
										"title": "KML",
										"format": "KML",
										"mediaType": "application/vnd.google-earth.kml+xml",
										"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0.kml"
									},
									{
										"@type": "dcat:Distribution",
										"title": "Shapefile",
										"format": "ZIP",
										"mediaType": "application/zip",
										"downloadURL": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0.zip"
									}
								],
								"landingPage": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0",
								"webService": "https://services2.arcgis.com/JkPEgZJGxhSjYOo0/arcgis/rest/services/OWODRoutes/FeatureServer/0",
								"license": "http://data-atgis.opendata.arcgis.com/datasets/a9ca449d672d49d0bda71352b5c6fa64_0/license.json",
								"spatial": "174.46159376196258,-37.270067884205595,175.15631462113478,-36.52585228703896",
								"theme": [
									"geospatial"
								]
							}
						]
					}
				    */})


app.get('/', function (req, res) {

	if (req.query.page == '1'){
		res.send(page1);
	} else if (req.query.page == '2') {
		res.send(page2);
	} else {
		res.send(datajson);
	}
});


app.listen(port, function () {
  console.log('Serve up a paginated example data.json');
});

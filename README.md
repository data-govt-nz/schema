# data.govt.nz data.json schema
The data.json metadata schema used to harvest datasets from agencies on data.govt.nz 

Part of moving to the CKAN data portal is improving our adaoption of international standards that aid in interoperability. One of these is the data.json standard that was put together as part of the US Project Open Data initiaive and has since been adopted by many other countries as a consistent way to express stocktakes of open data at an agency level.

The idea here is to replace the current and dated ATOM/RSS feed standard which is no longer fit for purpose. 

The data.json schema:

 - is able to represent individual file level resources for example you might have a csv, kml, shp file of the same data set.
 - is an international standard used by many other government data portals.
 - allows for easy automation of harvesting into the the new CKAN data portal.
 
 ## data.govt.nz data.json schema
 
 ## Dataset

| data.json field | Required? | Example value | Comments |
| --------------- | -------------- | ------------- | -------- |
| title | Yes | "New Zealand Public Sector Websites" | A good descriptive title of your dataset. |
| description | Yes | "List of websites owned and administered by the New Zealand Public Sector. The Department of Internal Affairs acknowledges this list has been compiled to the best of their knowledge, but it is not a complete list of all Public Sector websites. This list will be updated as the Department becomes aware of required updates." | A longer description about the dataset which may include methodology, caveats and other related information to help others use appropriately |
| identifier | Yes |  For example `https://webtoolkit.govt.nz/guidance/domain-names/new-zealand-public-sector-websites/` or `f572a794d5aa323824ccbc72f138fc2233b54ad141a00eba` | A string that identifies the dataset now and in the future, ideally even if the dataset's title changes. If the dataset is already in a data catalogue, supply the URL of the dataset page, or unique catalogue identifier. If it is not catalogued already you can assign it a random hexademical string of 24 digits or more. Ideally the identifier should be globally unique - not just unique to the publisher - so a URI is highly recommended. |
| license | Yes | `https://creativecommons.org/licenses/by/4.0/`| Must be a license URI from those recommended in [NZGOAL](https://www.ict.govt.nz/guidance-and-resources/open-government/new-zealand-government-open-access-and-licensing-nzgoal-framework/) or empty string if not licensed. |
| keyword | Optional | `"keyword": {"websites", "open government", "url"}` | Keywords help to connect related datasets. Each keyword should only include numbers and letters (alphanumeric). |
| issued | Optional | `2011-08-26` | Date that the data was first published. Formats allowed are: 'YYYY-MM-DD', 'YYYY-MM', 'YYYY' or 'YYYY-MM-DDTHH:MM:SS.mmmmmm' (according to ISO8601) |
| modified | Optional | `2015-04-01` | Date that the data was most recently updated. Formats allowed are: 'YYYY-MM-DD', 'YYYY-MM', 'YYYY' or 'YYYY-MM-DDTHH:MM:SS.mmmmmm' (according to ISO8601) |
| publisher | Yes | `"publisher": {"@type": "org:Organization", "name": "Department of Internal Affairs"},` | Organization schema. See [https://schema.org/Organization](https://schema.org/Organization). `name` and `email` are common values to provide. |
| contactPoint | Yes |`"contactPoint": {"@type": "vcard:Contact","fn": "Jane Doe","hasEmail": "mailto:jane.doe@agency.gov", "hasPhone": "1234567890"}`|Contact for the specific dataset in vCard format including full name (`fn`), email(`hasEmail`) and optionally, phone (`hasPhone`) of the contact person.|
| distribution | Yes | See "Distribution" table below. | Location for accessing/downloading the data files or accessing APIs. |
| landingPage | No | `https://webtoolkit.govt.nz/guidance/domain-names/new-zealand-public-sector-websites/` | URL of a web page specifically about the dataset and includes links to data files and supplimentary information about the dataset. |
| references | No | `["https://webtoolkit.govt.nz/guidance/domain-names/new-zealand-public-sector-websites/"]` <br> OR in data.json you can specify more than one reference like a distribution e.g. <br> `[{"url": "", "title": "", "format": ""},{"url": "", "title": "", "format": ""},]`. Useful for providing links to data dictionaries and vocabularies.| URL of a web page, PDF or other documentation that gives more information about the dataset. Note: Use landingPage instead for a resource URL if that is more appropriate. Should be an array, to allow multiple references to be specified. |
| language | No | `["en"]` | Language of the data in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format. Should be an array of values `["en", "mi", ...]`.|
| accrualPeriodicity | No | `R/P1Y` (=annual) <br> `R/P1W` (=weekly) | The frequency at which dataset is published. Format: ISO 8601 Repeating Duration (or `irregular`) See: <https://project-open-data.cio.gov/iso8601_guidance/#accrualperiodicity> |
| temporal | No | `2000-01-15/2000-01-20` `2010-01/2010-03` `2010/2010` | The date period that the data applies to. Formatted as two ISO 8601 dates (or datetimes) separated by a slash. If the period in question is a whole year or whole month, just put the same value for start and finish - eg `2010/2010` or `2010-06/2010-06`. |
| spatial |  No | `{\"type\":\"Polygon\",\"coordinates\":[[[2.072, 49.943],[2.072, 55.816], [-6.236, 55.816], [-6.236, 49.943], [2.072, 49.943]]]}` | The geographic location that the data applies to. Formatted as a GeoJSON point, bounding box or polygon. |
| theme | No | `"theme": "Fiscal, tax and economics",` or `"theme": ["Fiscal, tax and economics", "Health"],`| The main group(s) in data.govt.nz you would like to classify your dataset under to improve discoverability. Can be a single group or list. See [https://catalogue.data.govt.nz/group](https://catalogue.data.govt.nz/group)|

## Distribution

These are for direct links to downloadable **data** files or access points for APIs etc.

| data.json field | Required? | Example value | Comments |
| --------------- | -------------- | ------------- | -------- |
| downloadURL | Yes, or accessURL (see below) | `https://webtoolkit.govt.nz/files/PublicSectorWebsites01April2015.csv` | The direct URL that downloads a file with the data |
| accessURL | No, unless no dowloadURL | `https://webtoolkit.govt.nz/guidance/domain-names/new-zealand-public-sector-websites/`| If there is not a `downloadURL` to a downloadable file then specify the `accessURL`. This is the URL of an API or other non-downloadable data location.|
| title | Yes | `Exposure to second hand smoke` | A descriptive title of the data resource. 50 - 70 characters preferred (CKAN concatenates long title strings).|
| description | No | 'A study from 2015 on the effects of exposure to second hand smoke ...' | If you need to describe a particular data file further you can supply a description. 100 - 200 characters preferred. |
| format | No | `text/csv` or `csv` | Mime-types or file extensions. |

## data.json file structure

The data.json file should be structured as an array "[ ... ]" of dataset objects "{ ... }".

```
e.g.

    [
     {"title": "Chief Executive Expenses",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "publisher": {"name": "Publisher Agency", "mbox": "test@test.com"},
      "distribution": [
        {
          "downloadURL": "https://agency.govt.nz/link/to/ce_expenses_2016.csv",
          "title": "Chief Executive Expenses for 2016",
          "format": "csv"
        },
        {
          "downloadURL": "https://agency.govt.nz/link/to/ce_expenses_2015.csv",
          "title": "Chief Executive Expenses for 2015",
          "format": "csv"
        },
        ]
     },
     {"title": "Roadworks locations",
       ...
     }
    ]
```

## Character encoding

The data.json file should have ASCII or UTF-8 character encoding (as per the JSON standard). The harvester now detects this and gives an error if it is not acceptable.

## Comparison with USA data.json schema

The NZ data.json format is based on both the [Data.gov.uk data.json](http://guidance.data.gov.uk/dcat_fields.html) and the [Project Open Data data.json schema](https://project-open-data.cio.gov/v1.1/schema/) used by the U.S. Federal Government. Both are derivatives of the [DCAT (data catalog vocabulary)](https://www.w3.org/TR/vocab-dcat/) schema standard.

There are a few conscious differences that are listed here for reference:

| Field | Change | Explanation |
| ----- | ------ | ----------- |
| bureauCode, programCode, primaryITInvestmentUII, systemOfRecords, dataQuality | not required | They are codes specific to US Federal Government |
| spatial | Formatted with GeoJSON | GeoJSON is analagous to GML but preferred. Place name strings are not preferred as they can be ambiguous. |
| theme | The values known group values from data.govt.nz CKAN portal, rather than simply strings. | Data.govt.nz has a group taxonomy. Strings related to the data's specific topics can go in the keywords field. |

 ## Validating your json feed
 TODO
 
 
 ## comparing the ATOM and json schema
 TODO
 
 
 

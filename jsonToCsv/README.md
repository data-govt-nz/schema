# Convert a data.json to CSV

This module is intended to help new organizations onboard with automation by using their exsisting [data.govt](https://data.govt.nz) catalogue to populate a CSV.

Once you have the csv you can update your data.json file by using the CLI/Web interface of the CSV to DCAT converter.


## How to use this tool

**requirements**
node `8.9.4` and npm `5.6.0`

**Usage**

1. clone the repo, cd into the repo.
2. install the modules in this directory `npm install`.
3. run the script (exporting the ministry of health organization) `node jsonToCsv.js -a ministry-of-health`.

**Options**

```
  Usage: jsonToCsv [options]

  Tool for downloading an agency's existing data from data.govt in a format they can use to re-submit it via the schema tool.


  Options:

    -V, --version          output the version number
    -a, --agency [agency]  CKAN agency identifier, eg: ministry-of-health
    -f, --file [fileName]  CSV filename to write to, eg: output.csv, defaults to: <agency-identifer>.csv
    -r, --row [count]      Number of records to be download, defaults to: 1000
    -u, --url [url]        ckan url, eg: https://catalogue.data.govt.nz, defaults to: https://catalogue.data.govt.nz
    -h, --help             output usage information
```

**Tests**
We have tests.
```
./node_modules/.bin/jest
```

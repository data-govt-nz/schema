// Small node conversion app to convert CSV open data stocktakes and convert to data.json harvestable endpoints

//use the csvtojson parser as it is nice and fast https://www.npmjs.com/package/csvtojson
const csv = require('csvtojson')
const fs = require('fs');

//get arguments and flags set
// --file path to csv file
// --id id of the data.json (usually the agency website + /data.json)

var file;
if(process.argv.indexOf("--file") != -1){ //does our flag exist?
    file = process.argv[process.argv.indexOf("--file") + 1]; //grab the next item
} else {
  console.log('Please add a --file');
  process.exit(1);
}

var url;
if(process.argv.indexOf("--url") != -1){ //does our flag exist?
    url = process.argv[process.argv.indexOf("--url") + 1]; //grab the next item
} else {
  console.log('Please add a --url');
  process.exit(1);
}

var output;
if(process.argv.indexOf("--output") != -1){ //does our flag exist?
    output = process.argv[process.argv.indexOf("--output") + 1]; //grab the next item
} else {
  console.log('Please add a --output');
  process.exit(1);
}


const converter = csv({
  ignoreEmpty: true,
  colParser: {
    'keywords': function (item, head, resultRow, row, colIdx){
       resultRow['keyword']=item.toLowerCase().replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"").split(/\s*[,]\s*/);
    },
    'updateFrequency': function (item, head, resultRow, row , colIdx){
      //See https://project-open-data.cio.gov/iso8601_guidance#accrualperiodicity
      switch (item) {
        case 'Annual':
        case 'Annually':
            resultRow['accrualPeriodicity']='R/P1Y'
          break;
        case '6-Monthly':
            resultRow['accrualPeriodicity']='R/P6M'
          break;
        case 'Quarterly':
            resultRow['accrualPeriodicity']='R/P3M'
          break;
        case 'Monthly':
            resultRow['accrualPeriodicity']='R/P1M'
          break;
        case 'Weekly':
            resultRow['accrualPeriodicity']='R/P1W'
          break;
        case 'Daily':
            resultRow['accrualPeriodicity']='R/P1D'
          break;
        default:
            resultRow['accrualPeriodicity']='irregular'
      }
    },
    'issued': function (item, head, resultRow, row, colIdx){
         return item.split("/").reverse().join("-");
    },
    'modified': function (item, head, resultRow, row, colIdx){
         return item.split("/").reverse().join("-");
    },
    'licence': function (item, head, resultRow, row, colIdx){
         resultRow['license']=item
    }
  }
})
.fromFile(file, function(err,result){
    // if an error has occured then handle it
    if(err){
        console.log("An Error Has Occured");
        console.log(err);
    }
    // create a variable called json and store
    // the result of the conversion
    var dataset = JSON.stringify(result,null,4);
    var catalog =
`{
  "@context": "https://www.data.govt.nz/catalog.jsonld",
	"@id": "${url}/data.json",
	"@type": "dcat:Catalog",
	"conformsTo": "https://www.data.govt.nz/toolkit/schema",
  "dataset":`;

    fs.writeFile(output + "data.json", catalog + dataset + '}', 'utf8', function (err) {
      if (err) {
          return console.log(err);
      }
      console.log("data.json generated.");

    });

});

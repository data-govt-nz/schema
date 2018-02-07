// Small node conversion app to convert CSV open data stocktakes and convert to data.json harvestable endpoints

//use the csvtojson parser as it is nice and fast https://www.npmjs.com/package/csvtojson
const fs = require('fs');
const converter = require('./convert_logic');

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


const inputCSV = fs.readFileSync(file, 'utf8');
converter.convert(inputCSV, url)
  .then(data => {
    fs.writeFile(output + "data.json", data, 'utf8', function (err) {
      if (err) {
          return console.log(err);
      }
      console.log("data.json generated.");
    });
  });

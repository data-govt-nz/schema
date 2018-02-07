const csv = require('csvtojson')
const fs = require('fs');

module.exports = {}

/**
 * Take the csv content and convert it to a 
 * @return Promise<string> dcatJson content
 */
module.exports.convert = (csvContent, sourceURL) => {

  return new Promise((resolve, reject) => {
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
    .fromString(csvContent, (err, result) => {
        // if an error has occured then handle it
        if(err){
          console.error('Fatal error from csv parse lib', err);
          return reject(err)
        }
        // create a variable called json and store
        // the result of the conversion
        var dataset = JSON.stringify(result,null,4);
        var catalog =
    `{
      "@context": "https://www.data.govt.nz/catalog.jsonld",
      "@id": "${sourceURL}/data.json",
      "@type": "dcat:Catalog",
      "conformsTo": "https://www.data.govt.nz/toolkit/schema",
      "dataset":`;
        const allContent = catalog + dataset + '}';
        resolve(allContent);
    });
  });
}
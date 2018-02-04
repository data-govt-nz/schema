const express = require('express')
const fs = require('fs')
const app = express()
const multer = require('multer')
const bodyParser = require('body-parser');
const csvToDcat = require('./convert_logic');

const upload = multer({storage: multer.memoryStorage()})

/**
 * Global state of the service, lists all the dcats in memory
 */
const GLOBAL_DATA = {};

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  fs.readFile('./static/index.html', (err, data) => {
    if (err !== null) {
      res.status(500).send(err)
    } else {
      res.header().set('Content-Type', 'text/html')
      res.send(data)
    }
  })
})

app.post('/submit', upload.single('csv_file'), (req, res) => {
  console.log('got a request to create a dcat api endpoint', req.file, req.boy)

  // TODO store and redirect
  csvToDcat.convert(req.file.buffer.toString(), req.body['source_url'])
    .then(dat => {
      const newEndpointId = fakeID()
      const newEndpoint = {
        sourceUrl: req.body['source_url'],
        dcat: dat
      }
      GLOBAL_DATA[newEndpointId] = newEndpoint;
      const newUrl = `/api/${newEndpointId}/data.json`;
      res.redirect(newUrl)
      res.end()
      console.log('created a new api endpoint at ', newUrl);
    })
    .catch(err => {
      console.log('could not convert file', err)
      res.status(500).send(err.toString())
    })
})

app.get('/example.csv', (req, res) => {
  console.log('got a request to download the example csv')
  fs.readFile('./example.csv', (err, data) => {
    if (err !== null) {
      res.status(500).send(err)
      return
    }
    res.header('Content-Type', 'text/csv')
    res.send(data)
  })
})

app.get('/api/:id/data.json', (req, res) => {
  if (!req.params.id) {
    console.error('You must have an id param defined')
    res.status(500).send('you must specifiy an id parameter')
    return
  }
  res.header('Content-Type', 'application/json')
  res.header(`Content-Disposition`, `attachment; filename="data.json"`)
  res.header('Content-Transfer-Encoding', 'binary')
  res.status(200);
  res.send(GLOBAL_DATA[req.params.id].dcat)
})

app.use('/static', express.static('static'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))

/**
 * A simple utillity function for generating an (fake) GUID-4
 */
function fakeID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0,
          v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}
const http = require('http');
const express = require('express');

const app = express();

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }))

app.get('/',  (request, response) => {
  const api_url = "http://127.0.0.1:8000/"
  const api_response = http.get(api_url, res => {

    let rawData = ''

    res.on('data', chunk => {
        rawData += chunk
    })

    res.on('end', () => {
    const parsedData = JSON.parse(rawData)
    console.log(parsedData)
    })

})
});
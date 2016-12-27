const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()

app.use('/assets', express.static(path.join(__dirname, 'build/assets')))

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'build/index.html'))
})

app.listen(port)

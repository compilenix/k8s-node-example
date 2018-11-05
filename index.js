const http = require('http')
require('json-circular-stringify')

function handleRequest (request, response) {
  console.log('Received request for URL: ' + request.url)
  response.writeHead(200)
  response.end(`ENV: \n${JSON.stringify(process.env, null, 2)}\n\n\nRequest Object:\n${JSON.stringify(request, null, 2)}\n`)
}

const httpServer = http.createServer(handleRequest)
httpServer.listen(8080)

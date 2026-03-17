const http = require('http');
const fs = require('fs');
const users = []

// http://localhost:5500/index.js;
http.createServer(handleRequest).listen(5500);

async function handleRequest(request, response) {
  const url = request.url
  
  if (!url.startsWith("/api/")) {
    try {
      if (url.endsWith('.css')) {
        response.setHeader('Content-Type', 'text/css');
      }
      response.end(fs.readFileSync(__dirname + "/public" + url));
    } catch {
      response.writeHead(404).end('not found');
    }
  } else {
    const data = await getBody(request)
    
    users.push(data)
    saveUsers()
    
    response.end("ok")
  }
}

async function getBody(request) {
  let body = ""

  for await (const chunk of request) body += chunk

  try {
    return JSON.parse(body)
  } catch {
    return body
  }
}

function saveUsers() {
  const json = JSON.stringify(users)
  
  fs.writeFileSync("data.json", json)
}
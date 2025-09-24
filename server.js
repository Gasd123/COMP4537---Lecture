const http = require('http')

http.createServer(function (req, res) {
    console.log('The server received a request')
    res.writeHead(200, {"Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*"
    });
    res.end("Hello <b> HIIIIIIIIIIIIIIIIIIIIIII </b>");
}).listen(8000);

console.log('Server is running and listening...');
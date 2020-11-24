var http = require('http')
var url = require('url')


function serverStart(urlRoute) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request received for " + pathname + ".");

    urlRoute(pathname, request, response);

    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started." );
}

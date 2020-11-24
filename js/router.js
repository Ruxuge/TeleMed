function urlRoute(pathname, req, res) {
  console.log(pathname)
  switch(pathname) {
    case '/index':
      console.log("Request for path '/'");
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write("In Index!");
      break;
    case '/about':
      console.log("Request for path '/start'");
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write("In Start!");
      break;
    case '/SingIn':
      console.log("Request for path '/foo'");
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write("In Foo!");
      break;
    default: // Default code IS working
      console.log("404");
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("Default 404");
  }
}

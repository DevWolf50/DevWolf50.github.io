function home(request,response) {
  if(request.url === "/") {
  response.writeHead(200,{"Content-type":"text/plain"});
  response.end("Hello\n");
  }
}

function user (request, response) {
  if(request.url.length > 0) {
    var username = request.url.replace("/","");
    response.writeHead(200,{"Content-type":"text/plain"});
    response.end(username);
  }
}






module.exports.home= home;
module.exports.user = user;

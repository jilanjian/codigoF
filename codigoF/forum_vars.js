var http = require ("http"),
    fs = require ("fs"),
    parser = require ("./params_parser.js"),
    render = require ("./render_view.js");

var p = parser.parse;
var render = parser.render;




http.createServer(function (req, res){
    
if (req.url.indexOf("favicon.ico") > 0){ return;}

    fs.readFile("./index.html", function (err, html){
        
        var html_string = html.toString();
        var parametros = p (req);
        var html_string = render (html_string, parametros);
        

                                              
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(render(html_string));
        res.end();
    });
}).listen(8080);


const http = require('http')
const fs = require('fs')
const port = 3000
 
const server = http.createServer(function(req,res) {
    
    res.writeHead(200, {'Content-Type':'text/html'})
    console.log(req.url)
    if(req.url == '/')
    {
        fs.readFile('./view/index.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error: File not found')
            }else{
                res.write(data)
            }
            res.end()
        })    
    }
    else if (req.url == '/art')
    {
        fs.readFile('./view/art.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error: File not found')
            }else{
                res.write(data)
            }
            res.end()
        })
    } 
    else if (req.url == "/img/1.jpg"){
        res.writeHead(200, {"Content-Type": "image/jpeg"});

        fs.readFile("./view/img/1.jpg", function(err, data){
            res.end(data);
        });
    }
    else if (req.url == "/img/2.jpg"){
        res.writeHead(200, {"Content-Type": "image/jpeg"});

        fs.readFile("./view/img/2.jpg", function(err, data){
            res.end(data);
        });
    }
    else if (req.url == "/img/3.jpg"){
        res.writeHead(200, {"Content-Type": "image/jpeg"});

        fs.readFile("./view/img/3.jpg", function(err, data){
            res.end(data);
        });
    }
    else if (req.url == "/img/4.jpg"){
        res.writeHead(200, {"Content-Type": "image/jpeg"});

        fs.readFile("./view/img/4.jpg", function(err, data){
            res.end(data);
        });
    }
   
})

server.listen(port, function(error) {
    if (error) {
        console.log('An error has occured', error)
 
    } else {
        console.log('Server is running on port ' + port)
    }
})
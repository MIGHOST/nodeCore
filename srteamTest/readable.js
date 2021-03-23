const http = require("http");
const fs = require("fs");
const PORT = 3000;

const reqHand = (req, res) => {
    console.log(`URL: ${req.url}`);
    console.log(res); 
    res.writeHead(200, {"Content-Type": 'text/plain'});
    let ReadStream = fs.createReadStream(__dirname + "/1.txt", "utf8");
    ReadStream.pipe(res) 
};

const server = http.createServer(reqHand);
server.listen(PORT, (err)=> {
    if(err) {
        return console.log("Something wrong");
    }

    console.log(`server is listening on ${PORT} port`);
})



const http = require('http');
const cluster = require('cluster');

const PORT = 3000;
const reqHand = (req, res) => {
    console.log(res);
    res.writeHead(200)
    res.end(`<h1> Running </h1>`);
};

const server = http.createServer(reqHand);

if(cluster.isMaster){
    const cpuCount = require ('os').cpus().length;

    for (let i =0; i<cpuCount; i++){
        cluster.fork()
    }

    cluster.on('fork', (worker)=> {
        console.log(`Worker Num${worker.id} is online`);
    });

    cluster.on('listening', (worker, address)=> {
        console.log(
            `Worker Num ${worker.id} is now connected to ${JSON.stringify(address)}`
        );
    });
    cluster.on('disconnect', (worker) => {
        console.log(`The worker Num ${worker.id} has disconnected`);
    });

    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.id} is closed`);
        cluster.fork();
    });

} else {

    server.listen(PORT, (err)=> {
        if(err) {
            return console.log("Something wrong");
        }
    
        console.log(`Server is listening on ${PORT} port`);
    })

}

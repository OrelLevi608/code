const http = require('http');
const app = require('./app');
const port = 7070;
const srv = http.createServer(app);

srv.listen(port, ()=>{
    console.log("Server is running on port 7070. you can start.");
});
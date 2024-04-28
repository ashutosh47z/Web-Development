const http = require('http'); // Required the http module
// Using the createServer function, we can actually create a basic http server using http module
// This function returns a server object, and takes a callback as an argument
// This function created a server object but didn't start the server
const PORT = 3000;
const server = http.createServer(function listener(request,response){
    /* request -> we will be able to see the details of incoming http request -> Object
    response -> we will be able to configure what response we need to send for
    an incoming HTTP request -> Object
    */
    // this callback is a kind of listener function that is going to collect
    // every http request that we will make to our server
    // console.log("Incoming request details",request);
    // console.log("Response Object Details", response);
    if (request.url=='/home'){
        // If we make a request on '/home', if block will be executed  
        console.log(request.method);
        response.write("First Response");
        response.write("Second Response");
        response.write("Third Response");
        response.end("Welcome to home");
        // How can we send an HTML Code or JSON from this setup?
        
    }
    console.log("Request Recieved");
});
server.listen(PORT, function exec(){
    // Once we successfully boot up the server on the given port, this callback will be
    // executed.
    console.log(`Server is up and running on the port: ${PORT}`);
});
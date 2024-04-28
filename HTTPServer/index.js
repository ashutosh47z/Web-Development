const express = require('express');
const PORT = 3000;
const app = express(); // create an express server object
const mylogger =(req,res,next)=>{
    console.log("Logging from Middleware 1"); 
    return res.json({msg:"done" });
    next(); // Calls the next middleware
}
const extlogger =(req,res,next)=>{
    console.log("Logging from Middleware 2"); 
    next();
}
const middleWares = [mylogger,extlogger];
app.get('/home',middleWares,(request,response)=>{
    console.log("Last Middleware");
    response.json({
        message: "OK get"
    });
    // response.send('Hi there, welcome to get');

});
app.post('/home',(request,response)=>{
    response.json({
        message: "OK"
    });
    // response.send('Hi there, welcome to post');

});
app.listen(PORT, ()=>{
    console.log(`App listening on the port ${PORT}`);
});

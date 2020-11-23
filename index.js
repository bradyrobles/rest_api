const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// update express settings
app.use(bodyParser.urlencoded({ extended: false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json


// request - express object
app.get('/', (request, response) =>{
    response.send('hello world this is cool2');
});

app.get('/status', (request, response) =>{
    //set status and payload at the same time
    response.status(200).json({ message: 'ok', status: 200 });
});

app.post('/signup', (request, response, next) => {
    if (Object.keys(request.body).length == 0){
        response.status(400).json({ message: 'invalid body', status: 400 });
    }else{
        response.status(200).json({ message: 'ok', status: 200 });
    }
});

app.post('/login', (request, response) => {
    if (Object.keys(request.body).length == 0){
        response.status(400).json({ message: 'invalid body', status: 400 });
    }else{
        response.status(200).json({ message: 'ok', status: 200 });
    }
});

app.post('/logout', (request, response) => {
    if (Object.keys(request.body).length == 0){
        response.status(400).json({ message: 'invalid body', status: 400 });
    }else{
        response.status(200).json({ message: 'ok', status: 200 });
    }
});

app.post('/token', (request, response) => {
    if (Object.keys(request.body).length == 0 || !request.body.refreshToken){
        response.status(400).json({ message: 'invalid body', status: 400 });
    }else{
        const {refreshToken} = request.body;
        response.status(200).json({ message: `refresh token requested for token: ${refreshToken}`, status: 200 });
    }
    
});

app.post('/forgot-password', (request, response) => {
    if (Object.keys(request.body).length == 0 || !request.body.email){
        response.status(400).json({ message: 'invalid body', status: 400 });
    }else{
        const {email} = request.body;
        response.status(200).json({ message: `forgot password requested for email: ${email}`, status: 200 });
    }
});

app.post('/reset-password', (request, response) => {
    if (Object.keys(request.body).length == 0 || !request.body.email){
        response.status(400).json({ message: 'invalid body', status: 400 });
    }else{
        const {email} = request.body;
        response.status(200).json({ message: `password reset requested for email: ${email}`, status: 200 });
    }
});

// catch all other routes, 'path' param defaults to '/'
// Middleware is executed sequentially, so order is important
app.use((request, response) => {
    response.status(404).json({ message: '404 - Not Found', status: 404});
})

// handle errors, error handlers should be the last middleware 
app.use((error, request, response, next) => {
    console.log(error);
    response.status(error.status || 500).json({ error: error.message, status: 500});
})

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`);
});
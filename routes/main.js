
const express = require('express');
const router = express.Router();

// request - express object
router.get('/', (request, response) =>{
    response.send('hello world this is cool2');
});

router.get('/status', (request, response) =>{
    //set status and payload at the same time
    response.status(200).json({ message: 'ok', status: 200 });
});

router.post('/signup', (request, response, next) => {
    if (Object.keys(request.body).length == 0){
        response.status(400).json({ message: 'invalid body', status: 400 });
    }else{
        response.status(200).json({ message: 'ok', status: 200 });
    }
});

router.post('/login', (request, response) => {
    if (Object.keys(request.body).length == 0){
        response.status(400).json({ message: 'invalid body', status: 400 });
    }else{
        response.status(200).json({ message: 'ok', status: 200 });
    }
});

router.post('/logout', (request, response) => {
    if (Object.keys(request.body).length == 0){
        response.status(400).json({ message: 'invalid body', status: 400 });
    }else{
        response.status(200).json({ message: 'ok', status: 200 });
    }
});

router.post('/token', (request, response) => {
    if (Object.keys(request.body).length == 0 || !request.body.refreshToken){
        response.status(400).json({ message: 'invalid body', status: 400 });
    }else{
        const {refreshToken} = request.body;
        response.status(200).json({ message: `refresh token requested for token: ${refreshToken}`, status: 200 });
    }
    
});


// Use this line so we can require this file in 'index.js'
module.exports = router;


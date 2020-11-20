const express = require('express');
const app = express();
const port = 3000;

// request - express object
app.get('/', (request, response) =>{
    response.send('hello world this is cool');
});

app.get('/status', (request, response) =>{
    //set status and payload at the same time
    response.status(200).json({ message: 'ok', status: 200 });
});

app.post('/signup', (request, response) => {
    response.status(200).json({ message: 'ok', status: 200 });
});

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`);
});
const express = require('express');
const server = express();

server.get('/',(req, res) => {
    res.send('Hello World');

});



server.listen(8000, () => console.log("API running on port 8000"));
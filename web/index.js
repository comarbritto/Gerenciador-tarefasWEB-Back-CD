const express = require('express');

const servidor = express();

servidor.get('/api', (req, res) =>{
    res.send('CAMPINHO!')
});

servidor.listen(3000)
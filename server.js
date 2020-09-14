const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/testmendeley'))

app.get('/*', function (req, res) {
    console.log(path.join(__dirname + '/src/index.html'));
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(8080);
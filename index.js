'use strict';

require('babel-register')({
    presets: ['es2015', 'react']
});

var server = require('./server');
const PORT = process.env.PORT || 3000;

server.default.listen(PORT, function () {
    console.log('Server listening on ', PORT);
});

'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3004;

const { start } = require('./server')
start(PORT);
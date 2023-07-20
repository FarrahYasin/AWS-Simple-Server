'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 8003;

const { start } = require('./server')
start(PORT);
'use strict';

const path = require('path');
const env = require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const log = console.log;

let server = express();

server.use(express.static(path.join(__dirname + process.env.PATH)));

server.listen(process.env.PORT);
log(chalk.blue(`Server is running on: http://127.0.0.1:${process.env.PORT}`));

'use strict';

/****************
 *   server : node server.js
 *   message : run the application
 *   created : full-stack team  more detail in README.md
 */

const path = require('path');
const env = require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const log = console.log;

let server = express();

/*Path where the app will point */
server.use(express.static(path.join(__dirname + process.env.PATH)));

/* application in execution */
server.listen(process.env.PORT);
log(chalk.blue(`Server is running on: http://127.0.0.1:${process.env.PORT}`));

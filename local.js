const express = require("./node_modules/express");
const expressStaticGzip = require('express-static-gzip');
const helmet = require('./node_modules/helmet');
const path = require("path");
const myLocalHost = require("./host");



const staticFiles = expressStaticGzip(path.join(__dirname, "dist"));

const app = express();
app.use(helmet());
app.use(helmet.noCache());
app.use(staticFiles);
const port = 8080;
app.listen(port, myLocalHost.host);
app.use(staticFiles)
console.log(`App is listening on port ${port}`);
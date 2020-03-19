const express = require("./node_modules/express");
const expressStaticGzip = require('express-static-gzip');
const helmet = require('./node_modules/helmet');
const path = require("path");

const port = process.env.PORT || 8080;
const staticFiles = expressStaticGzip(path.join(__dirname, "dist"));

const app = express();
app.use(helmet());
app.use(helmet.noCache());
app.use(staticFiles);
app.listen(port);
app.use(staticFiles)
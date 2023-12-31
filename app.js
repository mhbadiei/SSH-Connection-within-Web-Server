const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./routes')

const app = express();

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(appRouter);


app.listen(3000)
console.log('server is listening on 3000')
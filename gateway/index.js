const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy'); // this will redirect our request that is coming to the gateway based on the endpoint 

const app = express();

app.use(express.json());

app.use('/customer', proxy('http://localhost:8001'));
app.use('/shopping', proxy('http://localhost:8003'));
app.use('/', proxy('http://localhost:8002')); // products


app.listen(8000, () => {
  console.log('Gateway is listening to port 8001')
})
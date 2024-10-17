const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  return res.status(200).json({"msg": "Hello from Booking"})
})


app.listen(8003, () => {
  console.log('Booking is listening to port 8001')
})
require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('connection');
  socket.on('new-room', (data) => {
    console.log(data);
  });
})

app.get('/', (req, res) => {
  return res.send('Hello world');
})

server.listen(port, () => {
  console.log(`Listening to port; ${port}`);
})
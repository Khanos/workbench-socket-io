require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

let rooms = {};

app.use(cors());
io.on('connection', (socket) => {
  console.log('connection');
  socket.on('new-room', (roomName) => {
    socket.join(roomName)
    rooms[roomName] = {

    }
    console.log(data);
  });
  rooms[roomName] = {
    name: roomName,
    data: []
  }
  socket.emit('new-room-created', rooms);
})

app.get('/', (req, res) => {
  return res.send('Hello world');
})

server.listen(port, () => {
  console.log(`Listening to port; ${port}`);
})
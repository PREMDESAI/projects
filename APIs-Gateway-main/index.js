const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const chatbotRoutes = require('./routes/chat');
const plannerRoutes = require('./routes/planner')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

let images = [];

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('draw', (data) => {
    io.emit('draw', data);
  });

  // Send the current images to the new user
  socket.emit('initialImages', images);

  // Handle image updates
  socket.on('updateImages', (updatedImages) => {
    images = updatedImages;
    socket.broadcast.emit('updateImages', images);
  });

  socket.on('addImage', (data) => {
    io.emit('addImage', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use('/api', chatbotRoutes);
app.use('/api', plannerRoutes);

const port = process.env.PORT || 3000;
app.get("/", (_, res) => res.send("SHUBH MANGAL PLANNINGs API Gateway Running"))
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

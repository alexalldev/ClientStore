const app = require('./config/server-config');
const socketIo = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const io = socketIo(server)

var ClientStore = require('./ClientStore');

server.listen(80);
module.exports = io;
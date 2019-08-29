const app = require('./config/server-config');
const socketIo = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const io = socketIo(server)

var ClientStore = require('./ClientStore');

io.on('connection', function(socket) {

    const session = socket.request.session; //User session

    socket.on('GetId', function () {
        socket.emit('RecieveId', session.Id);
    });
});

server.listen(80);
module.exports = io;
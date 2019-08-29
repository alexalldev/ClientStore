const app = require('./config/server-config');
const socketIo = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const io = socketIo(server)

var ClientStore = require('./ClientStore');

io.ClientStore = new ClientStore(); //Attach ClientStore to io

io.emitClient = function(Id, eventName, data) { //Sending Strategy
    var client = io.ClientStore.clientById(Id);
    if (client != null)
        try {
            if (io.sockets.connected[client.SocketId])
                io.sockets.connected[client.SocketId].emit(eventName, data);
        } catch (err) {
            console.log(err);
        }
}
  
io.on('connection', function(socket) {

    const session = socket.request.session; //User session

    if (session.Id)
        io.ClientStore.push({
            Id: session.Id,
            SocketId: socket.id
        });

    socket.on('GetId', function () {
        socket.emit('RecieveId', session.Id);
        console.log('ClientStore:');
        console.log(io.ClientStore.clients());
        console.log('Current socket.id:');
        console.log(socket.id);
    });

    socket.on('SendToId', function (data) {
        let {id, message} = data;
        console.log(data);
        if (id && message)
            io.emitClient(data.id, 'message', data.message);
    });

    //Don't forget remove client after disconnection
    socket.on('disconnect', function(reason) {
        io.ClientStore.removeBySocketId(socket.id);
    });
});

server.listen(80);
module.exports = io;
module.exports = function ClientStore() {
    var Clients = [];

    this.push = function(Client) { //Client is a object like this {Id: #ClientIdInDatabase#, SocketId: #socket.id#}
        for (const C in Clients)
        {
            if (Clients[C].Id == Client.Id)
              Clients.splice(C, 1);
        }
        Clients.push(Client);
    };

    this.removeBySocketId = function(socketId) {
      for (const C in Clients)
      {
          if (Clients[C].SocketId == socketId)
            Clients.splice(C, 1);
      }
    };

    this.removeById = function(id) {
      for (const C in Clients)
      {
          if (Clients[C].Id == id)
            Clients.splice(C, 1);
      }
    };

    this.clients = function() {
        return Clients
    }

    this.clientById = function(clientId) {
      for (const client of Clients)
      {
        if (client.Id == clientId)
          return client;
      }
      return null;
    }

    this.clientBySocketId = function(socketId) {
      for (const client of Clients)
      {
        if (client.SocketId == socketId)
          return client;
      }
      return null;
    }
};
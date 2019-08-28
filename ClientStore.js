module.exports = function ClientStore() {
    var Clients = [];

    this.push = async function(Client) { //Client is a object like this {Id: #ClientIdInDatabase#, SocketId: #socket.id#}
        for (const C in Clients)
        {
            if (Clients[C].Id == Client.Id)
              Clients.splice(C, 1);
        }
        Clients.push(Client);
    };

    this.removeBySocketId = async function(socketId) {
      for (const C in Client)
      {
          if (Clients[C].SocketId == socketId)
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
};
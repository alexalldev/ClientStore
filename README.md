# ClientStore lesson
[![N|Solid](https://alexall.dev/images/alexall100x100.svg)](https://alexall.dev)
- Learn how to use Node exress-session
- Discover ClientStore.
- Tie socket.io clients with express sessions and your database
- 
# First
Install npm packages
```sh
npm i
   or
npm install

```
# Second
Require installed modules and start socket.io server
```sh
const socketIo = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const io = socketIo(server)
const ClientStore = require('client-store');

server.listen(80);

io.ClientStore = new ClientStore();
```

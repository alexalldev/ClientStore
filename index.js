const app = require('./config/server-config')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

var sessionMiddleware = 
session({
  secret: "TEAMPLAYCOOKIESETRETWORDFORSESSION",
  store: new FileStore({logFn: function(){}}),
  cookie:
  {
    path: "/",
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false
})
app.use(sessionMiddleware);

const io = require('./sockets')

io.use(function(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);
});

/*ROUTERS */
app.use('/', require('./routes/main'));
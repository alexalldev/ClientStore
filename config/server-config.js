const express = require('express');
var app = express();

/* Here you can configure your server, for example add app.protect function */

app.protect = (req, res, next) => {
    if (req.isAuthenticated())
    {
      next()
    }
    else {
      return res.redirect("/");
    }
  }

/* or connect templating engine */
app.set('view engine', 'ejs');

/* and set static files folder */
app.use('/public', express.static('public'));

module.exports = app;
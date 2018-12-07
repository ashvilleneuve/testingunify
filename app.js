const express = require('express');
var bodyParser = require('body-parser');

// Internal config variables
const app = express();
const errorHandlers = require("./handlers/errorHandlers");
const routes = require("./routes/index");
const port = 8000;


// MIDDLEWARE SETUP

// To serve static files such as images, CSS files, and JavaScript files,
app.use(express.static(__dirname + '/public'));

// Parse incoming request bodies- makes requests available using "req.body"
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// setup all get and post requests in the index.js file
app.use("/", routes);
app.use("/forms", routes);

// Setup header that is returned to client - allowing cross origin requests
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//
// // If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound);
//
// // One of our error handlers will see if these errors are just validation errors
// app.use(errorHandlers.flashValidationErrors);
//
// // Otherwise this was a really bad error we didn't expect! Shoot eh
// if (app.get("env") === "development") {
//     /* Development Error Handler - Prints stack trace */
//     app.use(errorHandlers.developmentErrors);
// }
//
// // production error handler
// app.use(errorHandlers.productionErrors);

// Setup http server
app.listen(8000, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

// export this for use in other files
module.exports = app;

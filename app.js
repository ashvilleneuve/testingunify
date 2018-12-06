const express = require('express');
// const exphbs = require('express-handlebars');
// const request = require("request");

// Internal config variables
const app = express();
// const errorHandlers = require("./handlers/errorHandlers");
// const routes = require("./routes/index");

const port = 8080;

// app.use(express.static(__dirname + '/public'));
// // Handlebars Middleware
// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
//
// app.set('view engine', 'handlebars');
//
// // app.use("/", routes);
app.get('/services/ping', (req, res) => {
  res.sendStatus(200)
})
// app.get('/', (req, res) => res.send('Hello World!'))
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
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

// done! we export it so we can start the site in start.js
module.exports = app;

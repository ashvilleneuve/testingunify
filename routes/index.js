const routes = require('express').Router();

routes.get('/', (req, res) => res.send('Hello Unify!'))

//  Services Ping, required by Shopify Cloudplatform
routes.get("/services/ping", (req, res) => {
    res.sendStatus(200)
});

module.exports = routes;

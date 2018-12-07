const routes = require('express').Router();

routes.get('/', (req, res) => res.render('auth.ejs'))
//adding the fl-form page
routes.get('/forms', (req, res) => res.render('fl-form.ejs'))

//  Services Ping, required by Shopify Cloudplatform
routes.get("/services/ping", (req, res) => {
    res.sendStatus(200)
});

module.exports = routes;

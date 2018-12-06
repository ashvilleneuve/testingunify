const express = require("express");

app.get('/', (req, res) => res.send('Hello Unify!'))

//  Services Ping, required by Shopify Cloudplatform
app.get("/services/ping", (req, res) => {
    res.sendStatus(200)
});

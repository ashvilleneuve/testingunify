const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    const title = 'Shopify';
    res.render('index', {
        title: title
    });
});

//  Services Ping, required by Shopify Cloudplatform
router.get("/services/ping", (req, res) => {
    res.status(200).send("status: update Node version & packages!");
});

module.exports = router;

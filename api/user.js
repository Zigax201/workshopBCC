const express = require('express');
const db = require('../db/connection');
const router = express.Router();
// const users = db.get('user');
// const note = require('./note')
// let tommorrow = new Date(new Date().getTime() + 86400000)

router.get('/', (req, res, next) => {
    res.json({
        message: "hello",
        id: req.user
    })
})


module.exports = router;
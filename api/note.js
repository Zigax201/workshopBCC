const express = require('express');
const models = require('../db/connection');
const router = express.Router();
const date = new Date
const note = models.get('note')
const user = require('../auth/index')
router.get('/', function (req, res, next) {
    return res.send('Api note');
})
// note ambil data
router.get('/note/:id', function (req, res, next) {
    models.note.find({}, function (err, data) {
        if (err) res.json({ 'message': 'Not Found' })
        else res.json(data);
    })
})
// note insert data
router.post('/note/:id', function (req, res, next) {
    const add ={
        title: req.body.title,
        content: req.body.content,
        creatorId: user._id,
        createAt: date,
        updateAt: date
    };
    note.insert(add)
})
// note update data
router.put('/note/:id', function (req, res, next) {
    var data = {
        id: get._id,
        title: req.body.title,
        content: req.body.content,
        creatorId: user._id,
        updateAt: date
    }
    models.note.findOneAndUpdate({ '_id': req.params.id }, data, function (err, data) {
        if (err) res.json({ 'message': 'Failed to update note' })
        else res.json({ 'message': 'Succes to update note' });
    })
})
// note hapus data
router.delete('/note/:id', function (req, res, next) {
    models.note.remove({ _id: req.params.id }, function (err, data) {
        if (err) res.json({ 'message': 'Failed to remove note' })
        else res.json({ 'message': 'succes to remove note' });
    })
})

module.exports = router;
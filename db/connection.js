const monk = require('monk');
const mongoose = require('mongoose');
const url = "mongodb://User:123654@cluster0-shard-00-00-vrvha.mongodb.net:27017,cluster0-shard-00-01-vrvha.mongodb.net:27017,cluster0-shard-00-02-vrvha.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
const db = monk(url);
mongoose.connect('mongodb://User:123654@cluster0-shard-00-00-vrvha.mongodb.net:27017,cluster0-shard-00-01-vrvha.mongodb.net:27017,cluster0-shard-00-02-vrvha.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
const mon = mongoose.connection;
mon.on('error', function (err) {
    console.log('connection error', err);
});
mon.once('open', function () {
    console.log('connected.');
});
const Schema = mongoose.Schema;
const notes = new Schema({
    id: Number,
    title: String,
    content: String,
    creatorId: Number,
    createAt: Date,
    updateAt: Date
});
const note = mongoose.model('note', notes)
module.exports = {
    note: note
}
module.exports = db;
var db = require('mongoose');

db.connect('mongodb://localhost/market');
module.exports = db;
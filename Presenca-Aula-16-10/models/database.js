var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment')

mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

var connection = mongoose.createConnection("mongodb://localhost/recipeApp");
//var connection = mongoose.createConnection("mongodb://0.0.0.0:27017/recipeApp")
autoIncrement.initialize(connection)

const { Schema } = mongoose;

module.exports.Schema = Schema
module.exports.connection = connection
module.exports.autoIncrement = autoIncrement
const { connection, Schema, autoIncrement } = require('./database')
const mongoose = require('mongoose');

const IngredientSchema = Schema({
  name               : { type: String,   required: true },
  quantity           : { type: Number,   required: false },
  unit               : { type: String,   required: false}
});

var RecipeSchema = Schema({
  name               : { type: String, required: true },
  id                 : {type: Number, required:true},
  ingredients        : [IngredientSchema]
});

const UserSchema = Schema({
  name               : { type: String,   required: true },
  creationDate       : { type: Date,   default: new Date},
  ShoppingList       : [IngredientSchema],
  recipeList         : [RecipeSchema]
});

const User = connection.model('User', UserSchema);

module.exports = User;


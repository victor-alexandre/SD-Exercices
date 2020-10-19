var User = require('../models/userSchema.js');

/** 
 * @swagger
 * tags:
 *  name: Recipe App
 *  description: operations with a user object
*/

function createUser(req, res) {
    const user = new User(req.body)   

    user.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("User inserted on database successfully!");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
      });
}


function userRecipes(req, res){
    res.send(user.recipeList);
}

function userShoppingList(req, res){
    res.send(user.shoppingList);
}


function getAllUsers(req, res){
    User.find()
    .then( result => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);        
    })
    .catch( err => next(err) );
}

function setup(server) {
/**
 * @swagger
 *
 * /user/{id}/recipeList:
 *   get:
 *     tags:
 *       - User
 *     description: returns the user's recipe list
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: current user's recipe list
 */
server.get('/user/:id/recipeList', userRecipes);

/**
 * @swagger
 *
 * /allUsers:
 *   get:
 *     tags:
 *       - User
 *     description: returns all users in the database
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: all users in the database
 */
server.get('/allUsers', getAllUsers);

/**
 * @swagger
 *
 * /user/{id}/shoppingList:
 *   get:
 *     tags:
 *       - User
 *     description: returns the user's shopping list
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: current user's shopping list
 */
server.get('/user/:id/userShoppingList', userShoppingList);


/**
 * @swagger
 *
 * /createUser:
 *   post:
 *     tags:
 *       - User
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *     description: Create new user
 *     produces:
 *        - application/json
 *     responses:
 *        200:
 *          description: user was created sucessfully
 */
server.post('/createUser', createUser);
}

module.exports = setup;
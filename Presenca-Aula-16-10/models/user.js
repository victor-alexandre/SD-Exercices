let user = {
    //Username
    name: null,
    //Date of user creation
    creationDate: new Date(),
    //List with recipe's ingredients
    shoppingList = [],
    //List with recipes authored by the user. Obs: In this list there will be only the recipe name and ID
    recipeList = [],

    //Add all recipe ingredients in the user's shoppingList
    addRecipeIngredients(recipe){
        this.shoppingList.push(recipe);
    },
    //Remove all ingredients from a recipe at user's shoppingList
    removeRecipeIngredient(recipe){
        const index = this.shoppingList.indexOf(this.shoppingList.recipe.id);
        this.shoppingList.splice(index, 1);
    },
    //Add recipe to user's personal list of created recipes
    addRecipe(recipe){
        this.recipeList.push(recipe);
    },
    //Add recipe to user's personal list of created recipes
    removeRecipe(index){
        this.recipeList.splice(index, 1);
    },
    updateUserName(newName){
        this.name = newName;
    }
}

module.exports = user;
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex (knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe

};

function getDishes() {
    return db('dishes');
};

function addDish(name) {
    return db('dishes')
        .insert({name})
};

function getDish(id) {
    return db('dishes')
        .select('dishes.name')
        .where('dishes.id', '=', id)
        .join('recipes', 'dishes.id', '=', 'recipes.dish_id');

};

function getRecipes() {
    return db('recipes')
    .select('dishes.name')
    .join('dishes', 'dishes.id', '=', 'recipes.dish_id');
};

function addRecipe(recipe, dish_id) {
    return db ('recipes')
        .insert({
            name: recipe,
            dish_id: dish_id                  
        });
};
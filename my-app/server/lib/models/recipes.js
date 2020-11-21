const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    name:{
        type: String,
		required: true,
    },
    primeIngredient: {
        type: String,
		required: true,
    },
    type: {
        type: String,
		required: true,
    },
    recipeBody: {
        type:String,
        required: true

    }, 

});

RecipeSchema.static('all', function() {
    return this.find();
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;
var recipes = require('../data/recipesData.js');

exports.list = function (req, res) {
    //get the name of the kind of recipes that was requested
    var parts = req.originalUrl.split('/');
    var kind = req.params.id;
    console.log('ID' - req.params.id);
    console.log('recipes ' + recipes);
    res.render('recipie', {
        recipes: {
            list: recipes[kind],
            kind: recipes.recipeTypeName[kind] + ' recipes'
        }
    });

}
var express = require('express');
var router = express.Router();
var recipes = require('../data/recipeData');
/* Renders Recipe view */
router.get('/:id', function (req, res) {
    var kind = req.params.id;
    
    res.render('recipes', {
        recipes: {
            list: recipes[kind],
            kind: recipes.recipeTypeName[kind]
        }
    });
});

module.exports = router;
const Recipe = require('./models/recipe'); // Import the Recipe model

exports.index = (req, res) => {
  // Getting all the recipes from the database
  Recipe.find({}, (err, recipes) => {
    if (err) {
      res.send(err);
    }

    // Send the list of recipes as a response
    res.json(recipes);
  });
};

exports.create = (req, res) => {
  // Create a new recipe using the request body
  const newRecipe = new Recipe(req.body);

  // Save the new recipe to the database
  newRecipe.save((err, recipe) => {
    if (err) {
      res.send(err);
    }

    // Send the saved recipe as a response
    res.json(recipe);
  });
};

exports.show = (req, res) => {
  // Get the recipe with the specified ID from the database
  Recipe.findById(req.params.id, (err, recipe) => {
    if (err) {
      res.send(err);
    }

    // Send the db recipe as a response
    res.json(recipe);
  });
};

exports.update = (req, res) => {
  // Update the recipe with the specified ID using the request body
  Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, recipe) => {
    if (err) {
      res.send(err);
    }

    // Send the updated recipe as a response
    res.json(recipe);
  });
};

exports.delete = (req, res) => {
  // Delete the recipe with the specified ID from the db
  Recipe.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.send(err);
    }

    // Send a success message as a response
    res.json({ message: 'Recipe successfully deleted' });
  });
};

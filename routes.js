const express = require("express");
const router = express.Router();
const recipes = require("./recipes");

router.get("/", (req, res) => {
  res.render("recipe", {
    title: "Recipe Book",
    recipes: recipes.getAll()
  });
});

router.get("/:name", (req, res) => {
  const recipe = recipes.getByName(req.params.name);

  if (recipe) {
    res.render("recipe", {
      title: recipe.name,
      recipe: recipe
    });
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;

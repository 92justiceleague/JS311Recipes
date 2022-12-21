const recipes = [
    {
        name: "Spaghetti and Meatballs",
        ingredients: ["spaghetti", "ground beef", "breadcrumbs", "eggs", "salt", "pepper", "garlic powder", "tomato sauce"],
        instructions: [
            "Cook spaghetti according to package instructions.",
            "In a large bowl, mix together ground beef, breadcrumbs, eggs, salt, pepper, and garlic powder.",
            "Form the mixture into meatballs and place on a baking sheet.",
            "Bake the meatballs in the oven at 375°F for 15-20 minutes, or until cooked through.",
            "Serve the meatballs over the cooked spaghetti with tomato sauce."
        ]
    }
];

function addRecipesToPage() {
    const recipeList = document.querySelector("main ul");

    recipes.forEach(recipe => {
        // Create an li element to hold the recipe
        const recipeItem = document.createElement("li");

        // Add the recipe name as an h3 element
        const recipeName = document.createElement("h3");
        recipeName.textContent = recipe.name;
        recipeItem.appendChild(recipeName);

        // Add the recipe ingredients as a p element
        const recipeIngredients = document.createElement("p");
        recipeIngredients.textContent = `Ingredients: ${recipe.ingredients.join(", ")}`;
        recipeItem.appendChild(recipeIngredients);

        // Add the recipe instructions as a p


    //    // const express = require("express");
    //     const app = express();
    //     const recipesRouter = require("./routes");

    //     app.use("/recipes", recipesRouter);

    //     const server = app.listen(3000, () => {
    //         console.log(`Listening on port ${server.address().port}`);
    //     });

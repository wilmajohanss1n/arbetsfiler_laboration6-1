"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: Wilma Johansson
 */

// Hämtar formulärets HTML-element så vi kan använda dem i JavaScript.
const searchForm = document.querySelector("#searchform");
const searchInput = document.querySelector("#search");
const errorMessage = document.querySelector("#error");
const messageSection = document.querySelector("#message");
const recipeSection= document.querySelector("#recipe");


// Hanterar när användaren skickar sökformuläret.
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Hämtar sökfrasen och tar bort onödiga mellanslag.
    const searchPhrase = searchInput.value.trim();

// Kontrollerar att användaren har skrivit en sökfras.
    if (searchPhrase === "") {
        errorMessage.textContent = "Please enter a search term.";
        return;
    }

    // Rensar eventuella tidigare felmeddelanden.
    errorMessage.textContent = "";

    fetchRecipes(searchPhrase);
});

// Hämtar recept från DummyJason API.
async function fetchRecipes(searchPhrase) {
    try {    
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${encodeURIComponent(searchPhrase)}`);

    if (!response.ok) {
        throw new Error("Something went wrong");
    }
    
    const data = await response.json();

// Kontrollerar om sökningen hittade några recept.
    if (data.recipes.length === 0) {
        recipeSection.innerHTML = "";
        messageSection.textContent = "No recipes found. Please try another search term.";
        return;
    }

// Tömmer tidigare meddelande om recept hittades.
    messageSection.textContent = "";

// Hämtar det första receptet från sökresultatet.
    const recipe = data.recipes[0];

// Visar receptets information och ingredienser på sidan.
    recipeSection.innerHTML = `<h2>${recipe.name}</h2>
    <img src="${recipe.image}" alt="${recipe.name}" >
    <p>Servings: ${recipe.servings}</p>
    <p>Preparation time: ${recipe.prepTimeMinutes} minutes</p>
    <p>Cooking time: ${recipe.cookTimeMinutes} minutes</p>
    <p>Difficulty: ${recipe.difficulty}</p>

    <h3>Ingredients</h3>
    <ul>
        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
    </ul>
`;


    } catch (error) {
        console.error("Could not fetch recipes:", error);
        messageSection.textContent = "Something went wrong. Please try again later.";
    }
  }







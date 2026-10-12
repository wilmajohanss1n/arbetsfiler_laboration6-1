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
    const response = await fetch( `https://dummyjson.com/recipes/search?q=${encodeURIComponent(searchPhrase)}`);
    const data = await response.json();
    console.log(data);

  }







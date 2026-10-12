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

    // Hämtar värdet från sökfältet.
    const searchPhrase = searchInput.value.trim();

    console.log(searchPhrase);
});







import { pokemonData } from "./scripts/data.js";
import { typeContents } from "./scripts/data.js";
import { Pokemon } from "./scripts/function.js";

const pokemon = new Pokemon(pokemonData, typeContents);

document.addEventListener("DOMContentLoaded", () => {
  //DOM 1st loaded we pass icon "dragon" to show the tableData and content of Dragon type
  pokemon.addPokemonTableData("dragon");
  pokemon.addPokemonContent("dragon");
  pokemon.addActiveClassPokemonIcon("dragon");
});


//Event Listener for each icon click, it will change the table data and content of the clicked icon type
let Icons = document.querySelectorAll(".icon");
Icons.forEach((icon) =>
  icon.addEventListener("click", () => {
    pokemon.addPokemonTableData(icon.id);
    pokemon.addPokemonContent(icon.id);
    pokemon.addActiveClassPokemonIcon(icon.id);
  })
);

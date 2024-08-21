import { pokemonData } from "./data.js";

function addPokemonTableData(pokemonData) {
  let filteredData = pokemonData.filter((pokemon) => pokemon.type === "Fire");
  
  const pokemonTableBody = document.getElementById("pokemonTableBody");

  pokemonTableBody.innerHTML = "";

  filteredData.forEach((pokemon) => {
    let row = document.createElement("tr");
    // Create cells for each property of the Pokémon
    let idCell = document.createElement("td");
    idCell.textContent = pokemon.id; // Assuming each Pokémon has an 'id' property
    row.appendChild(idCell);

    let typeCell = document.createElement("td");
    typeCell.textContent = pokemon.type; // Assuming 'type' is a property
    row.appendChild(typeCell);

    let nameCell = document.createElement("td");
    nameCell.textContent = pokemon.name; // Assuming 'name' is a property
    row.appendChild(nameCell);

    let baseExperienceCell = document.createElement("td");
    baseExperienceCell.textContent = pokemon.base_experience; // Assuming 'baseExperience' is a property
    row.appendChild(baseExperienceCell);

    let heightCell = document.createElement("td");
    heightCell.textContent = pokemon.height; // Assuming 'height' is a property
    row.appendChild(heightCell);

    let weightCell = document.createElement("td");
    weightCell.textContent = pokemon.weight; // Assuming 'weight' is a property
    row.appendChild(weightCell);

    pokemonTableBody.appendChild(row);
  });
}

addPokemonTableData(pokemonData);

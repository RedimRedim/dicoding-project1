import { pokemonData } from "./scripts/data.js";

function apiBtnListener(element) {
  const apiBtn = document.querySelectorAll(element);

  apiBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Fetching Data");
      disabledButton(btn);
      callPokemonData().then((apiData) => {
        console.log("Data fetched successfully:", apiData);
        pushPokemonData(apiData);
      });
    });
  });
}

function disabledButton(btn) {
  btn.disabled = true;
  btn.textContent = "Please wait..."; // Change the button text
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = "Submit";
  }, 5000);
}

async function callPokemonData() {
  try {
    let pokemonIdName = document.getElementById("inputPokemon").value;

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonIdName}`
    );

    const data = await response.json();

    let apiData = {
      id: data.id,
      type: data.types[0].type.name,
      name: data.name,
      base_experience: data.base_experience,
      height: data.height,
      weight: data.weight,
    };
    return apiData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function pushPokemonData(apiData) {
  let pokemonTypes = ["fire", "dragon", "fairy", "steel", "water"];

  if (pokemonTypes.includes(apiData.type)) {
    pokemonData.push(apiData);
    console.log("Finished adding to pokemon Data");
    alert(`${JSON.stringify(apiData)} has been successfully added  `);
  } else {
    console.log("Not in 5 listed pokemon Types");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  //DOM 1st loaded we pass icon "dragon" to show the tableData and content of Dragon type
  apiBtnListener(".apiBtn");
});

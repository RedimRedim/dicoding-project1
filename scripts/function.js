export class Pokemon {
  constructor(data, typeContents) {
    this.data = data;
    this.typeContents = typeContents;
  }

  addPokemonTableData(icon) {
    let filteredData = this.data.filter(
      (pokemon) => pokemon.type.toLowerCase() == icon.toLowerCase()
    );

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

  addPokemonContent(icon) {
    document.querySelector("#pContent > p").innerHTML = "";
    let filteredContents = this.typeContents.filter(
      (type) => type.icon === icon
    );

    document.querySelector("#pContent > p").innerHTML =
      filteredContents[0].content;
  }

  addActiveClassPokemonIcon(icon) {
    document.querySelectorAll(".icon").forEach((iconItem) => {
      if (iconItem.id == icon) {
        iconItem.classList.add("active");
      } else {
        iconItem.classList.remove("active");
      }
    });
  }
}

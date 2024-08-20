function apiBtnListener(element) {
  const apiBtn = document.querySelectorAll(element);

  apiBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Fetching Data");
      disabledButton(btn);
      callPokemonData().then((pokemonData) => {
        console.log("Data fetched successfully:", pokemonData);
        // Add your code here to display the fetched data in the UI
      });
    });
  });
}

function disabledButton(btn) {
  btn.disabled = true;
  btn.textContent = "Please wait..."; // Change the button text
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = "can generate now";
  }, 5000);
}

async function callPokemonData() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${1}`);

    const data = await response.json();

    let objectData = {
      id: data.id,
      name: data.name,
      base_experience: data.base_experience,
      height: data.height,
      weight: data.weight,
    };
    return objectData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

apiBtnListener(".apiBtn");

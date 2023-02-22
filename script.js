const cardsContainer = document.getElementById('cardsContainer');
const searchInput = document.getElementById('searchInput');

function createCard(pokemon) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;
  card.appendChild(img);

  const name = document.createElement('h2');
  name.textContent = pokemon.name;
  card.appendChild(name);

  const types = document.createElement('p');
  types.textContent = `Type(s): ${pokemon.types.map(type => type.type.name).join(', ')}`;
  card.appendChild(types);

  cardsContainer.appendChild(card);
}

async function searchPokemon() {
  const pokemonName = searchInput.value.toLowerCase();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  if (!response.ok) {
    alert('No se ha encontrado ese Pokemon!');
    return;
  }
  const pokemon = await response.json();
  cardsContainer.innerHTML = '';
  createCard(pokemon);
}

function showPokemon(pokemon) {
  // Get the elements for the Pokemon info
  const pokemonImg = document.getElementById("pokemon-img");
  const pokemonName = document.getElementById("pokemon-name");
  const pokemonTypes = document.getElementById("pokemon-types");

  // Set the source and alt text for the Pokemon image
  pokemonImg.setAttribute("src", pokemon.sprites.other["official-artwork"].front_default);
  pokemonImg.setAttribute("alt", pokemon.name);

  // Set the text for the Pokemon name
  pokemonName.textContent = pokemon.name;

  // Remove any existing type elements
  while (pokemonTypes.firstChild) {
    pokemonTypes.removeChild(pokemonTypes.firstChild);
  }

  // Add a type element for each type of the Pokemon
  pokemon.types.forEach(type => {
    const typeElement = document.createElement("li");
    typeElement.textContent = type.type.name;
    typeElement.classList.add("type", type.type.name);
    pokemonTypes.appendChild(typeElement);
  });
}

function getPokemon(pokemonName) {
  // Build the URL for the Pokemon API request
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  // Make the API request
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Call the showPokemon function with the selected Pokemon
      const pokemon = {
        name: data.name,
        sprites: data.sprites,
        types: data.types,
        ability: data.ability
      };
      showPokemon(pokemon);
    })
    .catch(error => console.log(error));
}



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
  
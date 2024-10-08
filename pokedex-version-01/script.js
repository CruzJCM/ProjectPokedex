// Array para almacenar los Pokémon
let pokemons = [];

// Obtener Pokémon desde la PokeAPI
async function fetchPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=809"); // Obtener primeros 151 Pokémon
  const data = await response.json(); // Convertir la respuesta a JSON

  // Convertir los resultados a una lista de Pokémon
  pokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonData = await fetch(pokemon.url); // Obtener datos de cada Pokémon
      const pokemonDetails = await pokemonData.json();

      return {
        name: pokemonDetails.name,
        img: pokemonDetails.sprites.front_default, // Usar la imagen de sprite
        types: pokemonDetails.types.map((typeInfo) => typeInfo.type.name), // Obtener los tipos del Pokémon
      };
    })
  );

  loadCards(pokemons); // Cargar todos los Pokémon en la tarjeta
}

// Función para deseleccionar todos los tipos
function clearFilters() {
  const checkboxes = document.querySelectorAll(
    ".filters input[type='checkbox']"
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false; // Deselecciona el checkbox
  });
}

// Función de búsqueda por nombre de Pokémon
function searchPokemon() {
  const searchInput = document.getElementById("search").value.toLowerCase(); // Obtiene el valor del input y lo pasa a minúsculas
  const filteredPokemons = pokemons.filter(
    (pokemon) => pokemon.name.toLowerCase().includes(searchInput) // Filtra los Pokémon cuyo nombre coincida con la búsqueda
  );

  loadCards(filteredPokemons); // Muestra solo los Pokémon filtrados
}

// Ejecutar la búsqueda cuando se hace clic en el botón de búsqueda
document.querySelector(".btn-search").addEventListener("click", () => {
  clearFilters(); // Limpiar los tipos seleccionados
  searchPokemon(); // Ejecuta la búsqueda
});

// Ejecutar la búsqueda cuando se presiona Enter en el campo de búsqueda
document.getElementById("search").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    clearFilters(); // Limpiar los tipos seleccionados
    searchPokemon(); // Ejecuta la búsqueda al presionar Enter
  }
});

// Función para restablecer la búsqueda y mostrar todos los Pokémon
function clearSearch() {
  document.getElementById("search").value = ""; // Limpia el input de búsqueda
  loadCards(pokemons); // Vuelve a cargar todos los Pokémon
}

// Escuchar el evento de clic en el botón "Clear"
document.querySelector(".btn-clear").addEventListener("click", clearSearch);

// Cargar las tarjetas de todos los Pokémon
function loadCards(pokemons) {
  const cardList = document.getElementById("card-list");
  cardList.innerHTML = ""; // Limpiar tarjetas

  pokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Crear la imagen del Pokémon
    const img = document.createElement("img");
    img.src = pokemon.img;
    card.appendChild(img);

    // Crear el contenedor "card-info"
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    // Crear el nombre del Pokémon (h3) dentro de "card-info"
    const numPokemon = pokemon.img.split("/").pop().split(".")[0];
    const name = document.createElement("h3");
    name.textContent = "#" + numPokemon + " " + pokemon.name.toUpperCase();
    cardInfo.appendChild(name);

    // Crear el contenedor de tipos dentro de "card-info"
    const typesContainer = document.createElement("div");
    typesContainer.classList.add("card-types");
    pokemon.types.forEach((type) => {
      const typeSpan = document.createElement("span");
      typeSpan.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      typeSpan.classList.add(`type-${type}`);
      typesContainer.appendChild(typeSpan);
    });

    // Añadir el contenedor de tipos al "card-info"
    cardInfo.appendChild(typesContainer);

    // Añadir "card-info" a la tarjeta
    card.appendChild(cardInfo);

    // Añadir la tarjeta completa a la lista
    cardList.appendChild(card);
  });
}

// Filtrar Pokémon por tipos seleccionados
function filterPokemons() {
  const checkboxes = document.querySelectorAll(
    ".filters input[type='checkbox']"
  );
  const selectedTypes = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  if (selectedTypes.length === 0) {
    loadCards(pokemons); // Si no hay tipos seleccionados, mostrar todos
  } else {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.types.some((type) => selectedTypes.includes(type))
    );
    loadCards(filteredPokemons);
  }
}

// Escuchar los clics en los tipos de Pokémon y simular el check
document.querySelectorAll(".filter").forEach((filterElement) => {
  filterElement.addEventListener("click", (event) => {
    const checkbox = filterElement.querySelector("input[type='checkbox']");
    checkbox.checked = !checkbox.checked; // Alternar el estado del checkbox
    filterElement.classList.toggle("active"); // Clase para estilos activos
    filterPokemons(); // Aplicar el filtro
  });
});

// Cargar los Pokémon al inicio
fetchPokemons(); // Llama a la función para obtener los Pokémon al cargar la página

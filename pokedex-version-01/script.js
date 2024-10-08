// Array para almacenar los Pokémon
let pokemons = [];
let allPokemons = []; // Todos los Pokémon que se obtienen de la API
const limitPerPage = 20; // Cantidad de Pokémon a mostrar por página
let isFiltering = false; // Indicador de si los filtros están activos
let isSearching = false; // Indicador de si se está usando el buscador
let offset = 0; // Controla cuántos Pokémon mostrar por Lazy Loading

// Obtener todos los Pokémon desde la PokeAPI (trae hasta el Pokémon 809 al inicio)
async function fetchAllPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=809"); // Obtener todos los Pokémon hasta el 809
  const data = await response.json();

  // Convertir los resultados a una lista de Pokémon con sus detalles
  allPokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonData = await fetch(pokemon.url); // Obtener datos de cada Pokémon
      const pokemonDetails = await pokemonData.json();

      return {
        name: pokemonDetails.name,
        img: pokemonDetails.sprites.front_default, // Usar la imagen de sprite
        types: pokemonDetails.types.map((typeInfo) => typeInfo.type.name), // Obtener los tipos del Pokémon
        id: pokemonDetails.id // Obtener el número de la Pokédex directamente de la API
      };
    })
  );

  pokemons = [...allPokemons]; // Asignar todos los Pokémon a la lista de visualización
  loadInitialCards(); // Cargar los primeros Pokémon con Lazy Loading
}

// Función para cargar inicialmente las tarjetas con Lazy Loading
function loadInitialCards() {
  const pokemonBatch = pokemons.slice(0, limitPerPage); // Tomar los primeros 'limitPerPage' Pokémon
  loadCards(pokemonBatch); // Cargar esas tarjetas en la página
  offset += limitPerPage; // Incrementar el offset para las próximas cargas
}

// Función para cargar más tarjetas al llegar al final de la página
function loadMoreCards() {
  const pokemonBatch = pokemons.slice(offset, offset + limitPerPage);
  loadCards(pokemonBatch);
  offset += limitPerPage;
}

// Cargar las tarjetas de Pokémon
function loadCards(pokemonsToLoad) {
  const cardList = document.getElementById("card-list");

  pokemonsToLoad.forEach((pokemon, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Crear el número de la Pokédex y añadirlo detrás de la imagen
    const pokedexNumber = document.createElement("div");
    pokedexNumber.classList.add("card-number");
    pokedexNumber.textContent = `#${pokemon.id}`; // Usar el número de la Pokédex de la API
    card.appendChild(pokedexNumber);

    // Crear la imagen del Pokémon
    const img = document.createElement("img");
    img.src = pokemon.img;
    card.appendChild(img);

    // Crear el contenedor "card-info"
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    // Crear el nombre del Pokémon (h3) dentro de "card-info"
    const name = document.createElement("h3");
    name.textContent = pokemon.name.toUpperCase();
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
  const checkboxes = document.querySelectorAll(".filters input[type='checkbox']");
  const selectedTypes = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  if (selectedTypes.length === 0) {
    isFiltering = false; // No se está filtrando
    loadFilteredCards(allPokemons); // Mostrar todos los Pokémon si no hay filtros
  } else {
    isFiltering = true; // Los filtros están activos
    const filteredPokemons = allPokemons.filter((pokemon) =>
      pokemon.types.some((type) => selectedTypes.includes(type))
    );
    loadFilteredCards(filteredPokemons);
  }
}

// Cargar las tarjetas filtradas
function loadFilteredCards(filteredPokemons) {
  const cardList = document.getElementById("card-list");
  cardList.innerHTML = ""; // Limpiar tarjetas
  loadCards(filteredPokemons); // Cargar Pokémon filtrados
}

// Función de búsqueda por nombre de Pokémon
function searchPokemon() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  if (searchInput.length > 0) {
    isSearching = true; // La búsqueda está activa
    const filteredPokemons = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchInput)
    );
    loadFilteredCards(filteredPokemons);
  } else {
    isSearching = false; // No hay búsqueda activa
    loadFilteredCards(allPokemons); // Vuelve a cargar todos los Pokémon
  }
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
  isSearching = false; // No hay búsqueda activa
  loadFilteredCards(allPokemons); // Vuelve a cargar todos los Pokémon
}

// Escuchar el evento de clic en el botón "Clear"
document.querySelector(".btn-clear").addEventListener("click", clearSearch);

// Escuchar los clics en los tipos de Pokémon y simular el check
document.querySelectorAll(".filter").forEach((filterElement) => {
  filterElement.addEventListener("click", (event) => {
    const checkbox = filterElement.querySelector("input[type='checkbox']");
    checkbox.checked = !checkbox.checked; // Alternar el estado del checkbox
    filterElement.classList.toggle("active"); // Clase para estilos activos
    filterPokemons(); // Aplicar el filtro
  });
});

// Función para verificar si el usuario ha llegado al final de la página
function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // Solo activar Lazy Loading si no hay filtros o búsqueda activa
  if (!isFiltering && !isSearching && scrollTop + clientHeight >= scrollHeight - 5) {
    loadMoreCards(); // Cargar más Pokémon solo si no hay filtros ni búsqueda
  }
}

// Agregar el evento de desplazamiento
window.addEventListener("scroll", handleScroll);

// Función para deseleccionar todos los tipos
function clearFilters() {
  const checkboxes = document.querySelectorAll(".filters input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false; // Deselecciona el checkbox
  });
  isFiltering = false; // No hay filtros activos
}

// Cargar todos los Pokémon al inicio
fetchAllPokemons(); // Llama a la función para obtener todos los Pokémon al cargar la página

// Selecciona el logo
const logo = document.getElementById("logo");

// Agrega el evento click para recargar la página
logo.addEventListener("click", () => {
  location.reload(); // Recarga la página al hacer clic en el logo
});
const pokemons = [
  { name: "Bulbasaur", img: "img/pkm/1.gif", types: ["grass", "poison"] },
  { name: "Ivysaur", img: "img/pkm/2.gif", types: ["grass", "poison"] },
  { name: "Venusaur", img: "img/pkm/3.gif", types: ["grass", "poison"] },
  { name: "Charmander", img: "img/pkm/4.gif", types: ["fire"] },
  { name: "Charmeleon", img: "img/pkm/5.gif", types: ["fire"] },
  { name: "Charizard", img: "img/pkm/6.gif", types: ["fire", "flying"] },
  { name: "Squirtle", img: "img/pkm/7.gif", types: ["water"] },
  { name: "Wartortle", img: "img/pkm/8.gif", types: ["water"] },
  { name: "Blastoise", img: "img/pkm/9.gif", types: ["water"] },
  { name: "Caterpie", img: "img/pkm/10.gif", types: ["bug"] },
  { name: "Metapod", img: "img/pkm/11.gif", types: ["bug"] },
  { name: "Butterfree", img: "img/pkm/12.gif", types: ["bug", "flying"] },
  { name: "Weedle", img: "img/pkm/13.gif", types: ["bug", "poison"] },
  { name: "Kakuna", img: "img/pkm/14.gif", types: ["bug", "poison"] },
  { name: "Beedrill", img: "img/pkm/15.gif", types: ["bug", "poison"] },
  { name: "Pidgey", img: "img/pkm/16.gif", types: ["normal", "flying"] },
  { name: "Pidgeotto", img: "img/pkm/17.gif", types: ["normal", "flying"] },
  { name: "Pidgeot", img: "img/pkm/18.gif", types: ["normal", "flying"] },
  { name: "Rattata", img: "img/pkm/19.gif", types: ["normal"] },
  { name: "Raticate", img: "img/pkm/20.gif", types: ["normal"] },
  { name: "Spearow", img: "img/pkm/21.gif", types: ["normal", "flying"] },
  { name: "Fearow", img: "img/pkm/22.gif", types: ["normal", "flying"] },
  { name: "Ekans", img: "img/pkm/23.gif", types: ["poison"] },
  { name: "Arbok", img: "img/pkm/24.gif", types: ["poison"] },
  { name: "Pikachu", img: "img/pkm/25.gif", types: ["electric"] },
  { name: "Raichu", img: "img/pkm/26.gif", types: ["electric"] },
  { name: "Sandshrew", img: "img/pkm/27.gif", types: ["ground"] },
  { name: "Sandslash", img: "img/pkm/28.gif", types: ["ground"] },
  { name: "Nidoran♀", img: "img/pkm/29.gif", types: ["poison"] },
  { name: "Nidorina", img: "img/pkm/30.gif", types: ["poison"] },
  { name: "Nidoqueen", img: "img/pkm/31.gif", types: ["poison", "ground"] },
  { name: "Nidoran♂", img: "img/pkm/32.gif", types: ["poison"] },
  { name: "Nidorino", img: "img/pkm/33.gif", types: ["poison"] },
  { name: "Nidoking", img: "img/pkm/34.gif", types: ["poison", "ground"] },
  { name: "Clefairy", img: "img/pkm/35.gif", types: ["fairy"] },
  { name: "Clefable", img: "img/pkm/36.gif", types: ["fairy"] },
  { name: "Vulpix", img: "img/pkm/37.gif", types: ["fire"] },
  { name: "Ninetales", img: "img/pkm/38.gif", types: ["fire"] },
  { name: "Jigglypuff", img: "img/pkm/39.gif", types: ["normal", "fairy"] },
  { name: "Wigglytuff", img: "img/pkm/40.gif", types: ["normal", "fairy"] },
  { name: "Zubat", img: "img/pkm/41.gif", types: ["poison", "flying"] },
  { name: "Golbat", img: "img/pkm/42.gif", types: ["poison", "flying"] },
  { name: "Oddish", img: "img/pkm/43.gif", types: ["grass", "poison"] },
  { name: "Gloom", img: "img/pkm/44.gif", types: ["grass", "poison"] },
  { name: "Vileplume", img: "img/pkm/45.gif", types: ["grass", "poison"] },
  { name: "Paras", img: "img/pkm/46.gif", types: ["bug", "grass"] },
  { name: "Parasect", img: "img/pkm/47.gif", types: ["bug", "grass"] },
  { name: "Venonat", img: "img/pkm/48.gif", types: ["bug", "poison"] },
  { name: "Venomoth", img: "img/pkm/49.gif", types: ["bug", "poison"] },
  { name: "Diglett", img: "img/pkm/50.gif", types: ["ground"] },
  { name: "Dugtrio", img: "img/pkm/51.gif", types: ["ground"] },
  { name: "Meowth", img: "img/pkm/52.gif", types: ["normal"] },
  { name: "Persian", img: "img/pkm/53.gif", types: ["normal"] },
  { name: "Psyduck", img: "img/pkm/54.gif", types: ["water"] },
  { name: "Golduck", img: "img/pkm/55.gif", types: ["water"] },
  { name: "Mankey", img: "img/pkm/56.gif", types: ["fighting"] },
  { name: "Primeape", img: "img/pkm/57.gif", types: ["fighting"] },
  { name: "Growlithe", img: "img/pkm/58.gif", types: ["fire"] },
  { name: "Arcanine", img: "img/pkm/59.gif", types: ["fire"] },
  { name: "Poliwag", img: "img/pkm/60.gif", types: ["water"] },
  { name: "Poliwhirl", img: "img/pkm/61.gif", types: ["water"] },
  { name: "Poliwrath", img: "img/pkm/62.gif", types: ["water", "fighting"] },
  { name: "Abra", img: "img/pkm/63.gif", types: ["psychic"] },
  { name: "Kadabra", img: "img/pkm/64.gif", types: ["psychic"] },
  { name: "Alakazam", img: "img/pkm/65.gif", types: ["psychic"] },
  { name: "Machop", img: "img/pkm/66.gif", types: ["fighting"] },
  { name: "Machoke", img: "img/pkm/67.gif", types: ["fighting"] },
  { name: "Machamp", img: "img/pkm/68.gif", types: ["fighting"] },
  { name: "Bellsprout", img: "img/pkm/69.gif", types: ["grass", "poison"] },
  { name: "Weepinbell", img: "img/pkm/70.gif", types: ["grass", "poison"] },
  { name: "Victreebel", img: "img/pkm/71.gif", types: ["grass", "poison"] },
  { name: "Tentacool", img: "img/pkm/72.gif", types: ["water", "poison"] },
  { name: "Tentacruel", img: "img/pkm/73.gif", types: ["water", "poison"] },
  { name: "Geodude", img: "img/pkm/74.gif", types: ["rock", "ground"] },
  { name: "Graveler", img: "img/pkm/75.gif", types: ["rock", "ground"] },
  { name: "Golem", img: "img/pkm/76.gif", types: ["rock", "ground"] },
  { name: "Ponyta", img: "img/pkm/77.gif", types: ["fire"] },
  { name: "Rapidash", img: "img/pkm/78.gif", types: ["fire"] },
  { name: "Slowpoke", img: "img/pkm/79.gif", types: ["water", "psychic"] },
  { name: "Slowbro", img: "img/pkm/80.gif", types: ["water", "psychic"] },
  { name: "Magnemite", img: "img/pkm/81.gif", types: ["electric", "steel"] },
  { name: "Magneton", img: "img/pkm/82.gif", types: ["electric", "steel"] },
  { name: "Farfetch'd", img: "img/pkm/83.gif", types: ["normal", "flying"] },
  { name: "Doduo", img: "img/pkm/84.gif", types: ["normal", "flying"] },
  { name: "Dodrio", img: "img/pkm/85.gif", types: ["normal", "flying"] },
  { name: "Seel", img: "img/pkm/86.gif", types: ["water"] },
  { name: "Dewgong", img: "img/pkm/87.gif", types: ["water", "ice"] },
  { name: "Grimer", img: "img/pkm/88.gif", types: ["poison"] },
  { name: "Muk", img: "img/pkm/89.gif", types: ["poison"] },
  { name: "Shellder", img: "img/pkm/90.gif", types: ["water"] },
  { name: "Cloyster", img: "img/pkm/91.gif", types: ["water", "ice"] },
  { name: "Gastly", img: "img/pkm/92.gif", types: ["ghost", "poison"] },
  { name: "Haunter", img: "img/pkm/93.gif", types: ["ghost", "poison"] },
  { name: "Gengar", img: "img/pkm/94.gif", types: ["ghost", "poison"] },
  { name: "Onix", img: "img/pkm/95.gif", types: ["rock", "ground"] },
  { name: "Drowzee", img: "img/pkm/96.gif", types: ["psychic"] },
  { name: "Hypno", img: "img/pkm/97.gif", types: ["psychic"] },
  { name: "Krabby", img: "img/pkm/98.gif", types: ["water"] },
  { name: "Kingler", img: "img/pkm/99.gif", types: ["water"] },
  { name: "Voltorb", img: "img/pkm/100.gif", types: ["electric"] },
  { name: "Electrode", img: "img/pkm/101.gif", types: ["electric"] },
  { name: "Exeggcute", img: "img/pkm/102.gif", types: ["grass", "psychic"] },
  { name: "Exeggutor", img: "img/pkm/103.gif", types: ["grass", "psychic"] },
  { name: "Cubone", img: "img/pkm/104.gif", types: ["ground"] },
  { name: "Marowak", img: "img/pkm/105.gif", types: ["ground"] },
  { name: "Hitmonlee", img: "img/pkm/106.gif", types: ["fighting"] },
  { name: "Hitmonchan", img: "img/pkm/107.gif", types: ["fighting"] },
  { name: "Lickitung", img: "img/pkm/108.gif", types: ["normal"] },
  { name: "Koffing", img: "img/pkm/109.gif", types: ["poison"] },
  { name: "Weezing", img: "img/pkm/110.gif", types: ["poison"] },
  { name: "Rhyhorn", img: "img/pkm/111.gif", types: ["ground", "rock"] },
  { name: "Rhydon", img: "img/pkm/112.gif", types: ["ground", "rock"] },
  { name: "Chansey", img: "img/pkm/113.gif", types: ["normal"] },
  { name: "Tangela", img: "img/pkm/114.gif", types: ["grass"] },
  { name: "Kangaskhan", img: "img/pkm/115.gif", types: ["normal"] },
  { name: "Horsea", img: "img/pkm/116.gif", types: ["water"] },
  { name: "Seadra", img: "img/pkm/117.gif", types: ["water"] },
  { name: "Goldeen", img: "img/pkm/118.gif", types: ["water"] },
  { name: "Seaking", img: "img/pkm/119.gif", types: ["water"] },
  { name: "Staryu", img: "img/pkm/120.gif", types: ["water"] },
  { name: "Starmie", img: "img/pkm/121.gif", types: ["water", "psychic"] },
  { name: "Mr. Mime", img: "img/pkm/122.gif", types: ["psychic", "fairy"] },
  { name: "Scyther", img: "img/pkm/123.gif", types: ["bug", "flying"] },
  { name: "Jynx", img: "img/pkm/124.gif", types: ["ice", "psychic"] },
  { name: "Electabuzz", img: "img/pkm/125.gif", types: ["electric"] },
  { name: "Magmar", img: "img/pkm/126.gif", types: ["fire"] },
  { name: "Pinsir", img: "img/pkm/127.gif", types: ["bug"] },
  { name: "Tauros", img: "img/pkm/128.gif", types: ["normal"] },
  { name: "Magikarp", img: "img/pkm/129.gif", types: ["water"] },
  { name: "Gyarados", img: "img/pkm/130.gif", types: ["water", "flying"] },
  { name: "Lapras", img: "img/pkm/131.gif", types: ["water", "ice"] },
  { name: "Ditto", img: "img/pkm/132.gif", types: ["normal"] },
  { name: "Eevee", img: "img/pkm/133.gif", types: ["normal"] },
  { name: "Vaporeon", img: "img/pkm/134.gif", types: ["water"] },
  { name: "Jolteon", img: "img/pkm/135.gif", types: ["electric"] },
  { name: "Flareon", img: "img/pkm/136.gif", types: ["fire"] },
  { name: "Porygon", img: "img/pkm/137.gif", types: ["normal"] },
  { name: "Omanyte", img: "img/pkm/138.gif", types: ["rock", "water"] },
  { name: "Omastar", img: "img/pkm/139.gif", types: ["rock", "water"] },
  { name: "Kabuto", img: "img/pkm/140.gif", types: ["rock", "water"] },
  { name: "Kabutops", img: "img/pkm/141.gif", types: ["rock", "water"] },
  { name: "Aerodactyl", img: "img/pkm/142.gif", types: ["rock", "flying"] },
  { name: "Snorlax", img: "img/pkm/143.gif", types: ["normal"] },
  { name: "Articuno", img: "img/pkm/144.gif", types: ["ice", "flying"] },
  { name: "Zapdos", img: "img/pkm/145.gif", types: ["electric", "flying"] },
  { name: "Moltres", img: "img/pkm/146.gif", types: ["fire", "flying"] },
  { name: "Dratini", img: "img/pkm/147.gif", types: ["dragon"] },
  { name: "Dragonair", img: "img/pkm/148.gif", types: ["dragon"] },
  { name: "Dragonite", img: "img/pkm/149.gif", types: ["dragon", "flying"] },
  { name: "Mewtwo", img: "img/pkm/150.gif", types: ["psychic"] },
  { name: "Mew", img: "img/pkm/151.gif", types: ["psychic"] },
  // Agrega más pokémon con sus tipos
];

// Cargar las tarjetas de todos los pokémon
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

// Filtrar pokémon por tipos seleccionados
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

// Cargar todos los pokémon al inicio
loadCards(pokemons);

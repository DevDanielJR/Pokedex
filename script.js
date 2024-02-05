
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 8;
let offset = 0;

function loadPokemonsItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonOl = []) => {
        const newHtml = pokemonOl.map((pokemon) => `
            <!--${pokemon.name}-->
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonsItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonsItens(offset, limit);
})

import axios from "axios"

const getPokemonList = async () => {
  const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100");
  return resp.data;
}

const getPokemon = async id => {
  const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return resp.data;
}

const getPokemonImageUrl = id => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export {
  getPokemonList,
  getPokemon,
  getPokemonImageUrl
}
import Image from "next/image";
import PokemonGrid from "../../../pokemons/components/PokemonGrid";

const getPokemons = async( limit = 20, offset = 0) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(resp => resp.json());

    // Se maneja el la respuesta de la API
    const data = response.results.map( pokemon => ({
      id : pokemon.url.split('/').at(-2),
      name : pokemon.name,
    }))

    //throw new Error('Ésto es un error que no debería de suceder');
    return data
}


export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Listado de Pokémones <small className="text-blue-500">estático</small></span>

      <PokemonGrid pokemons={pokemons}/>      
    </div>
  );
}
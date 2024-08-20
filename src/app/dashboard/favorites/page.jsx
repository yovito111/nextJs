import Image from "next/image";
import PokemonGrid from "../../../pokemons/components/PokemonGrid";
import { title } from "process";

export const metadata = {
    title: 'favoritos',
    description: 'Sección de Favoritos'
}


export default async function PokemonsPage() {

    return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokemones Favoritos <small className="text-blue-500">estático</small></span>

      <PokemonGrid pokemons={[]}/>      
    </div>
  );
}
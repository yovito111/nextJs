import Image from 'next/image'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonGrid( {pokemons} ) {
  return (
    <div className='flex flex   -wrap gap-10 items-center justify-center'>
        
      {
        pokemons.map( pokemon => 
            <PokemonCard pokemons = {pokemon}/>
        )
      }
    </div>
  )
}

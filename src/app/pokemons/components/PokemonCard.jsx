import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function PokemonCard(pokemon) {
    console.log(pokemon.pokemons.id);
    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="felx flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokemons.id}.svg`}
                        width={100}
                        height={100}
                        alt={pokemon.pokemons.name}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50">{pokemon.pokemons.name}</p>
                </div>
                <div className="border-b">
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex">

                        <div className="text-green-600">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                Campaigns
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>

                    </Link>
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex">

                        <div className="text-gray-800">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">Donations</p>
                            <p className="text-xs text-gray-500">View your last donations</p>
                        </div>

                    </Link>
                </div>

                <div className="">
                    <button href="#" className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
                        <p className="text-sm font-medium text-gray-800 leading-none"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-4 w-4 text-gray-800 fill-current animate-spin" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"></path></svg> Logout
                        </p>
                    </button>
                </div>
            </div>
        </div>

    )
}

import Image from 'next/image'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoCalculator, IoSearch } from "react-icons/io5";
import {SideBarMenuItems} from './SideBarMenuItem'
import { GiAnimalSkull } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";


const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoSearch size={30}/>,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={30}/>,
        title: 'Counter',
        subTitle: 'Contador client side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <GiAnimalSkull size={30}/>,
        title: 'Pokemons',
        subTitle: 'Pokemons list'
    },
    {
        path: '/dashboard/favorites',
        icon: <GrFavorite   size={30}/>,
        title: 'favorites',
        subTitle: 'favorites list'
    },
] 

export default function SideBar() {
    return (
        <div id="menu"
            style={{ width: '400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <FaReact className='m-2'/>
                    <spam>Dash</spam>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8"
                            src="https://wallpapercave.com/wp/wp7757977.jpg"
                            alt="User Avatar"
                            width={50}
                            height={50} />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Giovanni Cáceres
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    menuItems.map(item => (
                        <SideBarMenuItems key={item.path} {...item}/>
                    ))
                }
            </div>
        </div>

    )
}

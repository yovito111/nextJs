'use client'
import React from 'react';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const SideBarMenuItems = ({ path, icon, title, subTitle }) => {
    const currentPath = usePathname();
    return (
        <Link href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150
    ${currentPath === path ? 'bg-blue-800' : ''}
    `}>
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">{title}</span>
                <span className="text-sm text-slate-500 hidden md:block">{subTitle}</span>
            </div>
        </Link>
    );
};

SideBarMenuItems.propTypes = {
    path: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};




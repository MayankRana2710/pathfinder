'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const path = usePathname();
    const links = [
        { path: '/', label: 'Home' },
        { path: '/static/about', label: 'About' },
        { path: '/static/contact', label: 'Contact' }
    ];
    const final_path = links.filter(i => i.path !== path);

    return (
        <div>
            <div className="nav justify-between">
                <div className='nav_logo'>PATHFINDER</div>
                <div className='nav_item'>
                    {final_path.map(i => (
                        <Link key={i.path} href={i.path} className='nav_keys'>{i.label}</Link>
                    ))}
                    <Link href='signin' className='nav_signin'>Sign In</Link>
                    <Link href='signup' className='nav_signup'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar

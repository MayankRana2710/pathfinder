'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    
    const path = usePathname();
    const links = [
                {path: '/', label: 'Home'},
                {path: '/login', label: 'Login'},
                {path: '/about', label: 'About'},
                {path: '/contact', label: 'Contact'}
            ];
    const final_path=links.filter(i=>i.path!==path);

    return (
        <div>
            <div className="bg-[#0b635b] flex justify-between items-center p-4 px-5 font-bold text-[#e9f5f3]">
                <Image className='rounded-2xl'
                    src="/2.PNG"
                    alt="logo"
                    width={250}
                    height={250}
                />
                <div className='flex gap-5 items-center'>
                    {final_path.map(i=>(
                        <Link key={i.path} href={i.path}>{i.label}</Link>
                    ))}
                    <Link href='signin' className='border border-[#e9f5f3] rounded-sm p-1.5'>Sign In</Link>
                    <Link href='signup' className='border border-[#e9f5f3] rounded-sm p-1.5 text-[#0b635b] bg-[#e9f5f3]'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar

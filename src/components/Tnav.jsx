'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const path=usePathname();
    const heading={"/topics/dsa":"Data Structure and Algorithm",
        "/topics/devops":"Dev Operations",
        "/topics/blockchain":"Blockchain",
        "/topics/cs":"Cyber Security",
        "/topics/webdev":"Web Development"
    };
    return (
        <div>
            <div className='tnav'>
                <div className='tnav_content'>{heading[path]}</div>
            </div>
            <hr className='horizontal'/>
        </div>
    );
}

export default Navbar

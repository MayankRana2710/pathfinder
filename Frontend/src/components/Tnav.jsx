'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const path=usePathname();
    const topic={"/dsa":["Data Structure and Algorithm",""],
        "/devops":"Dev Operations",
        "/blockchain":"Blockchain",
        "/cs":"Cyber Security",
        "/webdev":"Web Development"
    };
    return (
        <div>
            <div className='tnav'>
                <div className='tnav_content'>{topic[path]}</div>
            </div>
            <hr className='horizontal'/>
        </div>
    );
}

export default Navbar

import React from 'react'

const Navbar = () => {
    return (
        <div >
            <div className="bg-blue-400 h-16 flex items-center">
                <ul className="flex gap-5">
                    <li className="px-4 cursor-pointer hover:text-white">Home</li>
                    <li className="px-4 cursor-pointer hover:text-white">Skill</li>
                    <li className="px-4 cursor-pointer hover:text-white">Mood</li>
                    <li className="px-4 cursor-pointer hover:text-white">About</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

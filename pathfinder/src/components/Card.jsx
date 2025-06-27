import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const card = ({ title, desc, image, route}) => {
    return (
        <div className='flex flex-col w-[30vw] h-[40vh] justify-center border-4 rounded-lg' style={{borderColor:"var(--second-color)"}}>
            <div className='flex items-center p-5 gap-5'>
                <Image className='border-4 rounded-lg'
                    src={image}
                    alt="picture"
                    width="150"
                    height="150"
                    style={{borderColor:"var(--second-color)"}}
                />
                <Link href={route} className='font-bold text-3xl' style={{color:"var(--second-color)"}}>{title}</Link>
            </div>
            <div className='text-gray-700 px-5 font-bold'>{desc}</div>
        </div>
    )
}

export default card

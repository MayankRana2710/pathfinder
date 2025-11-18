import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const card = ({ title, desc, image, route }) => {
    return (
        <div className='card'>
            <div className="card-inner">
                <div className="card-front">
                    <Link href={route}>{title}</Link>
                </div>
                <div className="card-back"> 
                    <Image
                    src={image}
                    alt="picture"
                    width="150"
                    height="150"
                    className="filter brightness-0 invert"
                />
                </div>
            </div>
        </div>



    )
}

export default card

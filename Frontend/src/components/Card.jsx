import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const card = ({ title, desc, image, route}) => {
    return (
        <div className='card'>
            <div className='card_comp_1'>
                <Image className='card_comp_1_img'
                    src={image}
                    alt="picture"
                    width="150"
                    height="150"     
                />
                <Link href={route} className='card_comp_1_link'>{title}</Link>
            </div>
            {/* <div className='card_comp_2'>{desc}</div> */}
        </div>
    )
}

export default card

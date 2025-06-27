import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'

const flashcard = [
  {
    topic: "Data Structure and Algorithms",
    desc: "Data Structure and Algorithms",
    img: "/1.png",
    route:"dsa"
  },
  {
    topic: "Web Development",
    desc: "Web Development",
    img: "/1.png",
    route:"webdev"
  },
  {
    topic: "Cyber Security",
    desc: "Cyber Security",
    img: "/1.png",
    route:"cs"
  },
  {
    topic: "Blockchain",
    desc: "Blockchain",
    img: "/1.png",
    route:"blockchain"
  },
  {
    topic: "Dev Operations",
    desc: "Dev Operations",
    img: "/1.png",
    route:"devops"
  }
]
const page = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col h-[20vh] p-8 items-start justify-start'>
        <h1 className='text-[#0b635b] font-bold mb-4 text-5xl'>lets get started</h1>
        <p className='text-gray-700 text-2xl'>choose your path</p>
      </div>
      <div className='flex flex-wrap gap-10 p-6'>
          {flashcard.map((element,index)=>(
              <Card
                  key={index}
                  title={element.topic}
                  desc={element.desc}
                  image={element.img}
                  route={element.route}
              />
          ))}
      </div>
      <Footer />
    </div>
  );
}
export default page

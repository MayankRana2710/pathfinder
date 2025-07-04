import React from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'

const flashcard = [
  {
    topic: "Data Structure and Algorithms",
    desc: "Data Structure and Algorithms",
    img: "/dsa.svg",
    route:"dsa"
  },
  {
    topic: "Web Development",
    desc: "Web Development",
    img: "/webdev.svg",
    route:"webdev"
  },
  {
    topic: "Cyber Security",
    desc: "Cyber Security",
    img: "/cs.svg",
    route:"cs"
  },
  {
    topic: "Blockchain",
    desc: "Blockchain",
    img: "/blockchain.svg",
    route:"blockchain"
  },
  {
    topic: "Dev Operations",
    desc: "Dev Operations",
    img: "/devops.svg",
    route:"devops"
  }
]
const page = () => {
  return (
    <div>
      <Navbar />
      {/* <div className='home'>
        <h1 className='home_text text-4xl '>LETS GET STARTED</h1>
        <p className=' home_text text-2xl '>choose your path.....</p>
      </div> */}
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
    </div>
  );
}
export default page

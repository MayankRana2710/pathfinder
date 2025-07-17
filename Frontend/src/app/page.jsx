import React from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'

const flashcard = [
  {
    topic: "Data Structure and Algorithms",
    desc: "Data Structure and Algorithms",
    img: "/dsa.svg",
    route:"/topics/dsa"
  },
  {
    topic: "Web Development",
    desc: "Web Development",
    img: "/webdev.svg",
    route:"/topics/webdev"
  },
  {
    topic: "Cyber Security",
    desc: "Cyber Security",
    img: "/cs.svg",
    route:"/topics/cs"
  },
  {
    topic: "Blockchain",
    desc: "Blockchain",
    img: "/blockchain.svg",
    route:"/topics/blockchain"
  },
  {
    topic: "Dev Operations",
    desc: "Dev Operations",
    img: "/devops.svg",
    route:"/topics/devops"
  }
]
const page = () => {
  return (
    <div>
      <Navbar />
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

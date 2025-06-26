import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
const page = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col h-[80vh] p-10 items-start justify-start'>
        <h1 className='text-[#0b635b] font-bold mb-4 text-5xl'>lets get started</h1>
        <p className='text-gray-700 text-2xl'>this is your roadway to the correct path</p>
      </div>
      <div>

      </div>
      <Footer/>
    </div>
  );
}

export default page


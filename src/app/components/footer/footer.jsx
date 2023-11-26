import React from 'react'
import { Facebook, Twitter, Linkedin, CCircle } from 'react-bootstrap-icons'
import Link from 'next/link'

const Footer = () => {
  return (

    <footer className='w-screen bg-[#590D22] flex flex-row justify-around items-center flex-wrap py-24 pl-5'>


        <div className='w-full flex flex-row flex-wrap justify-around items-start gap-y-10'>
        <div className='w-[300px] flex flex-col justify-start items-start gap-5'>
          <span className="font-semibold text-2xl text-center text-white">Virtual Bills</span>
          <div className='w-full flex justify-start items-center gap-5 text-[#590D22] '>


         <a className='text-white text-start font-extralight w-full text-lg'>Our Automation, Your Satisfaction</a>

        </div>

        </div>
        <div className='w-[300px] flex flex-col justify-start items-start gap-5'>
          <span className="font-semibold text-2xl text-center text-white">Quick Links</span>
          <Link className='text-white hover:text-[#FFCCD5]' href='/home'>Home</Link>
          <Link className='text-white hover:text-[#FFCCD5]' href='about'>About</Link>
          <Link className='text-white hover:text-[#FFCCD5]' href='/services'>Services</Link>
          <Link className='text-white hover:text-[#FFCCD5]' href='/contact'>Contact</Link>


        </div>



        </div>
        <span className='my-12 w-[90%] border-t-[1px] border-b-0 border-[#FFF0F3]'></span>
        <div className='text-white text-center font-light'>
          <CCircle className='inline'/> 2023 Virtual Bills. All rights reserved
        </div>


    </footer>
  )
}

export default Footer
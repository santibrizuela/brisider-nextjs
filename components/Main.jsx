import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { BsPersonVcard } from 'react-icons/bs'
import bsLogo from '../public/assets/bsLogoEsmerald.png'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center mask'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-100 font-bold'>Digitalizamos tu Marca</p>
                <Image src={bsLogo} alt='Green Card y Residencia'/>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-gray-300'>
                    <Link target='_blank' href='https://www.whatsapp.com/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineWhatsApp/>
                        </div>
                    </Link>
                    <Link target='_blank' href='https://www.linkedin.com/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineLinkedin/>
                        </div>
                    </Link>
                    <Link href='/#contact'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </Link>
                    <Link href='/#portfolio'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsPersonVcard/>
                        </div>
                    </Link>
                    <Link target='_blank' href='https://www.instagram.com/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineInstagram/>
                        </div>
                    </Link>    
                </div>
                
                <Link href='/#services'>
                    <div className='btn-outline'>
                        <p className='p-2'>Servicios</p>
                    </div>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Main
import React from 'react'
import {TbWorldWww} from 'react-icons/tb'
import {BsImage, BsPencilSquare} from 'react-icons/bs'
import {GoDeviceMobile} from 'react-icons/go'
import Link from 'next/link'

const Services = () => {
  return (
    <div id='services' className='w-full lg:h-screen py-20 lg:p-2 text-center'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-emerald-500'>Servicios</p>
            <h2 className='py-4'>¿Qué tenemos para tí?</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                

                <Link href='/services/webSites'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-emerald-500 hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><TbWorldWww className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Sitios Webs</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/services/graphicDesign'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-emerald-500 hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><BsImage className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Diseño Gráfico</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/services/branding'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-emerald-500 hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><BsPencilSquare className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Marcas</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/services/socialMedia'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-emerald-500 hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><GoDeviceMobile className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>Redes Sociales</h3>
                            </div>                        
                        </div>
                    </div>
                </Link> 
                
            </div>
        </div>
        
    </div>
  )
}

export default Services
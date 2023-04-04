import Image from 'next/image'
import React from 'react'
import servicesImg from '../../public/assets/servicesBranding.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const branding = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={servicesImg} alt='Graphic Design'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2  text-emerald-500'>Desarrollo de Marca</h2>
                
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h3 className='text-xl font-bold pb-5 underline'>Proceso del Desarrollo de Marca</h3>
                <p className='pb-2'>El desarrollo de branding es un proceso crítico para cualquier empresa 
                o marca. Se trata de establecer la identidad visual y de marca que se utilizará para 
                representar y comunicar los valores, la personalidad y la visión de la empresa a sus clientes 
                y al público en general.
                </p>

                <p className='pb-2'>El objetivo del desarrollo de branding es crear una imagen distintiva y 
                coherente de la marca, que se refleje en todos los aspectos de la empresa, desde el diseño del 
                logotipo y el sitio web hasta la forma en que se comunican los mensajes de marketing. Un 
                branding sólido puede aumentar la visibilidad de la marca, construir la lealtad de los clientes 
                y establecer una ventaja competitiva en el mercado.
                </p>

                <p className='pb-2'>Para lograr un branding exitoso, es importante comprender a la audiencia 
                objetivo, así como los valores y la personalidad de la marca. También se debe desarrollar una 
                estrategia de branding sólida que incluya la creación de un logotipo, la elección de colores y 
                tipografía, y la implementación de una voz de marca coherente en todos los canales de comunicación. 
                Con un enfoque estratégico y una visión clara, el desarrollo de branding puede ser un proceso 
                emocionante y gratificante para cualquier empresa.
                </p>
                <Link href='/#portfolio'>
                    <button className='btn btn-outline px-8 py-2 mt-4 mr-8 text-emerald-500'>Portfolio</button>
                </Link>
                <Link target='_blank' href='https://www.whatsapp.com/'>
                    <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Whatsapp</button>
                </Link>
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Condiciona</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Imagotipo
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Gama de colores
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Sitio Web
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Tipografía
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Marketing
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Redes Sociales
                        </p>
                    </div>
                </div>

            </div>
            <Link href='/#services'>
                <p className='underline cursor-pointer font-bold'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default branding
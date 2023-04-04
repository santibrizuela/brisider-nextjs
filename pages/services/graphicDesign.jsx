import Image from 'next/image'
import React from 'react'
import servicesImg from '../../public/assets/servicesGraphicDesign.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const graphicDesign = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={servicesImg} alt='Graphic Design'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2  text-emerald-500'>Diseño Gráfico</h2>
                
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h3 className='text-xl font-bold pb-5 underline'>Planificación para Sitios Web</h3>
                <p className='pb-2'>Desarrollar un diseño gráfico efectivo para una marca es fundamental 
                para lograr su éxito en las redes sociales, sitios web y anuncios o propagandas. En primer 
                lugar, se debe definir una paleta de colores que represente a la marca y atraiga a su 
                público objetivo. Esta paleta de colores debe ser coherente en todas las plataformas en las 
                que se presente la marca.
                </p>

                <p className='pb-2'>Una vez que se tiene la paleta de colores definida, se pueden crear 
                gráficos para fondos o plantillas para feeds de redes sociales. Estas plantillas deben ser 
                diseñadas de manera que se destaque la marca y se atraiga la atención del público. Es 
                importante que estas plantillas sean coherentes con la paleta de colores de la marca y con 
                su estilo gráfico.
                </p>

                <p className='pb-2'>Existen varios estilos de diseño que se pueden utilizar para desarrollar 
                la identidad visual de una marca. Uno de ellos es el estilo Minimalista que utiliza colores claros y formas 
                simples para crear una estética limpia y moderna. Es ideal para marcas que quieren transmitir 
                una imagen sofisticada y elegante. 
                Otro es el estilo Retro el cual utiliza colores brillantes y 
                elementos gráficos de la década de 1970 y 1980 para crear una estética nostálgica y divertida. 
                Es ideal para marcas que quieren transmitir una sensación de nostalgia o para productos que se 
                relacionan con el pasado.
                Por último, el estilo Ilustrado utiliza ilustraciones y gráficos para crear una estética lúdica 
                y divertida. Es ideal para marcas que quieren transmitir una sensación de diversión y creatividad.
                </p>

                <p className='pb-2'>Para desarrollar estos estilos de diseño, se pueden utilizar varias tecnologías 
                funcionales, como Photoshop, Illustrator y otros programas de diseño gráfico. Estos programas permiten 
                a los diseñadores crear y editar imágenes, gráficos y diseños para que sean coherentes con la 
                identidad visual de la marca. También se pueden utilizar herramientas en línea como Canva o Figma para 
                crear diseños gráficos de manera más fácil y rápida.
                </p>

                <p className='pb-2'>En resumen, el desarrollo del diseño gráfico para una marca implica definir una 
                paleta de colores coherente, crear gráficos y plantillas atractivas y utilizar diferentes estilos de 
                diseño para transmitir la personalidad de la marca. Para lograr esto, se pueden utilizar diferentes 
                tecnologías funcionales, como Photoshop, Illustrator, Canva y Figma, entre otras.
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
                    <p className='text-center font-bold pb-2'>Herramientas</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Photoshop
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Illustrator
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Figma
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Canva
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

export default graphicDesign
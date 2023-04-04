import Image from 'next/image'
import React from 'react'
import servicesImg from '../../public/assets/servicesWebSites.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const webSites = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={servicesImg} alt='Web Sites'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2  text-emerald-500'>Desarrollo Web</h2>
                
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h3 className='text-xl font-bold pb-5 underline'>Planificación para Sitios Web</h3>
                <p className='pb-2'>¡Claro! Planificar un sitio web es crucial para lograr los objetivos que se buscan. 
                    Lo primero que se debe hacer es definir qué se quiere lograr con el sitio web. 
                    ¿Queremos que se vean nuestros productos en línea? ¿O queremos que los clientes se 
                    contacten inmediatamente con nosotros? ¿Quizás queremos resaltar la ubicación de 
                    nuestro local? Una vez que tengamos claros los objetivos, podemos pasar a la siguiente fase.
                </p>

                <p className='pb-2'>En la fase de Diseño, se debe crear una plantilla de cómo quedaría el sitio. Se elige 
                    una paleta de colores con la que se va a trabajar y se prepara un bosquejo de logo si 
                    es que no existe. Es importante que el diseño del sitio web esté en línea con la 
                    imagen de la marca además que sea atractivo y fácil de navegar.

                </p>

                <p className='pb-2'>En la primera fase del Desarrollo, se eligen las tecnologías que se van a utilizar para 
                    desarrollar el sitio web. Esto puede variar dependiendo de si se va a crear una landing 
                    page (HTML-CSS-JS) o una app (React-Tailwind-Nextjs). Es importante elegir las 
                    herramientas adecuadas para lograr los objetivos que se han definido previamente. <br />

                    En la segunda fase, se cargan las imágenes necesarias, se corrige el copywriting y se da 
                    funcionalidad al sitio. Es importante que el contenido del sitio web sea relevante y esté 
                    actualizado. Además, se deben incluir todas las funcionalidades necesarias para lograr 
                    los objetivos, como un formulario de contacto o una tienda en línea.
                </p>

                <p className='pb-2'>Para el Lanzamiento del sitio web, se debe poner en línea para que pueda ser testeado y 
                    corregido si es necesario. Es importante asegurarse de que el sitio web esté optimizado 
                    para los motores de búsqueda y que tenga una buena velocidad de carga.
                </p>

                <p className='pb-2'>Por último, se deben marcar Objetivos de posicionamiento según el producto y el marketing. 
                    Además, se deben definir objetivos de mantenimiento web, como promociones, actualización 
                    de catálogo y cambio de horario o domicilio. De esta manera, se garantiza que el sitio web 
                    esté siempre actualizado y funcione de manera óptima.
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
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> JS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> React
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Angular
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Nextjs
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> NodeJs
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Github
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Vercel
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Firebase
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> TypeScript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Tailwind
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Bootstrap
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> FormSubmit
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Responsive
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

export default webSites
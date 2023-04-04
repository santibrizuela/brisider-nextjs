import Image from 'next/image'
import React from 'react'
import servicesImg from '../../public/assets/servicesSocialMedia.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const socialMedia = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={servicesImg} alt='Graphic Design'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2  text-emerald-500'>Redes Sociales</h2>
                
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h3 className='text-xl font-bold pb-5 underline'>Manejo de Redes</h3>
                <p className='pb-2'>Se puede ofrecer una amplia gama de servicios para manejar tus redes 
                sociales. Desde la creación de perfiles en plataformas relevantes para tu negocio, hasta 
                la gestión de contenido, análisis de métricas y publicidad en redes sociales.
                </p>

                <p className='pb-2'>Nuestro equipo de redes sociales puede 
                ayudarte a crear contenido de alta calidad que atraiga a tu público objetivo y aumente 
                el compromiso en tus perfiles de redes sociales. Además, puede manejar la programación 
                y publicación de contenido para asegurarse de que siempre haya algo nuevo y emocionante 
                para tus seguidores.
                </p>

                <p className='pb-2'>También pueden ayudarte a monitorear y analizar las métricas de tus 
                redes sociales para obtener información valiosa sobre tus seguidores y el desempeño de 
                tus publicaciones. Con esta información, puedes ajustar tu estrategia de contenido y 
                publicidad para maximizar el alcance y el engagement.
                </p>

                <p className='pb-2'>Finalmente, nuestro equipo puede asesorarte para planificar y 
                ejecutar campañas publicitarias en redes sociales para aumentar la exposición de tu marca 
                y atraer nuevos clientes. Esto puede incluir estrategias de remarketing y publicidad en video.
                </p>

                <p className='pb-2'>En resumen, el manejo de redes sociales es una tarea compleja que 
                requiere tiempo y dedicación. Al contratar el servicio de Manejo de Redes, puedes estar seguro 
                de que tus perfiles de redes sociales están en buenas manos y que se está haciendo todo lo 
                posible para atraer y retener a tus seguidores y clientes potenciales.
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
                    <p className='text-center font-bold pb-2'>Ofrece</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Imagotipo
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Feed Social
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Plantillas
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Historias Destacadas
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Tipografía
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 text-emerald-500'/> Marketing
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

export default socialMedia
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import aboutImg from '../public/assets/bsLogo.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen py-20 md:p-2 flex items-center text-center'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-emerald-500'>Acerca de</p>
                <h2 className='py-4'><span className='text-emerald-500 uppercase'>Brisider</span></h2>
                <p className='py-2 text-gray-600'>Digitalizamos tu marca.</p>
                <p className='py-2 text-gray-600'>
                En Brisider, nuestro equipo está compuesto por expertos Desarrollo Software y 
                profesionales creativos en Diseño Gráfico, Branding y Manejo de Redes Sociales. Nos 
                enorgullece trabajar con empresas de diversas escalas y sectores para ayudarles a 
                alcanzar sus objetivos digitales. 
                </p>

                <p className='py-2 text-gray-600'>
                Cada proyecto que emprendemos se personaliza para satisfacer las necesidades específicas 
                de nuestros clientes y para garantizar que sus expectativas sean superadas.
                Estamos comprometidos con la excelencia en el servicio al cliente y la satisfacción del 
                cliente es siempre nuestra principal prioridad. Si buscas soluciones tecnológicas 
                personalizadas y una colaboración de confianza, no busques más que Brisider.
                </p>


                <Link href='/#contact'>
                    <p 
                        className='p-2 rounded-lg btn text-gray-200 font-bold text-lg cursor-pointer w-fit m-auto shadow-xl hover:scale-105 ease-in duration-300'
                    >
                        Contactanos
                    </p>
                </Link>
                
                
                
            </div>
            <div className='w-full h-auto scale-90 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-100 ease-in duration-300'>
                <Image className='rounded-xl' src={aboutImg} alt="ZetaGroup"></Image>
            </div>
        </div>
    </div>
  )
}

export default About
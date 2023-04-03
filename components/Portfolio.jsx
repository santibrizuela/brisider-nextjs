import React from 'react'
import portfolioZetaGroup from '../public/assets/portfolioZetaGroup.png'
import portfolioNetflix from '../public/assets/portfolioNetflix.png'
import portfolioSavino from '../public/assets/portfolioSavino.png'
import portfolioFagnani from '../public/assets/portfolioFagnani.png'
import portfolioDivano from '../public/assets/portfolioDivano.png'
import portfolioResisten from '../public/assets/portfolioResisten.png'
import portfolioFood from '../public/assets/portfolioFood.png'
import portfolioMadero from '../public/assets/portfolioMadero.png'
import PortfolioItem from './PortfolioItem'

const Projects = () => {
  return (
    <div id='portfolio' className='w-full text-center'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='py-8 text-xl tracking-widest uppercase text-emerald-500'>Portfolio</p>
            <h2 className='py-4'>Proyectos y Plantillas</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <PortfolioItem
                    title='Zeta Group'
                    backgroundImg={portfolioZetaGroup}
                    projectUrl='/portfolioZetaGroupPage'
                    detail='Asistencia al Inmigrante.'
                />

                <PortfolioItem
                    title='Netflix Clon'
                    backgroundImg={portfolioNetflix}
                    projectUrl='/portfolioNetflixPage'
                    detail='UI + Usuarios.'
                />

                <PortfolioItem
                    title='Savino SRL'
                    backgroundImg={portfolioSavino}
                    projectUrl='/portfolioSavinoPage'
                    detail='Equipos Médicos.'
                />

                <PortfolioItem
                    title='Casa Fagnani'
                    backgroundImg={portfolioFagnani}
                    projectUrl='/portfolioFagnaniPage'
                    detail='Servicios Fúnebres.'
                />

                <PortfolioItem
                    title='RE-SIS-TEN.COM'
                    backgroundImg={portfolioResisten}
                    projectUrl='/portfolioResistenPage'
                    detail='Resistencias de Avanzada.'
                />

                <PortfolioItem
                    title='Ferretería Industrial Divano'
                    backgroundImg={portfolioDivano}
                    projectUrl='/portfolioDivanoPage'
                    detail='¡Nosotros lo tenemos!.'
                />

                <PortfolioItem
                    title='Food App'
                    backgroundImg={portfolioFood}
                    projectUrl='/portfolioFoodPage'
                    detail='App-Responsive-React-CSS.'
                />

                <PortfolioItem
                    title='Madero Imprime'
                    backgroundImg={portfolioMadero}
                    projectUrl='/portfolioMaderoPage'
                    detail='Diseño e Impresión 3D.'
                />

            </div>
        </div>
    </div>
  )
}

export default Projects
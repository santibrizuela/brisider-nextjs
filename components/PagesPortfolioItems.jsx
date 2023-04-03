import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PagesPortfolioItems = ({portfolioTitle, portfolioImg, portfolioUrl, portfolioDetail, portfolioType}) => {
    return (
      

          
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={portfolioImg} alt='Green Card & Visa'/>
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>{portfolioTitle}</h2>
                    <h3>{portfolioSub}</h3>
                </div>
            </div>

            <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>{portfolioType}</p>
                    <h2>{portfolioTitle}</h2>
                    <p>{portfolioDetail}
                    </p>
                    <Link target='_blank' href={portfolioUrl}>
                        <button className='btn btn-outline px-8 py-2 mt-4 mr-8 text-emerald-500'>Demo</button>
                    </Link>
                    <Link target='_blank' href='https://www.whatsapp.com/'>
                        <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Whatsapp</button>
                    </Link>
                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center folt-bold pb-2'>Herramientas</p>
                        {portfolioTools}
                    </div>

                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer font-bold'>Back</p>
                </Link>
            </div>
        </div>


      



        


    )
  }

export default PagesPortfolioItems
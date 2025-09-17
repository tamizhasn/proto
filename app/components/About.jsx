import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData , serviceData} from '@/assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-20 scroll-mt-20 relative'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>
        About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center 
        gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='profile' className='w-full 
                rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                  I am a passionate Software Engineer dedicated to building scalable and high-performing web applications.  
                  My focus is on creating seamless, user-friendly digital experiences that solve real-world problems.  
                  With hands-on experience in both frontend and backend development, I bring complete solutions to life.  
                  I value clean, efficient code and thoughtful design in every project I work on.  
                  Throughout my journey, I’ve contributed to the success and growth of every team I’ve been part of.
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6
                max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description},index) => (
                      <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                      hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                      key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold 
                        text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>
                          {description}</p>
                      </li>
                    ))}
                </ul>
              
            </div>
        </div>

        <div className='grid grid-cols-auto gap-6 my-10'>
                    {serviceData.map(({icon, title, description, link}, index)=> (
                        <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 
                        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                            <Image src={icon} alt='' className='w-10'/>
                            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                            <p className='text-sm text-gray-600 leading-5'>
                                {description}
                            </p>
                            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                                Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
                            </a>
                        </div>
                    ))}
          </div>
    </div>
  )
}

export default About

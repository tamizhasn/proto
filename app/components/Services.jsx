import { assets } from '@/assets/assets'
import { experinceList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-20 scroll-mt-20 relative'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Areas of Expertise</h4>
      <h2 className='text-center text-5xl font-Ovo'>
        Tools I Know</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I am a passionate Software Engineer from Tamil Nadu, India, 
            with over 1 year of hands-on experience through internships 
            at various companies.</p>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {experinceList.map((experience, index) => (
                <div key={index} className="border border-gray-400 rounded-lg px-8 py-12
                hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500">
      
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                {experience.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                {experience.skills.map((skill, i) => (
                <article key={i} className="flex flex-col items-center gap-4 rounded-lg p-4 w-40">
            
                {assets[skill.toLowerCase()] ? (
                    <Image src={assets[skill.toLowerCase()]} alt={skill} width={40} height={40} className="cursor-default" />
                  ) : (
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                      N/A
                    </div>
                )}

                  <div>
                    <h3 className="text-lg font-medium">{skill}</h3>
                  </div>

                </article>
              ))}
            </div>

            </div>
          ))}
        </div>
    </div>
  )
}

export default Services

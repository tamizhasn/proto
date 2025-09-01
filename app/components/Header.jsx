import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
    items-center justify-center gap-4 relative z-10'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-64'/>
      </div>
      <h1 className='flex items-end gap-2 text-3xl md:text-5xl mt-3 font-Ovo'>
            Hello! I'm <span className='text-sky-600'>Tamilarasan</span> <Image src={assets.hand_icon} alt='' 
            className='w-7'/></h1>
      <h1 className='text-3xl sm:text-6xl lg: text-[66px] font-Ovo'>
          Software Engineer</h1>

        <p className='max-w-2xl mx-auto font-Ovo'>I am a passionate Software Engineer from Tamil Nadu, India, 
            with over 1 year of hands-on experience through internships at various companies.</p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

            <a href='#contact'
            className='px-10 py-3 border borderiwhite rounded-full bg-black text-white flex items-center gap-2'
            >contact me <Image src={assets.right_arrow_white} alt=''
            className='w-4'/></a>

            <a href='https://drive.google.com/file/d/1G8EXa50UefN2MzDI92isTHGKCX0JO-s8/view?usp=sharing' download  
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
            check resume!<Image src={assets.download_icon} alt=''
            className='w-4'/></a>

        </div>

        <div className="flex flex-row items-center gap-4 mt-4">
              <Image src={assets.linkedin} alt="LinkedIn"
                onClick={() => location.href = 'https://www.linkedin.com/in/tamizhasn/'} 
                className='w-10 hover:bg-lightHover hover:-translate-y-1 duration-500'/>
              <Image src={assets.behance} alt="Behance"
                onClick={() => location.href = 'https://www.behance.net/tamilasn'} 
                className='w-10 hover:bg-lightHover hover:-translate-y-1 duration-500'/>
              <Image src={assets.github} alt="Github"
                onClick={() => location.href = 'https://github.com/tamizhasn'} 
                className='w-10 hover:bg-lightHover hover:-translate-y-1 duration-500'/>
          </div>

    </div>
  )
}

export default Header

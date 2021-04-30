

import { RiMenuFill, RiCloseFill, RiGithubFill, RiLinkedinFill, RiTwitterFill, RiHeartFill} from 'react-icons/ri'
import Head from "next/head";
import { useTheme } from "next-themes"
import { useEffect, useState } from 'react';
import ThemeToggle from '../component/themeToggle';

export default function Home() {

  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <div className='p-2 h-full bg-gray-50 dark:bg-gray-600'>
      <style global jsx>{`
      #__next {
        height: 100%;
      }
    `}</style>
      <Head>
        <title>Khalid MOUSSAID</title>
      </Head>
      <header>
        <div className="flex flex-row justify-end">
          <div className="m-2 p-0 border border-gray-600 bg-gray-600" />
          <div className='w-12 h-6 flex items-center justify-center m-1 md:hidden cursor-pointer' onClick={toggleDrawer}>
            <RiMenuFill />
          </div>
          <div className={`md:hidden absolute top-0 w-1/2 h-full bg-red-400 duration-300 ease-in-out ${openDrawer ? 'right-0' : '-right-1/2'}`}>
            <div className='w-12 h-6 flex items-center justify-start m-1 md:hidden cursor-pointer' onClick={toggleDrawer}>
              <RiCloseFill />
            </div>
          </div>
          <div className="md:flex items-center justify-center m-1 cursor-pointer hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="m-2 p-0 border dark:border-pink-50 border-gray-600 bg-gray-600" />
      <div className=' p-4 flex justify-between  h-full'>
        <div className='flex flex-col justify-between '>
          <div>
          </div>
          <div>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <p className="font-sans font-bold text-2xl">Coming soon</p>
          <div className="flex p-2 items-center justify-center">
            <a href="http://github.com/kmoussai" target="_blank">
              <RiGithubFill size={'2.5em'} />
            </a>
            <a href="https://www.linkedin.com/in/kmoussai/" target="_blank">
              <RiLinkedinFill color={'#0077b5'} size={'2.5em'} />
            </a>
            <a href="https://twitter.com/k_moussai" target="_blank">
              <RiTwitterFill color={'#08a0e9'} size={'2.5em'} />
            </a>
          </div>
        </div>
        <div className='flex'>
        </div>
        {/* <div className='flex'>
          4
        </div>
        <div className='flex'>
          3
        </div> */}

      </div>
      <div className="flex items-center justify-center p-2">
        <p>Made with NextJS (!<RiHeartFill color='red' className='inline'/>) by MOUSSAID Khalid</p>
      </div>
    </div>

  )
}

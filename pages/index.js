

import { RiMenuFill, RiCloseFill } from 'react-icons/ri'
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
    // xl:px-48 lg:px-32
    <div className='container mx-auto h-full'>
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
      <div className="m-2 p-0 border border-gray-600 bg-gray-600" />
      <div className='shadow h-full'>
        <h3>Content</h3>
      </div>
    </div>

  )
}

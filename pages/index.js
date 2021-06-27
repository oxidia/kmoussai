

import { RiMenuFill, RiCloseFill, RiGithubFill, RiLinkedinFill, RiTwitterFill, RiHeartFill } from 'react-icons/ri'
import Head from "next/head";
import { useTheme } from "next-themes"
import { useEffect, useState } from 'react';
import Toggle from '../component/Toggle';
import About from '../component/About';
import Project from '../component/Project';
import Technologies from '../component/Technologie';

export default function Home() {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className='p-2 min-h-full bg-gray-50 dark:bg-gray-900 sm:border-red-600 border md:border-green-600 lg:border-blue-600 relative'>
      <style global jsx>{`
      #__next {
        height: 100%;
      }
    `}</style>
      <Head>
        <title>Khalid MOUSSAID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="flex flex-row justify-end">
          <div className="m-2 p-0 border border-gray-600 bg-gray-600" />

          <div className="md:flex items-center justify-center m-1 cursor-pointer">
            <Toggle />
          </div>
        </div>
      </header>
      <div className="mt-2 mb-2 h-1 bg-gray-600 dark:bg-gray-800" />
      <div className="">
        <About title="About me"/>
        <Project title="ProjectS"/>
        <Technologies title="Technologies"/>
        
      </div>

      <div className="flex items-center justify-center p-2">
        <p>Made with NextJS (!<RiHeartFill color='red' className='inline' />) by MOUSSAID Khalid</p>
      </div>
    </div>

  )
}

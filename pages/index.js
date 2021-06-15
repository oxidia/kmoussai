

import { RiMenuFill, RiCloseFill, RiGithubFill, RiLinkedinFill, RiTwitterFill, RiHeartFill } from 'react-icons/ri'
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="flex flex-row justify-end">
          <div className="m-2 p-0 border border-gray-600 bg-gray-600" />

          <div className="md:flex items-center justify-center m-1 cursor-pointer">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="mt-2 mb-2 h-1 bg-gray-600 dark:bg-white" />
      {/* <main>
        <div className="flex justify-center items-center border p-1 max-w-4xl m-auto">
          <div className="flex justify-center items-center flex-col border md:border-red-500 sm:border-green-500">
            <div className="sm:h-full sm:w-auto p-1 md:h-auto md:w-52 flex justify-center items-center">
              <img className="rounded" src="/profile.jpeg" />
            </div>
            <div className="flex justify-center items-center m-2 shadow-xl border opacity-25 rounded-md"  >
              <a className="m-3" href="http://github.com/kmoussai" target="_blank">
                <RiGithubFill color={'black'} />
              </a>
              <a className="m-3" href="https://www.linkedin.com/in/kmoussai/" target="_blank">
                <RiLinkedinFill color={'#0077b5'} />
              </a>
              <a className="m-3" href="https://twitter.com/k_moussai" target="_blank">
                <RiTwitterFill color={'#08a0e9'} />
              </a>
            </div>
          </div>
          <div className=" p-2 border">
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
              avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de
              polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique
              informatique,
            </p>
          </div>
        </div>
      </main> */}

      <div className="">
        <div className="mx-auto w-2/3">
          <div className="rounded-lg shadow-lg w-full flex flex-row flex-wrap p-3 antialiased" style={{
            // backgroundImage: "url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
            // backgroundRepeat: 'no-repat',
            // backgroundSize: 'cover',
            // backgroundBlendMode: 'multiply',
          }}>
            <div className="w-1/3">
              <img className="rounded-lg shadow-lg antialiased" src="/profile.jpeg" />
            </div>
            <div className="w-2/3 px-3 flex flex-row flex-wrap">
              <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                <div className="text-2xl dark:text-white leading-tight">MOUSSAID Khalid</div>
                <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
                  <span className="border-b border-dashed border-gray-500 pb-1">Full Stack Developer</span>
                </div>
                <div className="sm:absolute pt-3 md:pt-0 bottom-0 right-0 flex flex-row items-center">
                  <a className="m-3" href="http://github.com/kmoussai" target="_blank">
                    <RiGithubFill size={'1.9rem'} color={'black'} />
                  </a>
                  <a className="m-3" href="https://www.linkedin.com/in/kmoussai/" target="_blank">
                    <RiLinkedinFill size={'1.9rem'} color={'#0077b5'} />
                  </a>
                  <a className="m-3" href="https://twitter.com/k_moussai" target="_blank">
                    <RiTwitterFill size={'1.9rem'} color={'#08a0e9'} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <p>Made with NextJS (!<RiHeartFill color='red' className='inline' />) by MOUSSAID Khalid</p>
      </div>
    </div>

  )
}

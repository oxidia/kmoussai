import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { RiMoonFill, RiSunFill, RiTwitterFill } from 'react-icons/ri'
import Head from "next/head";
import { useTheme } from "next-themes"
import { useEffect, useState } from 'react';
import ThemeToggle from '../component/themeToggle';

export default function Home() {

  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true);
    // setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  if (!isMounted) return null

  return (
    // xl:px-48 lg:px-32
    <div className='border-2 container mx-auto 2xl:border-gray-600'>
      <Head>
        <title>Khalid MOUSSAID</title>
      </Head>
      <header>
        <div className="flex flex-row justify-end">
          {/* <div className="cursor-pointer border border-black dark:border-gray-100 rounded-full h-10 w-10 flex items-center justify-center m-2 p-0">
            <AiFillGithub />
          </div>
          <div className="cursor-pointer border border-black dark:border-gray-100 rounded-full h-10 w-10 flex items-center justify-center m-2">
            <AiFillLinkedin />
          </div>
          <div className="cursor-pointer border border-black dark:border-gray-100 rounded-full h-10 w-10 flex items-center justify-center m-2">
            <RiTwitterFill />
          </div>
          <div className='m-2 border border-gray-600' /> */}
          <div className="flex items-center justify-center m-2">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="m-2 p-0 border border-gray-600 bg-gray-600" />

      <p>{theme}</p>

    </div>

  )
}

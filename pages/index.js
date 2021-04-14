import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { RiMoonFill, RiSunFill, RiTwitterFill } from 'react-icons/ri'
import Head from "next/head";
import { useTheme } from "next-themes"
import { useEffect, useState } from 'react';

export default function Home() {

  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className='container mx-auto p-4' style={{ border: '1px red solid' }}>
      <Head>
        <title>Khalid MOUSSAID</title>
      </Head>
      <header>
        <div className="flex flex-row justify-end">
          <div className="cursor-pointer border border-black dark:border-gray-100 rounded-full h-10 w-10 flex items-center justify-center m-2 p-0">
            <AiFillGithub />
          </div>
          <div className="cursor-pointer border border-black dark:border-gray-100 rounded-full h-10 w-10 flex items-center justify-center m-2">
            <AiFillLinkedin />
          </div>
          <div className="cursor-pointer border border-black dark:border-gray-100 rounded-full h-10 w-10 flex items-center justify-center m-2">
            <RiTwitterFill />
          </div>
          <div className='m-2 border border-gray-600' />
          <div className="dark:bg-white bg-black cursor-pointer border border-gray-500 rounded-full h-10 w-10 flex items-center justify-center m-2">
            <button onClick={switchTheme}>
              {theme === 'dark' ? <RiSunFill color='black' /> : <RiMoonFill color='white' />}
            </button>
          </div>
        </div>
      </header>
      <div className="m-2 p-0 border border-gray-600 bg-gray-600" />

    </div>

  )
}

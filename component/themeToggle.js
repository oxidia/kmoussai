import { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill, RiTwitterFill } from 'react-icons/ri'
import { useTheme } from "next-themes"



const ThemeToggle = () => {

    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false)

    const switchToggle = () => {
        if (isMounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };

    useEffect(() => {
        setIsMounted(true);
        localStorage.getItem('theme') == null && setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    }, []);

    return (
        <div
            className={`w-20 h-10 flex justify-between items-center rounded-full p-2 relative  duration-300 ease-in-out dark:bg-white bg-black`}
            onClick={switchToggle}>
            <RiSunFill color='black' />
            <RiMoonFill color='white' />
            <div className={`dark:bg-black bg-white w-8 h-8 rounded-full shadow-md absolute transform duration-300 ease-in-out ${theme == 'dark' ? 'translate-x-8' : ''}`}>
            </div>
        </div>
    )
}

export default ThemeToggle;
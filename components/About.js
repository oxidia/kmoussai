import { RiMenuFill, RiCloseFill, RiGithubFill, RiLinkedinFill, RiTwitterFill, RiHeartFill } from 'react-icons/ri'
import Card from './Card'



export default function About({ title }) {

    return (
        <Card title={title}>
            <div className="hidden w-52 sm:flex flex-col justify-center p-1 ">
                <img loading='lazy' className="rounded-lg shadow-lg antialiased" src="/profile.jpeg" />
            </div>
            <div className="sm:w-2/3 px-3 flex flex-row flex-wrap">
                <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0 flex justify-between flex-col">
                    <div>
                        <div className="text-2xl dark:text-white leading-tight font-mono uppercase">MOUSSAID khalid</div>
                        <div className="text-normal dark:text-gray-300 hover:text-gray-400">
                            <span className="border-b border-dashed border-gray-500 pb-1 font-mono">Full Stack Developer</span>
                        </div>
                    </div>
                    <div className="py-3 text-justify font-mono dark:text-white">
                        <span className="  ">
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
                            avant impress
                        </span>
                        <span className=" ">
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
                            avant impress
                        </span>
                    </div>
                    <div className="pt-3 md:pt-0 bottom-0 right-0 flex flex-row justify-end">
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
        </Card>
    )

}
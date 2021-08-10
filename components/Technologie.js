import { RiMenuFill, RiCloseFill, RiGithubFill, RiLinkedinFill, RiTwitterFill, RiHeartFill } from 'react-icons/ri'
import Card from './Card'



export default function Technologies({ title }) {


    const data = [
        {
            title: 'backend',
            items: [

                {
                    title: 'Express Js',
                    desc: 'Express.js is a back end web application framework for Node.js',
                    icon: '/Expressjs.png'

                }
            ]
        },
        {
            title: 'Frontend',
            items: [
                {
                    title: 'Tailwind CSS',
                    desc: 'Tailwind CSS is self-described as a utility first CSS framework',
                    icon: '/tailwind.png'

                },
                {
                    title: 'Next Js',
                    desc: 'Next.js is an open-source React front-end development web framework',
                    icon: '/nextjs.png'

                },
                {
                    title: 'React Js',
                    desc: 'React.js is an open-source front-end JavaScript library for building user interfaces or UI components',
                    icon: '/reactjs.png'

                },

            ]
        },

        {
            title: 'databases',
            items: [
                {
                    title: 'Mongo db',
                    desc: 'MongoDB is a source-available cross-platform document-oriented database program',
                    icon: '/mongodb.png'

                }
            ]
        },
        {
            title: 'other techno',
            items: [
                {
                    title: 'Docker',
                    desc: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
                    icon: '/docker.png'

                }
            ]
        }
    ]
    return (
        <Card title={title}>
            <div className="w-full">

                {data.map((row) => {

                    const { title, items } = row
                    return (
                        <div key={title} className="my-1 w-full p-2 ">
                            <span className="font-mono capitalize p-3">{title}</span>
                            <div className="border-b border-gray-400 my-2" />
                            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
                                {items.map((item) => {
                                    return (
                                        <div key={item.title} className="dark:bg-gray-600 rounded-xl h-full shadow-xl transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
                                            <div className="w-full flex items-center rounded-md px-2">
                                                <span className="relative h-8 w-8 overflow-hidden rounded-md flex items-center p-0.5 mr-2 flex-shrink-0">
                                                    <img loading="lazy" className="rounded-md mr-2" src={item.icon} />
                                                </span>
                                                <div className="w-full text-left p-2 font-bold">
                                                    <span>{item.title}</span>
                                                </div>
                                            </div>
                                            <p className="p-2 font-mono">{item.desc}</p>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    )

                })}

                {/* <div className="my-1 w-full p-2 ">
                    <span className="font-mono uppercase">Frontend</span>
                    <div className="border-b border-gray-400 my-2" />
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
                        {data.front.map((item) => {
                            return (
                                <div key={item.title} className="dark:bg-gray-600 rounded-xl h-full shadow-xl transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
                                    <div className="w-full flex items-center rounded-md px-2">
                                        <span className="relative h-8 w-8 overflow-hidden rounded-md flex items-center p-0.5 mr-2 flex-shrink-0">
                                            <img loading="lazy" className="rounded-md mr-2" src={item.icon} />
                                        </span>
                                        <div className="w-full text-left p-2 font-bold">
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                    <p className="p-2 font-mono">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                     */}
            </div>
        </Card>
    )

}
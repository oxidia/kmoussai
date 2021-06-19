import { data } from 'autoprefixer'
import { RiMenuFill, RiCloseFill, RiGithubFill, RiLinkedinFill, RiTwitterFill, RiHeartFill } from 'react-icons/ri'
import {
    SiNextDotJs
} from 'react-icons/si'
import Card from './Card'


export default function Project({ title }) {


    const data = [
        {
            category: 'freelancing',
            title: 'Math on demand',
            description:
                'a platform that allows students to ask complicated math questions and get answers from professors',
            icons: [
                {
                    src: '/reactjs.png',
                    title: 'ReactJS',
                    url: ''
                },
                {
                    src: '/Expressjs.png',
                    title: 'ExpressJs',
                    url: ''
                },
                {
                    src: '/mongodb.png',
                    title: 'Mongo DB',
                    url: ''
                },
            ],
        },
        {
            category: 'Personal',
            title: 'Portfolio',
            description:
                'Personal Portfolio site built with NextJS',
            icons: [
                {
                    src: '/nextjs.png',
                    title: 'NextJS',
                    url: ''
                },
            ],
        },
    ]

    return (
        <Card title={title}>
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                {
                    data.map((item) => {
                        return (
                            <div key={item.title} className="dark:bg-gray-600 rounded-xl h-full shadow-xl transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
                                <div className="flex flex-col p-4 h-full justify-between">
                                    <div>
                                        <div className="flex flex-row">
                                            <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl">{item.category}</div>
                                        </div>
                                        <h2 className="text-xl font-bold truncate mt-1">{item.title}</h2>
                                        <p className="text-base font-mono mt-1">{item.description}</p>
                                    </div>
                                    <div className="flex flex-row mt-5 items-center justify-start">
                                        {item.icons.map((icon) => {
                                            return <img key={icon.title} className="rounded-2xl mr-2 w-9 h-auto" src={icon.src} />
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Card>
    )

}
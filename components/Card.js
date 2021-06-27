
export default function Card({ title, children }) {

    return (
        <div className="mx-auto max-w-screen-md m-1 dark:bg-gray-700 rounded-lg bg-gray-300">
            <div className="p-2 text-center italic font-mono uppercase text-2xl">
                <span>{title}</span>
            </div>
            <div className="border-b border-gray-400" />
            <div className="rounded-lg shadow-lg w-full flex flex-row justify-center p-3 antialiased">
                {children}
            </div>
        </div>
    )

}
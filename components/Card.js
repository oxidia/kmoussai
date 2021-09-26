export default function Card({ title, children }) {
  return (
    <div className="dark:bg-gray-700  bg-gray-300">
      {title && (
        <>
          <div className="p-2 text-center italic font-mono uppercase text-2xl">
            <span>{title}</span>
          </div>
          <div className="border-b border-gray-400" />
        </>
      )}
      <div className="rounded-lg shadow-lg w-full justify-center antialiased">
        {children}
      </div>
    </div>
  );
}

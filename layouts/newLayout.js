export default function PostLayout({ children }) {
  return (
    <div className='bg-yellow-900 text-white h-screen container mx-auto '>
      <div className='py-10 px-4'>
        New Layout
        {children}
      </div>
    </div>
  )
}

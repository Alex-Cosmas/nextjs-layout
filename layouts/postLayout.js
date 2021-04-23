import Tabs from '../components/Tabs'

export default function PostLayout({ children }) {
  return (
    <div className='bg-gray-900 text-white h-screen'>
      <div className='container mx-auto py-10 px-4'>
        <h1 className='text-3xl'>Post Layout</h1>
        <Tabs />
        {children}
      </div>
    </div>
  )
}

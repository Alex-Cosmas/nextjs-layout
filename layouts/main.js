export default function MainLayout({ children }) {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl'>Default Layout</h1>
      {children}
    </div>
  )
}

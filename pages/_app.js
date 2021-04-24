import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import NavBar from '../components/NavBar'
import MainLayout from '../layouts/main'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <MainLayout>{children} </MainLayout>
    </div>
  )
}

export default MyApp

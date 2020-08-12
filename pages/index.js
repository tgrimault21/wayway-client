import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
          <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <Header />
      <Presentation />
      <Footer />
    </div>
  )
}

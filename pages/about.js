// pages/about.js
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About — Aminika Medical Services</title>
      </Head>

      <Header />

      <main className="page-container">
        <h2>About Us</h2>
        <p>
          Aminika Medical Services is a healthcare provider dedicated to offering accessible,
          affordable, and high-quality healthcare to the community. We pride ourselves on delivering
          professional medical care that combines compassion, innovation, and excellence.
          We have two facilities: 
                                1. Tatu city along Ruiru-Kiambu road(curafa medical clinic)
                                2. Mugutha in Juja, behind spa mall (curafa medical clinic)
          We accept several insurance covers including : M-Tiba Jubilee, M-Tiba Britam, APA, Britam, SHA and UTAMU.
        </p>

        <h3>Our Mission</h3>
        <p>
          To provide compassionate, patient-centered healthcare with professionalism,
          affordability, and innovation.
        </p>

        <h3>Our Vision</h3>
        <p>
          To be a leading medical service provider, renowned for excellence and trusted by families across the region.
        </p>
      </main>

      <Footer />
    </>
  )
}

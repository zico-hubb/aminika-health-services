// pages/index.js
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aminika Medical Services</title>
        <meta name="description" content="Aminika Medical Services - Compassionate healthcare you can trust." />
      </Head>

      <Header />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h2>Welcome to Aminika Medical Services</h2>
            <p className="hero-sub">Compassionate, affordable, and reliable healthcare for you and your family.</p>
            <div className="hero-cta">
              <a className="btn primary" href="/departments">Explore Our Services</a>
              <a className="btn outline" href="/contact">Contact / Find Us</a>
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="quick-access">
          <div className="qa-card">
            <div className="qa-icon">🏥</div>
            <h4>Departments</h4>
            <p>Explore our range of specialized medical departments.</p>
            <a href="/departments" className="link">Learn more →</a>
          </div>

          <div className="qa-card">
            <div className="qa-icon">👩‍⚕️</div>
            <h4>Our Team</h4>
            <p>Experienced and caring medical staff ready to serve you.</p>
            <a href="/about" className="link">About our team →</a>
          </div>

          <div className="qa-card">
            <div className="qa-icon">📞</div>
            <h4>Contact Us</h4>
            <p>Get in touch or visit us for personalized care.</p>
            <a href="/contact" className="link">Contact →</a>
          </div>
        </section>

        {/* About Preview (text from your profile) */}
        <section className="about-preview">
          <h3>About Aminika</h3>
          <p>
            Aminika Medical Services is a healthcare provider committed to offering accessible
            and quality medical services to the community. Our mission is to provide compassionate,
            patient-centered healthcare with a focus on professionalism, affordability, and innovation.
          </p>
          <a className="link-btn" href="/about">Learn More About Us →</a>
        </section>

        {/* Core services */}
        <section className="services">
          <h3>Our Services</h3>
          <div className="services-grid">
            <div className="service-card">
              <h4>Outpatient Consultations</h4>
              <p>General consultations and checkups for common illnesses.</p>
            </div>
            <div className="service-card">
              <h4>Laboratory Testing</h4>
              <p>Accurate and timely diagnostic testing to support treatment.</p>
            </div>
            <div className="service-card">
              <h4>Radiology & Imaging</h4>
              <p>Modern imaging including X-ray and ultrasound services.</p>
            </div>
            <div className="service-card">
              <h4>Pharmacy</h4>
              <p>In-house pharmacy with essential and prescription medicines.</p>
            </div>
            <div className="service-card">
              <h4>Specialized Clinics</h4>
              <p>Maternal health, pediatrics, chronic care and more.</p>
            </div>
            <div className="service-card">
              <h4>Preventive Care</h4>
              <p>Vaccinations, wellness checks and health education.</p>
            </div>
          </div>
          <a className="link-btn" href="/departments">View All Services →</a>
        </section>
      </main>

      <Footer />
    </>
  )
}

// pages/contact.js
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  function handleSubmit(e) {
    e.preventDefault()
    // Simple client-side mailto approach (no backend)
    const form = e.target
    const subject = encodeURIComponent('Website inquiry')
    const body = encodeURIComponent(`Name: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`)
    window.location.href = `mailto:info@aminikamedical.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <Head>
        <title>Contact — Aminika Medical Services</title>
      </Head>

      <Header />

      <main className="page-container">
        <h2>Contact Us</h2>

        <div className="emergency-box">
          <strong>🚨 Emergency Line:</strong> <span>0707 541 174 (Available 24/7)</span>
        </div>

        <div className="contact-grid">
          <div>
            <h4>Address</h4>
            <p>[P.O BOX 55483-00200 NAIROBI]</p>

            <h4>Phone</h4>
            <p>+254 734650151</p>

            <h4>Email</h4>
            <p>info@aminikamedical.com</p>

            <h4>Visiting Hours</h4>
            <p>Mon – Sat: 8:00 AM – 8:00 PM<br/>Sun & Public Holidays: Closed (except emergencies)</p>
          </div>

          <div>
            <h4>Send us a message</h4>
            <form onSubmit={handleSubmit} className="contact-form">
              <label>Name<input name="name" required /></label>
              <label>Email<input name="email" type="email" required /></label>
              <label>Message<textarea name="message" rows="5" required /></label>
              <button className="btn primary" type="submit">Send Message</button>
              {sent && <div className="sent-note">Opening your mail client to send the message...</div>}
            </form>
          </div>
        </div>

        <div className="map-embed">
  <iframe
    title="Aminika location map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.147527284914!2d36.816!3d-1.283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f9f4cfb6f7%3A0xabc123def456!2sAminika%20Medical%20Services!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </main>

      <Footer />
    </>
  )
}

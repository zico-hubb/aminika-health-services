// components/Header.js
import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="branding">
        <img src="/logo.jpg" alt="Aminika Logo" className="logo" />
        <h1 className="site-title">AMINIKA MEDICAL SERVICES</h1>
      </div>

      <div className="nav-container">
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/departments">Departments</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <a className="emergency" href="tel:+254700000000">Emergency: +254 707 541 174</a>
      </div>
    </header>
  )
}

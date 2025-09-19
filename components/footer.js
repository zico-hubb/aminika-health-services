// components/Footer.js
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <strong>Aminika Medical Services</strong>
          <div className="footer-address">[Find us in Tatu city and in Mugutha just behind spa mall]</div>
        </div>

        <div className="footer-right">
          <div>📞 0707 541 174</div>
          <div>✉️ info@aminikamedical.com</div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>Follow us: Facebook · Twitter · Instagram</div>
        <div className="copyright">© {new Date().getFullYear()} Aminika Medical Services</div>
      </div>
    </footer>
  )
}

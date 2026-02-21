import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h2 className="footer-logo">ManuX NanoBioCeuticals</h2>
          <p className="footer-text">
            Ancient Ayurveda with modern science skincare solutions for healthy glowing skin.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Technology</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Hyderabad, India</li>
            <li>+91 98765 43210</li>
            <li>support@theaojas.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="socials">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} The Aojas. All rights reserved.
      </div>
    </footer>
  );
}

import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="brand" data-testid="footer-brand">seina</div>
            <p>
              Seina is an applied AI lab building the intelligence layer for influencer marketing. Convert creator-brand matching from an asserted discipline into a measured one, so agencies focus on strategy and brands defend their spend with data.
            </p>
            <div className="footer__copy">seina, Inc © 2026 · All Rights Reserved.</div>
          </div>
          <div className="footer__links">
            <div>
              <h4>About</h4>
              <ul>
                <li><Link href="/product" data-testid="footer-link-product">Product</Link></li>
                <li><a href="/#how" data-testid="footer-link-how">How it works</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><Link href="/contact" data-testid="footer-link-contact">Contact us</Link></li>
                <li><Link href="/terms-of-service" data-testid="footer-link-terms">Terms of Service</Link></li>
                <li><Link href="/privacy-policy" data-testid="footer-link-privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

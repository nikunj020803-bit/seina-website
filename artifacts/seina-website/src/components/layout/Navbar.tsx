import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? "is-scrolled" : ""}`} id="nav" data-testid="navbar">
      <div className="nav__inner">
        <Link href="/" className="brand" data-testid="link-home">
          seina
        </Link>
        <div className="nav__links" data-testid="nav-links">
          <Link href="/product" className={location === "/product" ? "is-active" : ""} data-testid="link-product">Product</Link>
          <a href="/#how" data-testid="link-how-it-works">How it works</a>
        </div>
        <div className="nav__cta">
          <Link href="/book-demo" className="btn btn--primary" data-testid="link-book-demo">Book a Demo</Link>
        </div>
      </div>
    </nav>
  );
}

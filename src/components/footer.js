import React from "react";
import { Button } from "./Button";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join Jelajah Nusantara newsletter to receive our best vacation reviews
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            {/* Tambahkan item footer di sini jika diperlukan */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

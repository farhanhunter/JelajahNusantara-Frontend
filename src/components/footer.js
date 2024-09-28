import React from "react";
import { button } from ".button";
import "./footer.css";

function footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">join jelajah nusantara newslater to recive our best vacation reviewes</p>
        <p className="footer-subscription-text">you can unsubscribe at any time</p>
        <div className="input -areas">
          <form>
            <input type="email" name="email" placeholder="your email" className="footer-input" />
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items"></div>
        </div>
      </div>
    </div>
  );
}

export default footer;

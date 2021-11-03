import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__inner-side">
            <div className="footer__inner-about">
              <h2>About Us</h2>
              <p>
                Established by gearheads for gearheads as a modern day men’s lifestyle publication, uncovering the
                greatest products in adventure, tech, gear, automotive, and style.
              </p>
            </div>
          </div>
          <div className="footer__inner-side">
            <div className="footer__inner-links">
              <div className="footer__inner-links-column">
                <div className="footer__inner-links-title">Policies</div>
                <a className="footer__inner-links-link"> Privacy </a>
                <a className="footer__inner-links-link"> Terms </a>
                <a className="footer__inner-links-link"> Affiliate Disclosure </a>
              </div>
              <div className="footer__inner-links-column">
                <div className="footer__inner-links-title">Website</div>
                <a className="footer__inner-links-link"> About </a>
                <a className="footer__inner-links-link"> Contact </a>
                <a className="footer__inner-links-link"> Careers </a>
              </div>
            </div>
          </div>
          <a href="#intro" className="footer__inner-anchor">
            <img src="/images/icons/arrow-top.svg" alt="" />
          </a>
        </div>
      </footer>
      <div className="copyright">
        <div className="copyright__inner">
          <div className="copyright__inner-social">
            <a href="#" className="copyright__inner-social-link">
              <img src="/images/icons/facebook.svg" alt="" />
            </a>
            <a href="#" className="copyright__inner-social-link">
              <img src="/images/icons/instagram.svg" alt="" />
            </a>
            <a href="#" className="copyright__inner-social-link">
              <img src="/images/icons/twitter.svg" alt="" />
            </a>
          </div>
          <div className="copyright__inner-text">©2021 blog. All rights reserved</div>
        </div>
      </div>
    </div>
  );
}

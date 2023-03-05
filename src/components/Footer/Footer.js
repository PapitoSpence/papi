import React from "react";

import "./Footer.css";

// Footer component to display social media links and made with love for Petfinder
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="social-media">
          <div className="social-media-wrap">
            <div
              className="social-logo"
              style={{ fontSize: "35px", color: "red" }}
            >
              Papito&nbsp;
              <a
                href="https://www.petfinder.com/"
                target="_blank"
                rel="noreferrer"
                className="a-link"
              >
                Made in love with Papi
              </a>{" "}
            </div>
            <div className="social-icons">
              <div
                className="social-icons-link"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <a
                  href="https://www.instagram.com/papito_spence/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div
                className="social-icons-link"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <a
                  href="https://web.facebook.com/spencer.mwenda"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div
                className="social-icons-link"
                target="_blank"
                aria-label="Twitter"
                rel="noreferrer"
              >
                <a
                  href="https://twitter.com/MwendaSpencer"
                  target="_blank"
                  rel="noreferrer"
                ><i class="fa-brands fa-twitter"></i></a>
                
              </div>
              <div
                className="social-icons-link"
                target="_blank"
                aria-label="Github"
                rel="noopener noreferrer"
              >
                <a
                href="https://github.com/PapitoSpence"
                  target="_blank"
                  rel="noreferrer"
                  >
                <i class="fa-brands fa-github"></i></a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

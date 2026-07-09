import React from "react";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <h2 className="footer-brand">Garcia & J. Smith Therapists</h2>

        <div className="row footer-grid">
          <div className="col-md-4 footer-col border-col-first">
            <p className="footer-info-text">123 456 7890</p>
            <p className="footer-info-text">
              <a href="mailto:info@mysite.com" className="footer-link">
                info@mysite.com
              </a>
            </p>
          </div>
          <div className="col-md-4 footer-col border-col-middle">
            <p className="footer-info-text">500 Terry Francine St.</p>
            <p className="footer-info-text mb-3">San Francisco, CA 94158</p>
            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn facebook-btn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn twitter-btn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn youtube-btn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-4 footer-col border-col-last">
            <p className="footer-info-text">
              <a href="#privacy" className="footer-link">
                Privacy Policy
              </a>
            </p>
            <p className="footer-info-text">
              <a href="#accessibility" className="footer-link">
                Accessibility Statement
              </a>
            </p>
            <p className="footer-info-text mt-4 opacity-75">
              © 2035 by Garcia & J. Smith Therapists.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing quality content and services to our
            users. Explore our platform to discover more.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Have questions or suggestions? Reach out to us at{' '}
            <a href="mailto:info@example.com">AlexanderTsiklidis@pursuit.org or SungYi@pursuit.org</a>.
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            Stay connected on social media:
            <br />
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>{' '}
            |{' '}
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 POSTR. All rights reserved by Sung Yi & Alexander Tsiklidis.</p>
      </div>
    </footer>
  );
}

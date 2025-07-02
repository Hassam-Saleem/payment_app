import React, { useState } from 'react';
import './footer.css';
import playstore from './playstore.png';
import appstore from './appstore.png';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (!email || !email.includes('@')) {
      setMessage('Invalid email format.');
      setError(true);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/payment/email/${email}`);
      if (response.data && response.data.found) {
        setMessage('Account found!');
        setError(false);
      } else {
        setMessage('Account not found.');
        setError(true);
      }
    } catch (err) {
      setMessage('Server error occurred.');
      setError(true);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-subscription">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="footer-buttons">
            <button className="search-btn" onClick={handleSearch}>🔍</button>
          </div>
          <p className={`footer-error ${error ? '' : 'success'}`}>{message}</p>
        </div>

        <div className="store-badges">
          <img src={appstore} alt="App Store" className="store-img apple" />
          <img src={playstore} alt="Google Play" className="store-img play" />
        </div>

        <div className="footer-links">
          <div>
            <h4>Our companies</h4>
            <ul>
              <li>Entergy Arkansas</li>
              <li>Entergy Louisiana</li>
              <li>Entergy Texas</li>
              <li>Entergy Mississippi</li>
            </ul>
          </div>
          <div>
            <h4>Additional links</h4>
            <ul>
              <li>KeyString Labs (Innovation)</li>
              <li>Surveys in Progress</li>
            </ul>
          </div>
          <div>
            <h4>Careers</h4>
            <ul><li>We're Hiring!</li></ul>
          </div>
          <div>
            <h4>Contact us</h4>
            <ul><li>Help & Support</li></ul>
          </div>
          <div>
            <h4>Connect with us</h4>
            <ul><li>@Entergy on social media</li></ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

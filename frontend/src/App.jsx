import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  const [form, setForm] = useState({
    accountNumber: '', phoneNumber: '', ssnOrPin: '', billAmount: '',
    email: '', firstName: '', lastName: '', cardNumber: '',
    expiry: '', cvv: '', addressLine1: '', addressLine2: '',
    city: '', state: '', zipCode: ''
  });

  useEffect(() => {
    document.title = 'Payment Portal';
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/payment', form);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast.success('Transaction Successful!');
      setForm({
        accountNumber: '', phoneNumber: '', ssnOrPin: '', billAmount: '',
        email: '', firstName: '', lastName: '', cardNumber: '',
        expiry: '', cvv: '', addressLine1: '', addressLine2: '',
        city: '', state: '', zipCode: ''
      });
    } catch (error) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast.error('Something went wrong!');
      console.error(error);
    }
  };

  return (
    <div className="overlay">
      <Header />
      <div className="page-wrapper">
        <div className="container">
          <h2>Make a Payment</h2>

          <form onSubmit={handleSubmit}>
            <label>Account # <span style={{ color: 'red' }}>*</span></label>
            <input name="accountNumber" required value={form.accountNumber} onChange={handleChange} />

            <label>Phone Number <span style={{ color: 'red' }}>*</span></label>
            <input name="phoneNumber" required value={form.phoneNumber} onChange={handleChange} />

            <label>Last 4 Digits of SSN/TIN or PIN <span style={{ color: 'red' }}>*</span></label>
            <input name="ssnOrPin" required value={form.ssnOrPin} onChange={handleChange} />

            <label>Enter Bill Amount <span style={{ color: 'red' }}>*</span></label>
            <input placeholder='0.00$' name="billAmount" required value={form.billAmount} onChange={handleChange} />

            <label>Email <span style={{ color: 'red' }}>*</span></label>
            <input placeholder='Email' name="email" type="email" required value={form.email} onChange={handleChange} />

            <label>Name <span style={{ color: 'red' }}>*</span></label>

            <div className="inline-group">
               <div style={{ flex: 1 }}>
                 <input name="firstName" placeholder="First Name" required value={form.firstName} onChange=  {handleChange} />
                 <p className="caption-label">First</p>
               </div>
             <div style={{ flex: 1 }}>
               <input name="lastName" placeholder="Last Name" required value={form.lastName} onChange={handleChange} />
               <p className="caption-label">Last</p>
             </div>
           </div>


            <label>Card Number <span style={{ color: 'red' }}>*</span></label>
            <input name="cardNumber" required value={form.cardNumber} onChange={handleChange} />

            <div className="inline-group">
              <div style={{ flex: 1 }}>
                <label>Expiry (MM/YY) <span style={{ color: 'red' }}>*</span></label>
                <input name="expiry" required value={form.expiry} onChange={handleChange} />
              </div>

              <div style={{ flex: 1 }}>
                <label>CVV <span style={{ color: 'red' }}>*</span></label>
                <input name="cvv" required value={form.cvv} onChange={handleChange} />
              </div>
            </div>

            <label>Address <span style={{ color: 'red' }}>*</span></label>

              <div>
                <input name="addressLine1" required value={form.addressLine1} onChange={handleChange} />
                <p className="caption-label">Address Line 1</p>
              </div>

              <div>
                <input name="addressLine2" value={form.addressLine2} onChange={handleChange} />
                <p className="caption-label">Address Line 2</p>
              </div>

            <label>City <span style={{ color: 'red' }}>*</span></label>
            <input name="city" required value={form.city} onChange={handleChange} />

            <div className="inline-group">
              <div style={{ flex: 1 }}>
                <label>State <span style={{ color: 'red' }}>*</span></label>
                <input name="state" required value={form.state} onChange={handleChange} />
              </div>

              <div style={{ flex: 1 }}>
                <label>Zip Code <span style={{ color: 'red' }}>*</span></label>
                <input name="zipCode" required value={form.zipCode} onChange={handleChange} />
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>

          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

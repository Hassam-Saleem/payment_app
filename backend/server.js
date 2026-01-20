//creating ref
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Payment = require('./models/payment');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://yasir:yasir123@cluster0.8fgvlxf.mongodb.net/paymentDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// API route to save form data
app.post('/api/payment', async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(200).json({ message: 'Payment Transaction successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error Making Transaction payment', error });
  }
});

// Assuming you already have your Payment model
app.get('/api/payment/email/:email', async (req, res) => {
  try {
    const user = await Payment.findOne({ email: req.params.email });
    res.json({ found: !!user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ found: false });
  }
});


app.listen(5000, () => console.log('Server running on port 5000'));
